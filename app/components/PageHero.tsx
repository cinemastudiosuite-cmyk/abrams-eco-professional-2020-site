import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-0 pt-32 text-white">
      <Image
        src="/placeholder-zgrada.svg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        unoptimized
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,23,42,0.96),rgba(15,118,75,0.78))]" />
      <div className="site-container pb-16 pt-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">{text}</p>
      </div>
    </section>
  );
}
