import { company } from "../lib/content";
import { Icon } from "./Icon";

export function CTASection() {
  return (
    <section className="bg-emerald-800 py-16 text-white">
      <div className="site-container grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-100">
            Следећи корак
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
            Желите уређену, чисту и финансијски прегледну зграду?
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-emerald-50">
            Пошаљите кратак опис стамбене заједнице или нас позовите за договор
            о обиласку и понуди.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
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
            Позовите
          </a>
        </div>
      </div>
    </section>
  );
}
