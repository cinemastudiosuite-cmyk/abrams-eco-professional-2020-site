import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "../components/CTASection";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { advantages, pageDescriptions } from "../lib/content";

export const metadata: Metadata = {
  title: "Зашто изабрати нас",
  description: pageDescriptions.why,
  alternates: { canonical: "/zasto-mi" },
};

export default function WhyUsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Зашто изабрати нас"
        title="Управљање које је видљиво у свакодневном животу станара"
        text="Добар професионални управник не компликује живот станарима. Он поставља ред, прати договоре и брине да зграда дугорочно остане функционална и безбедна."
      />

      <section className="py-20">
        <div className="site-container">
          <SectionHeader
            eyebrow="Предности"
            title="Четири принципа на којима градимо сарадњу"
            text="Сарадња је најбоља када станари имају јасне информације, један поуздан контакт и конкретан план рада."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {advantages.map((item) => (
              <article
                key={item.title}
                className="reveal-on-scroll rounded-lg border border-slate-200 bg-white p-7 shadow-sm"
              >
                <Icon name={item.icon} className="h-9 w-9 text-emerald-700" />
                <h2 className="mt-5 text-2xl font-semibold text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-3 leading-8 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="reveal-on-scroll overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image
              src="/placeholder-tim.svg"
              alt="Placeholder за фотографију тима или радова на одржавању зграде"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 50vw, 100vw"
              unoptimized
              className="h-full min-h-96 w-full object-cover"
            />
          </div>
          <div className="reveal-on-scroll">
            <SectionHeader
              eyebrow="Еко фокус"
              title="Одржавање које мисли и на трошкове и на окружење"
              text="Одржив приступ значи боље планирање потрошње, пажљив избор решења, уредније заједничке просторе и мање импровизације када дође до квара."
            />
            <div className="mt-8 grid gap-4">
              {[
                "Праћење могућности за уштеду енергије и воде",
                "Организованије одлагање отпада и одржавање хигијене",
                "Планирање поправки пре него што постану скупе хаварије",
              ].map((item) => (
                <p key={item} className="flex gap-3 text-slate-700">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
