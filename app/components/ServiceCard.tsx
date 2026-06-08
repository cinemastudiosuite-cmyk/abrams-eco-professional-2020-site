import { Icon } from "./Icon";
import type { IconName } from "../lib/content";

export function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: IconName;
}) {
  return (
    <article className="reveal-on-scroll h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
      <span className="grid h-12 w-12 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
