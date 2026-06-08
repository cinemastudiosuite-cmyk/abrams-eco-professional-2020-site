import type { Metadata } from "next";
import { CTASection } from "../components/CTASection";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { ServiceCard } from "../components/ServiceCard";
import { pageDescriptions, services } from "../lib/content";

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

      <CTASection />
    </main>
  );
}
