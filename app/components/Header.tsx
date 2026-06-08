"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navItems } from "../lib/content";
import { Icon } from "./Icon";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = isScrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-emerald-950/10 bg-white/95 text-slate-950 shadow-sm backdrop-blur-xl"
          : "bg-transparent text-white"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
      >
        Прескочи на садржај
      </a>
      <div className="site-container flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 font-semibold"
          aria-label={`${company.name} - почетна страна`}
          onClick={() => setMenuOpen(false)}
        >
          <span
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg border ${
              solid
                ? "border-emerald-700/20 bg-emerald-50 text-emerald-800"
                : "border-white/30 bg-white/15 text-white"
            }`}
          >
            <Icon name="leaf" className="h-6 w-6" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm tracking-wide">
              ABRAMS ECO
            </span>
            <span
              className={`block truncate text-xs font-medium ${
                solid ? "text-slate-600" : "text-white/80"
              }`}
            >
              PROFESSIONAL 2020
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Главна навигација">
          {navItems.map((item) => {
            const current = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  current
                    ? solid
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-white/15 text-white"
                    : solid
                      ? "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                      : "text-white/85 hover:bg-white/15 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={company.phoneHref}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
              solid
                ? "bg-emerald-700 text-white hover:bg-emerald-800"
                : "bg-white text-emerald-900 hover:bg-emerald-50"
            }`}
          >
            <Icon name="phone" className="h-4 w-4" />
            Позови
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Затвори мени" : "Отвори мени"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className={`grid h-11 w-11 place-items-center rounded-lg border transition lg:hidden ${
            solid
              ? "border-slate-200 bg-white text-slate-950"
              : "border-white/30 bg-white/10 text-white"
          }`}
        >
          <Icon name={menuOpen ? "x" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-slate-200 bg-white text-slate-950 shadow-xl transition lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="site-container grid gap-1 py-4" aria-label="Мобилна навигација">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-base font-medium ${
                pathname === item.href
                  ? "bg-emerald-50 text-emerald-800"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-3 font-semibold text-white"
            >
              <Icon name="phone" className="h-4 w-4" />
              Позови
            </a>
            <a
              href={company.emailHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-semibold text-slate-800"
            >
              <Icon name="mail" className="h-4 w-4" />
              Email
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
