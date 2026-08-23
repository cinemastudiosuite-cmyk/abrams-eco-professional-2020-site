import type { Metadata } from "next";
import { CTASection } from "../components/CTASection";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import {
  company,
  managerChangeSteps,
  managerChangeTemplates,
  pageDescriptions,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Промена управника",
  description: pageDescriptions.managerChange,
  alternates: { canonical: "/promena-upravnika" },
};

export default function ManagerChangePage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Промена управника"
        title="Како тече процедура промене управника стамбене заједнице"
        text="Без обзира да ли се стамбена заједница тек оснива, или мења управника из реда станара или тренутног професионалног управника — процедура прати исти основни ток."
      />

      <section className="py-20">
        <div className="site-container">
          <SectionHeader
            eyebrow="Корак по корак"
            title="Од одлуке скупштине до преузимања послова"
            text="Свака стамбена заједница има своје специфичности, али се процедура углавном своди на следеће кораке."
          />
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {managerChangeSteps.map((step) => (
              <li
                key={step.title}
                className="reveal-on-scroll rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-slate-950">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
          <p className="reveal-on-scroll mt-8 max-w-3xl text-sm leading-7 text-slate-500">
            Напомена: овај преглед је информативног карактера и не представља
            правни савет. Тачни рокови и услови зависе од статута конкретне
            стамбене заједнице и, ако постоји, од важећег уговора са
            досадашњим управником. Радо помажемо и око провере ових детаља
            пре него што се седница закаже.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="site-container">
          <SectionHeader
            eyebrow="Обрасци"
            title="Преузмите образац одлуке за вашу ситуацију"
            text="Обрасци су у Word-компатибилном формату, спремни за допуну подацима конкретне зграде и усвајање на седници скупштине."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {managerChangeTemplates.map((template) => (
              <a
                key={template.href}
                href={template.href}
                download
                className="reveal-on-scroll flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Icon name="file" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {template.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {template.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  Преузми образац (.rtf)
                  <Icon name="arrowUp" className="h-4 w-4 rotate-180" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="site-container">
          <div className="reveal-on-scroll rounded-lg border border-emerald-200 bg-emerald-50 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-slate-950">
              Нисте сигурни који образац вам треба?
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-700">
              Позовите нас на {company.phone} или пошаљите упит преко
              контакт форме — прегледамо тренутно стање стамбене заједнице и
              предложимо конкретне следеће кораке, укључујући и попуњавање
              одговарајућег обрасца одлуке.
            </p>
            <a
              href="/kontakt"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Затражите понуду
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
