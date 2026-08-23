import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { company, pageDescriptions } from "../lib/content";

export const metadata: Metadata = {
  title: "Контакт",
  description: pageDescriptions.contact,
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Контакт"
        title="Пошаљите упит за професионално управљање вашом зградом"
        text="Наведите основне податке о стамбеној заједници, тренутне изазове и контакт за повратни позив."
      />

      <section className="py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal-on-scroll rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <SectionHeader
              eyebrow="Форма"
              title="Затражите понуду"
              text="Наведите основне податке и опис ситуације — јавићемо се на контакт који оставите."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="grid gap-5">
            <div className="reveal-on-scroll rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-950">
                Контакт подаци
              </h2>
              <ul className="mt-5 grid gap-4 text-sm leading-7 text-slate-700">
                <li className="flex gap-3">
                  <Icon name="users" className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>Контакт особа: {company.contactPerson}</span>
                </li>
                <li>
                  <a className="flex gap-3 hover:text-emerald-800" href={company.phoneHref}>
                    <Icon name="phone" className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                    <span>{company.phone}</span>
                  </a>
                </li>
                <li>
                  <a className="flex gap-3 break-all hover:text-emerald-800" href={company.emailHref}>
                    <Icon name="mail" className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                    <span>{company.email}</span>
                  </a>
                </li>
                <li className="flex gap-3">
                  <Icon name="map" className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>{company.address}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="clock" className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>Обиласци и састанци: по договору. Хитне интервенције: 0-24.</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Позови
                </a>
                <a
                  href={company.emailHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  Пошаљи email
                </a>
              </div>
            </div>

            <div className="reveal-on-scroll overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <iframe
                title="Мапа - Др Јована Цвијића 7, Смедерево"
                src={company.mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0"
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
