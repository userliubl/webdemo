"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function Hero() {
  const { dict } = useLocale();
  const { hero, ctas } = dict;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-hero-imu bg-cover bg-center px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[size:40px_40px] bg-grid-on-brand opacity-90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/15 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-white/75 sm:text-sm">
          {hero.titleEn}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-[2.6rem] md:leading-tight">
          {hero.titleZh}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-white/90 sm:text-base">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#people"
            className="inline-flex rounded border border-white px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-white/10"
          >
            {ctas.meetTeam}
          </a>
          <a
            href="#papers"
            className="inline-flex rounded bg-imu-highlight px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:brightness-110"
          >
            {ctas.publications}
          </a>
        </div>
      </div>
    </section>
  );
}
