import type { Metadata } from "next";
import { CTASection } from "../components/CTASection";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { faqItems, pageDescriptions } from "../lib/content";

export const metadata: Metadata = {
  title: "Питања и одговори",
  description: pageDescriptions.faq,
  alternates: { canonical: "/faq" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Питања и одговори"
        title="Најчешћа питања о ангажовању професионалног управника"
        text="Ако одговор на ваше питање није овде, позовите нас или пошаљите упит — одговарамо директно."
      />

      <section className="py-20">
        <div className="site-container max-w-3xl">
          <SectionHeader
            eyebrow="ФАQ"
            title="Одговори на најчешћа питања станара"
          />
          <div className="mt-10 grid gap-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="reveal-on-scroll group rounded-lg border border-slate-200 bg-white p-6 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-950">
                  {item.question}
                  <Icon
                    name="arrowUp"
                    className="h-4 w-4 shrink-0 rotate-180 text-emerald-700 transition group-open:rotate-0"
                  />
                </summary>
                <p className="mt-4 leading-8 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
