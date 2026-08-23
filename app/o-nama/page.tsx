import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "../components/CTASection";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { company, pageDescriptions, referenceStats } from "../lib/content";

export const metadata: Metadata = {
  title: "О нама",
  description: pageDescriptions.about,
  alternates: { canonical: "/o-nama" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="О нама"
        title="Професионалан управник са јасним, одговорним и еко приступом"
        text="ABRAMS ECO-PROFESSIONAL 2020 је фирма из Смедерева посвећена уређеном, транспарентном и дугорочно одрживом управљању стамбеним заједницама."
      />

      <section className="py-20">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="reveal-on-scroll">
            <SectionHeader
              eyebrow="Мисија"
              title="Да свака зграда има ред, план и одговорну комуникацију"
              text="Добро управљање није само реаговање на кварове. Оно подразумева планирање, јасне финансије, договоре који се поштују и редовну комуникацију са станарима."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Јасна подела обавеза и приоритета",
                "Одговорно располагање средствима",
                "Праћење рокова и договора",
                "Одрживије одржавање заједничких простора",
              ].map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="reveal-on-scroll overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image
              src="/placeholder-upravnik.svg"
              alt="Стилизована ознака професионалног управника Александра Абрамовића"
              width={1000}
              height={1200}
              sizes="(min-width: 1024px) 45vw, 100vw"
              unoptimized
              className="h-full min-h-96 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="site-container grid gap-8 md:grid-cols-3">
          <article className="reveal-on-scroll rounded-lg border border-slate-200 bg-white p-6">
            <Icon name="leaf" className="h-8 w-8 text-emerald-700" />
            <h2 className="mt-5 text-xl font-semibold text-slate-950">
              Еколошки приступ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              ECO у називу значи пажљивији однос према ресурсима, хигијени,
              отпаду, енергетској ефикасности и дугорочном очувању зграде.
            </p>
          </article>
          <article className="reveal-on-scroll rounded-lg border border-slate-200 bg-white p-6">
            <Icon name="file" className="h-8 w-8 text-emerald-700" />
            <h2 className="mt-5 text-xl font-semibold text-slate-950">
              Транспарентан рад
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Станари треба да знају шта је договорено, шта је плаћено, шта је
              следећи приоритет и ко је задужен за реализацију.
            </p>
          </article>
          <article className="reveal-on-scroll rounded-lg border border-slate-200 bg-white p-6">
            <Icon name="users" className="h-8 w-8 text-emerald-700" />
            <h2 className="mt-5 text-xl font-semibold text-slate-950">
              Тим стручних управника
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Контакт особа је {company.contactPerson}, професионални управник
              који прати комуникацију са станарима, извођачима и институцијама,
              уз подршку тима од два професионална управника са дугогодишњим
              искуством у привреди — међу којима и искуство у безбедности и
              здрављу на раду (БЗР).
            </p>
          </article>
        </div>
      </section>

      <section className="py-20">
        <div className="site-container">
          <div className="reveal-on-scroll rounded-lg border border-emerald-200 bg-emerald-50 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
              Представљање управника
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Александар Абрамовић
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-700">
              Као контакт особа фирме {company.name}, Александар је задужен за
              договор са стамбеним заједницама, организацију активности,
              комуникацију и праћење договорених рокова.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="site-container">
          <div className="reveal-on-scroll rounded-lg border border-slate-200 bg-slate-50 p-8 md:p-10">
            <SectionHeader
              eyebrow={referenceStats.eyebrow}
              title={referenceStats.title}
              text={referenceStats.text}
            />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
