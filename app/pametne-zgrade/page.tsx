import type { Metadata } from "next";
import { CTASection } from "../components/CTASection";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { smartBuilding } from "../lib/content";

export const metadata: Metadata = {
  title: "Паметне зграде",
  description:
    "Соларни панели, енергетска ефикасност и еколошки материјали за стамбене заједнице — додатна понуда уз редовно управљање зградом.",
  alternates: { canonical: "/pametne-zgrade" },
};

export default function SmartBuildingPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow={smartBuilding.eyebrow}
        title={smartBuilding.title}
        text={smartBuilding.intro}
      />

      <section className="py-20">
        <div className="site-container">
          <SectionHeader
            eyebrow="Шта нудимо"
            title="Унапређења која подижу вредност и удобност зграде"
            text="Свака ставка се разматра посебно, уз процену исплативости и без обавезе — коначну одлуку увек доноси скупштина стамбене заједнице."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {smartBuilding.items.map((item) => (
              <article
                key={item.title}
                className="reveal-on-scroll rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-xl font-semibold text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="site-container">
          <div className="reveal-on-scroll rounded-lg border border-emerald-200 bg-emerald-50 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-slate-950">
              Ово је увек опција, никад обавеза
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-700">
              Паметна и еколошка унапређења зграде нису део основне цене
              управљања. Ако скупштина изрази интересовање, прикупљамо понуде
              од проверенih извођача и, за веће инвестиције, повезујемо
              стамбену заједницу са провереним инвеститорима — станари увек
              задржавају пуну контролу над одлуком да ли, и у ком обиму, се
              инвестиција реализује.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
