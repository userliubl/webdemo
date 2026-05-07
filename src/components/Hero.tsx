"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function Hero() {
  const { dict } = useLocale();
  const { hero, ctas } = dict;

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-white/[0.08] bg-hero-imu bg-cover bg-center px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24"
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-[size:44px_44px] bg-grid-on-brand opacity-[0.55]"
        aria-hidden
      />

      {/* Top atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.22),transparent_70%)]"
        aria-hidden
      />

      {/* Horizon-line glow */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/15 to-transparent"
        aria-hidden
      />

      {/* Floating ambient orbs */}
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-5%] top-[15%] h-48 w-48 rounded-full bg-amber-light/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* English label with refined typography */}
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="h-px w-8 bg-white/30" aria-hidden />
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 sm:text-xs">
            {hero.titleEn}
          </p>
          <span className="h-px w-8 bg-white/30" aria-hidden />
        </div>

        {/* Main title — bolder, more impactful */}
        <h1 className="text-3xl font-bold !leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
          {hero.titleZh}
        </h1>

        {/* Subtitle with better breathing room */}
        <p className="mx-auto mt-7 max-w-xl text-pretty text-[15px] leading-relaxed text-white/85 sm:text-base">
          {hero.subtitle}
        </p>

        {/* CTAs with refined styling */}
        <div className="mt-11 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#people"
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/[0.07] px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/[0.14] hover:shadow-lg hover:shadow-black/10"
          >
            {ctas.meetTeam}
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#papers"
            className="group inline-flex items-center gap-2 rounded-full bg-amber-DEFAULT px-6 py-3 text-sm font-medium text-white shadow-lg shadow-amber-DEFAULT/25 transition-all duration-300 hover:bg-amber-DEFAULT/90 hover:shadow-xl hover:shadow-amber-DEFAULT/30 hover:-translate-y-0.5"
          >
            {ctas.publications}
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
