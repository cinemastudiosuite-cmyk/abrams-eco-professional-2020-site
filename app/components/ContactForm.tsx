"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { company } from "../lib/content";
import { Icon } from "./Icon";

type FormState = {
  name: string;
  email: string;
  phone: string;
  buildingAddress: string;
  managementType: string;
  szStatus: string;
  apartmentsCount: string;
  lokaliCount: string;
  garazeCount: string;
  yearBuilt: string;
  currentProblems: string;
  existingManagerProblem: string;
  needsMeetingPresence: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  buildingAddress: "",
  managementType: "",
  szStatus: "",
  apartmentsCount: "",
  lokaliCount: "",
  garazeCount: "",
  yearBuilt: "",
  currentProblems: "",
  existingManagerProblem: "",
  needsMeetingPresence: "",
  message: "",
};

const managementTypeOptions = [
  { value: "stanari", label: "Управник из реда станара" },
  { value: "profesionalni", label: "Професионални управник" },
  { value: "nema", label: "Тренутно нема управника" },
];

const szStatusOptions = [
  { value: "nova", label: "Нова стамбена заједница (тек се оснива)" },
  { value: "postojeca", label: "Постојећа стамбена заједница" },
];

const meetingPresenceOptions = [
  { value: "da", label: "Да, потребно је присуство на састанку" },
  { value: "ne", label: "Не, довољан је разговор/позив" },
  { value: "nije-sigurno", label: "Нисам сигуран/на" },
];

function validate(values: FormState) {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Унесите име или назив стамбене заједнице.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Унесите исправну email адресу.";
  }
  if (values.phone.trim().length < 6) {
    errors.phone = "Унесите број телефона за повратни контакт.";
  }
  if (values.buildingAddress.trim().length < 4) {
    errors.buildingAddress = "Унесите адресу стамбене заједнице.";
  }
  if (!values.managementType) {
    errors.managementType = "Изаберите тренутни начин управе.";
  }
  if (!values.szStatus) {
    errors.szStatus = "Изаберите да ли је стамбена заједница нова или постојећа.";
  }
  if (values.currentProblems.trim().length < 5) {
    errors.currentProblems = "Укратко опишите актуелне проблеме или потребе зграде.";
  }
  return errors;
}

type SubmitStatus = "idle" | "sending" | "sent" | "failed";

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const mailtoHref = useMemo(() => {
    const body = [
      `Име: ${values.name}`,
      `Email: ${values.email}`,
      `Телефон: ${values.phone}`,
      `Адреса стамбене заједнице: ${values.buildingAddress}`,
      `Начин управе: ${
        managementTypeOptions.find((o) => o.value === values.managementType)?.label ?? "-"
      }`,
      `Статус СЗ: ${
        szStatusOptions.find((o) => o.value === values.szStatus)?.label ?? "-"
      }`,
      `Број станова: ${values.apartmentsCount || "-"}`,
      `Број локала: ${values.lokaliCount || "-"}`,
      `Број гаража/гаражних места: ${values.garazeCount || "-"}`,
      `Година изградње: ${values.yearBuilt || "-"}`,
      `Актуелни проблеми: ${values.currentProblems}`,
      `Проблем са постојећом управом: ${values.existingManagerProblem || "-"}`,
      `Потребно присуство на састанку: ${
        meetingPresenceOptions.find((o) => o.value === values.needsMeetingPresence)?.label ?? "-"
      }`,
      "",
      values.message,
    ].join("\n");
    return `${company.emailHref}?subject=${encodeURIComponent(
      "Захтев за понуду - професионално управљање",
    )}&body=${encodeURIComponent(body)}`;
  }, [values]);

  function updateField(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(response.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <form className="grid gap-6" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="name">
            Име и презиме / контакт особа
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="buildingAddress">
            Адреса стамбене заједнице
          </label>
          <input
            id="buildingAddress"
            name="buildingAddress"
            value={values.buildingAddress}
            onChange={(event) => updateField("buildingAddress", event.target.value)}
            aria-invalid={Boolean(errors.buildingAddress)}
            aria-describedby={errors.buildingAddress ? "buildingAddress-error" : undefined}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          />
          {errors.buildingAddress && (
            <p id="buildingAddress-error" className="mt-2 text-sm text-red-700">
              {errors.buildingAddress}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-700">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="phone">
            Телефон
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-sm text-red-700">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="szStatus">
            Статус стамбене заједнице
          </label>
          <select
            id="szStatus"
            name="szStatus"
            value={values.szStatus}
            onChange={(event) => updateField("szStatus", event.target.value)}
            aria-invalid={Boolean(errors.szStatus)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          >
            <option value="">Изаберите...</option>
            {szStatusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.szStatus && (
            <p className="mt-2 text-sm text-red-700">{errors.szStatus}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="managementType">
            Тренутни начин управе
          </label>
          <select
            id="managementType"
            name="managementType"
            value={values.managementType}
            onChange={(event) => updateField("managementType", event.target.value)}
            aria-invalid={Boolean(errors.managementType)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          >
            <option value="">Изаберите...</option>
            {managementTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.managementType && (
            <p className="mt-2 text-sm text-red-700">{errors.managementType}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-4">
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="apartmentsCount">
            Број станова
          </label>
          <input
            id="apartmentsCount"
            name="apartmentsCount"
            type="number"
            min={0}
            inputMode="numeric"
            value={values.apartmentsCount}
            onChange={(event) => updateField("apartmentsCount", event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="lokaliCount">
            Број локала
          </label>
          <input
            id="lokaliCount"
            name="lokaliCount"
            type="number"
            min={0}
            inputMode="numeric"
            value={values.lokaliCount}
            onChange={(event) => updateField("lokaliCount", event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="garazeCount">
            Број гаража
          </label>
          <input
            id="garazeCount"
            name="garazeCount"
            type="number"
            min={0}
            inputMode="numeric"
            value={values.garazeCount}
            onChange={(event) => updateField("garazeCount", event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="yearBuilt">
            Година изградње
          </label>
          <input
            id="yearBuilt"
            name="yearBuilt"
            type="number"
            min={1900}
            max={2100}
            inputMode="numeric"
            value={values.yearBuilt}
            onChange={(event) => updateField("yearBuilt", event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-800" htmlFor="currentProblems">
          Актуелни проблеми / потребе зграде
        </label>
        <textarea
          id="currentProblems"
          name="currentProblems"
          rows={4}
          value={values.currentProblems}
          onChange={(event) => updateField("currentProblems", event.target.value)}
          aria-invalid={Boolean(errors.currentProblems)}
          aria-describedby={errors.currentProblems ? "currentProblems-error" : undefined}
          className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
        />
        {errors.currentProblems && (
          <p id="currentProblems-error" className="mt-2 text-sm text-red-700">
            {errors.currentProblems}
          </p>
        )}
      </div>

      <div>
        <label
          className="text-sm font-semibold text-slate-800"
          htmlFor="existingManagerProblem"
        >
          Проблем са постојећом управом (ако постоји)
        </label>
        <textarea
          id="existingManagerProblem"
          name="existingManagerProblem"
          rows={3}
          value={values.existingManagerProblem}
          onChange={(event) => updateField("existingManagerProblem", event.target.value)}
          className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
        />
      </div>

      <div>
        <label
          className="text-sm font-semibold text-slate-800"
          htmlFor="needsMeetingPresence"
        >
          Да ли је потребно наше присуство на састанку где се бира нови управник?
        </label>
        <select
          id="needsMeetingPresence"
          name="needsMeetingPresence"
          value={values.needsMeetingPresence}
          onChange={(event) => updateField("needsMeetingPresence", event.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
        >
          <option value="">Изаберите...</option>
          {meetingPresenceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-800" htmlFor="message">
          Додатна напомена (опционо)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Icon name="mail" className="h-4 w-4" />
          {status === "sending" ? "Шаљем..." : "Пошаљи упит"}
        </button>
        <a
          href={company.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          <Icon name="phone" className="h-4 w-4" />
          Позови одмах
        </a>
      </div>

      {status === "sent" && (
        <div
          role="status"
          className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm leading-7 text-emerald-950"
        >
          Упит је примљен. На основу унетих података припремамо предлог
          понуде и јавићемо се на наведени контакт у најкраћем могућем року.
        </div>
      )}

      {status === "failed" && (
        <div
          role="status"
          className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-950"
        >
          Упит тренутно није могао да буде послат преко сајта. Молимо
          пошаљите га директно преко email клијента:
          <a className="ml-1 font-semibold underline" href={mailtoHref}>
            отвори email
          </a>
          , или нас позовите.
        </div>
      )}
    </form>
  );
}
