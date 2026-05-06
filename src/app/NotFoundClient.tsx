"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { useLocale } from "@/i18n/LocaleProvider";

export default function NotFoundClient() {
  const { dict } = useLocale();
  const { notFound } = dict;

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-noise-subtle">
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-hero-imu bg-cover bg-center px-4 pb-20 pt-20 shadow-[inset_0_8px_16px_-8px_rgba(0,0,0,0.15)] sm:px-6 sm:pb-24 sm:pt-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[size:40px_40px] bg-grid-on-brand opacity-90"
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-start">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/75">
              {notFound.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {notFound.title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              {notFound.description}
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-white/60 hover:bg-white/20"
            >
              {notFound.homeCta}
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
