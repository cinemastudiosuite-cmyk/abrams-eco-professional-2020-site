import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "./components/CTASection";
import { Icon } from "./components/Icon";
import { SectionHeader } from "./components/SectionHeader";
import { ServiceCard } from "./components/ServiceCard";
import {
  advantages,
  company,
  metrics,
  pageDescriptions,
  services,
  trustPoints,
} from "./lib/content";

export const metadata: Metadata = {
  description: pageDescriptions.home,
};

export default function HomePage() {
  const featuredServices = services.slice(0, 3);

  return (
    <main id="main">
      <section className="relative isolate flex min-h-[78svh] items-center overflow-hidden bg-slate-950 pt-24 text-white">
        <Image
          src="/placeholder-hero.svg"
          alt="Стилизована илустрација стамбене зграде"
          fill
          priority
          sizes="100vw"
          unoptimized
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="site-container w-full min-w-0 py-20">
          <div className="max-w-3xl min-w-0">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-100">
              {company.tagline}
            </p>
            <h1 className="mt-5 break-words text-4xl font-semibold tracking-normal sm:text-5xl lg:text-6xl">
              Професионално управљање стамбеним заједницама у Смедереву
            </h1>
            <p className="mt-6 max-w-2xl break-words text-lg leading-8 text-slate-100">
              Поуздан управник, транспарентни извештаји, брз одзив и еко
              приступ одржавању зграда.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-emerald-900 transition hover:bg-emerald-50"
              >
                <Icon name="mail" className="h-4 w-4" />
                Затражите понуду
              </a>
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <Icon name="phone" className="h-4 w-4" />
                Контактирајте нас
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-6">
        <div className="site-container grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="reveal-on-scroll rounded-lg border border-slate-200 bg-slate-50 px-5 py-4"
            >
              <p className="text-2xl font-semibold text-emerald-800">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-slate-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal-on-scroll">
            <SectionHeader
              eyebrow="О фирми"
              title="Управљање које станарима враћа мир и прегледност"
              text="ABRAMS ECO-PROFESSIONAL 2020 помаже стамбеним заједницама да организују одржавање, финансије и комуникацију на јасан, професионалан и одржив начин."
            />
            <a
              href="/o-nama"
              className="mt-7 inline-flex items-center gap-2 rounded-lg border border-emerald-200 px-5 py-3 font-semibold text-emerald-800 transition hover:bg-emerald-50"
            >
              Сазнајте више
              <Icon name="check" className="h-4 w-4" />
            </a>
          </div>
          <div className="reveal-on-scroll overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image
              src="/placeholder-zgrada.svg"
              alt="Стилизована илустрација улаза стамбене зграде"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 52vw, 100vw"
              unoptimized
              className="h-full min-h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="site-container">
          <SectionHeader
            eyebrow="Истакнуте услуге"
            title="Све што је потребно да зграда функционише уредно"
            text="Од финансијског планирања и текућег одржавања до хитних интервенција и комуникације са институцијама."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <a
            href="/usluge"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            Погледајте све услуге
            <Icon name="check" className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="site-container">
          <SectionHeader
            eyebrow="Зашто ми"
            title="Практичан приступ, видљиви резултати"
            text="Наш рад је усмерен на јасне договоре, брзу реакцију и дугорочно очување вредности зграде."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <article
                key={item.title}
                className="reveal-on-scroll rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Icon name={item.icon} className="h-7 w-7 text-emerald-700" />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="site-container">
          <SectionHeader
            eyebrow="Поверење"
            title="Искрено о томе где смо сада"
            text="Сајт је нов, а сарадња са стамбеним заједницама је стварна и текућа. Утиске станара додајемо овде чим их прикупимо уз њихову сагласност — до тада, референце дајемо директно на позив."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {trustPoints.map((point) => (
              <article
                key={point.title}
                className="reveal-on-scroll rounded-lg border border-slate-200 bg-slate-50 p-6"
              >
                <Icon name={point.icon} className="h-7 w-7 text-emerald-700" />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
