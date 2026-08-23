import type { Metadata } from "next";
import { CTASection } from "../components/CTASection";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { ServiceCard } from "../components/ServiceCard";
import { beforeAfter, pageDescriptions, partners, services } from "../lib/content";

export const metadata: Metadata = {
  title: "Услуге",
  description: pageDescriptions.services,
  alternates: { canonical: "/usluge" },
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Услуге"
        title="Комплетна подршка за професионално управљање зградом"
        text="Услуге су прилагођене потребама конкретне стамбене заједнице: од основне администрације до координације већих поправки и хитних интервенција."
      />

      <section className="py-20">
        <div className="site-container">
          <SectionHeader
            eyebrow="Шта радимо"
            title="Услуге које покривају свакодневни рад зграде"
            text="Свака стамбена заједница има другачије потребе, зато се обим посла, приоритети и динамика договарају након разговора и увида у стање зграде."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal-on-scroll">
            <SectionHeader
              eyebrow="Начин рада"
              title="Од првог разговора до јасног плана одржавања"
              text="Процес почиње упознавањем са стамбеном заједницом, увидом у тренутно стање и договором о приоритетима. Након тога се дефинишу рокови, обавезе и начин извештавања."
            />
          </div>
          <ol className="grid gap-4">
            {[
              "Разговор са представницима станара",
              "Увид у потребе зграде и постојеће обавезе",
              "Предлог обима услуге и модела сарадње",
              "Организација одржавања, комуникације и извештавања",
            ].map((step, index) => (
              <li
                key={step}
                className="reveal-on-scroll flex gap-4 rounded-lg border border-slate-200 bg-white p-5"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-700 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="font-medium text-slate-800">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="site-container">
          <SectionHeader
            eyebrow="Партнери"
            title="Проверене фирме за све око зграде"
            text="Не радимо све сами — ослањамо се на дугогодишњу сарадњу са проверенim фирмама за специјализоване послове, тако да стамбена заједница добија комплетну услугу без тражења извођача на своју руку."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="reveal-on-scroll rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Icon name={partner.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {partner.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-emerald-700">
                  {partner.role}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {partner.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="site-container">
          <SectionHeader
            eyebrow={beforeAfter.eyebrow}
            title={beforeAfter.title}
            text={beforeAfter.text}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {["Пре", "После"].map((label) => (
              <div
                key={label}
                className="reveal-on-scroll flex min-h-56 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center"
              >
                <Icon name="sparkles" className="h-8 w-8 text-emerald-700" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {label}
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                  Овде ће бити стварна фотографија чим је прикупимо.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 py-20 text-white">
        <div className="site-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="reveal-on-scroll">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Додатна понуда
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Размишљате о паметној и еколошкој згради?
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-emerald-100">
              Соларни панели, енергетска ефикасност и еколошки материјали —
              повезујемо стамбену заједницу са провереним извођачима и
              инвеститорима, увек као опцију о којој одлучује скупштина.
            </p>
            <a
              href="/pametne-zgrade"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-emerald-900 transition hover:bg-emerald-50"
            >
              <Icon name="sun" className="h-4 w-4" />
              Сазнајте више о паметним зградама
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
