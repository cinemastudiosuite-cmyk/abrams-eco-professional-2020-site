"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { company } from "../lib/content";
import { Icon } from "./Icon";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

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
  if (values.message.trim().length < 12) {
    errors.message = "Порука треба да има најмање 12 карактера.";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const body = [
      `Име: ${values.name}`,
      `Email: ${values.email}`,
      `Телефон: ${values.phone}`,
      "",
      values.message,
    ].join("\n");
    return `${company.emailHref}?subject=${encodeURIComponent(
      "Упит са сајта - професионално управљање",
    )}&body=${encodeURIComponent(body)}`;
  }, [values]);

  function updateField(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <form className="grid gap-5" noValidate onSubmit={handleSubmit}>
      <div>
        <label className="text-sm font-semibold text-slate-800" htmlFor="name">
          Име и презиме / стамбена заједница
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

      <div>
        <label className="text-sm font-semibold text-slate-800" htmlFor="message">
          Порука
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
        >
          <Icon name="mail" className="h-4 w-4" />
          Пошаљи поруку
        </button>
        <a
          href={company.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          <Icon name="phone" className="h-4 w-4" />
          Позови одмах
        </a>
      </div>

      {submitted && (
        <div
          role="status"
          className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm leading-7 text-emerald-950"
        >
          Форма је успешно проверена. Пошто сајт нема backend, пошаљите
          припремљену поруку преко email клијента:
          <a className="ml-1 font-semibold underline" href={mailtoHref}>
            отвори email
          </a>
          .
        </div>
      )}
    </form>
  );
}
