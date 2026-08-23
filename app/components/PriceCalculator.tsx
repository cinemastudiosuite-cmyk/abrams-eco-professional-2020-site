"use client";

import { useMemo, useState } from "react";

const STANDARD_PRICE_PER_APARTMENT = 450;

export function PriceCalculator() {
  const [apartments, setApartments] = useState("30");

  const estimate = useMemo(() => {
    const parsed = Number.parseInt(apartments, 10);
    if (!Number.isFinite(parsed) || parsed <= 0) return null;
    return parsed * STANDARD_PRICE_PER_APARTMENT;
  }, [apartments]);

  return (
    <div className="reveal-on-scroll rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-lg font-semibold text-slate-950">
        Калкулатор оквирне цене — пакет Стандард
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        Унесите број станова у згради да бисте видели оквирну месечну цену по
        почетној тарифи од {STANDARD_PRICE_PER_APARTMENT} RSD по стану.
      </p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end">
        <label className="flex-1">
          <span className="text-sm font-medium text-slate-700">
            Број станова
          </span>
          <input
            type="number"
            min={1}
            inputMode="numeric"
            value={apartments}
            onChange={(event) => setApartments(event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-600"
          />
        </label>
        <div className="flex-1 rounded-lg bg-emerald-50 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-800">
            Оквирна месечна цена
          </p>
          <p className="mt-1 text-2xl font-semibold text-emerald-800">
            {estimate !== null ? `од ${estimate.toLocaleString("sr-RS")} RSD` : "—"}
          </p>
        </div>
      </div>
    </div>
  );
}
