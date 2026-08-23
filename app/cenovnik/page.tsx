import type { Metadata } from "next";
import { CTASection } from "../components/CTASection";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { PriceCalculator } from "../components/PriceCalculator";
import { SectionHeader } from "../components/SectionHeader";
import { pageDescriptions, pricingNote, pricingTiers } from "../lib/content";

export const metadata: Metadata = {
  title: "Ценовник",
  description: pageDescriptions.pricing,
  alternates: { canonical: "/cenovnik" },
};

export default function PricingPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Ценовник"
        title="Оквирна цена професионалног управљања зградом"
        text="Три пакета услуга, прилагодљива потребама стамбене заједнице. Почетна цена важи за основни пакет — коначна понуда увек зависи од обима услуге и стања зграде."
      />

      <section className="py-20">
        <div className="site-container">
          <SectionHeader
            eyebrow="Пакети"
            title="Изаберите обим услуге који одговара вашој згради"
            text="Сваки пакет надограђује претходни — од основне администрације до комплетне услуге са уређењем околине и паметним решењима."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className="reveal-on-scroll flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  {tier.name}
                </h3>
                <p className="mt-3">
                  {tier.priceFrom ? (
                    <span className="text-2xl font-semibold text-emerald-800">
                      {tier.priceFrom}
                    </span>
                  ) : (
                    <span className="text-lg font-semibold text-emerald-800">
                      {tier.priceNote}
                    </span>
                  )}
                  {tier.priceFrom ? (
                    <span className="ml-2 text-sm text-slate-500">
                      {tier.priceNote}
                    </span>
                  ) : null}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {tier.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm leading-6 text-slate-700"
                    >
                      <Icon
                        name="check"
                        className="mt-1 h-4 w-4 shrink-0 text-emerald-700"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="reveal-on-scroll mt-8 max-w-3xl text-sm leading-7 text-slate-500">
            {pricingNote}
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="site-container max-w-2xl">
          <SectionHeader
            eyebrow="Брза процена"
            title="Израчунајте оквирну цену за вашу зграду"
            text="Ово је само оквирна процена за пакет Стандард — тачна цена се утврђује након обиласка зграде."
          />
          <div className="mt-8">
            <PriceCalculator />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="site-container">
          <div className="reveal-on-scroll rounded-lg border border-emerald-200 bg-emerald-50 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-slate-950">
              Желите тачну понуду за вашу зграду?
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-700">
              Пошаљите упит преко контакт форме или нас позовите — након
              обиласка зграде и разговора са скупштином добијате конкретну
              понуду прилагођену вашим потребама.
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
