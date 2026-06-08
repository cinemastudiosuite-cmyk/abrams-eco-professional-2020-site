import { company, navItems } from "../lib/content";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-500/15 text-emerald-300">
              <Icon name="leaf" className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold">{company.name}</p>
              <p className="text-sm text-slate-300">{company.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
            Поуздано, транспарентно и одрживо управљање стамбеним заједницама у
            Смедереву.
          </p>
          <p className="mt-5 text-sm text-slate-400">
            ПИБ: {company.pib} | Матични број: {company.mb}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
            Брзи линкови
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
            Контакт
          </h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300">
            <li className="flex gap-3">
              <Icon name="map" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
              <span>{company.address}</span>
            </li>
            <li>
              <a className="flex gap-3 hover:text-white" href={company.phoneHref}>
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{company.phone}</span>
              </a>
            </li>
            <li>
              <a className="flex gap-3 break-all hover:text-white" href={company.emailHref}>
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{company.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="site-container flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. Сва права задржана.</p>
          <p>Сајт је спреман за статички deploy.</p>
        </div>
      </div>
    </footer>
  );
}
