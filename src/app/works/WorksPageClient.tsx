"use client";

import { SiteFooter } from "@/components/SiteFooter";
import { useLocale } from "@/i18n/LocaleProvider";

export default function WorksPageClient() {
  const { dict } = useLocale();
  const { works, eyebrows } = dict;

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-noise-subtle">
      <main>
        {/* Page hero */}
        <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-hero-imu bg-cover bg-center px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-22">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[size:44px_44px] bg-grid-on-brand opacity-[0.55]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.18),transparent_70%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/12 to-transparent"
          />

          <div className="relative mx-auto max-w-5xl">
            <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
              {eyebrows.publications}
            </p>
            <h1 className="text-3xl font-bold !leading-[1.15] tracking-tight text-white sm:text-4xl">
              {works.pageHeading}
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/85">
              {works.pageIntro}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="relative border-b border-slate-200/70 bg-light-photo bg-cover bg-center px-4 py-16 sm:px-6 sm:py-20 horizon-line">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(4,107,167,0.05),transparent_25%),radial-gradient(circle_at_90%_85%,rgba(200,138,61,0.04),transparent_25%)]"
          />
          <div className="relative mx-auto max-w-5xl space-y-14">
            {/* Papers */}
            <section>
              <div className="mb-7 border-l-[3px] border-imu-highlight pl-4">
                <p className="mb-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-imu-brand/70">
                  {eyebrows.papers}
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  {works.papersSectionTitle}
                </h2>
              </div>
              <ol className="space-y-3">
                {works.papers.map((paper, index) => (
                  <li
                    key={`${paper.title}-${paper.year}`}
                    className="group relative rounded-xl border border-slate-200/80 bg-white p-5 shadow-card transition-all duration-300 hover:z-10 hover:border-imu-300/60 hover:shadow-card-hover sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 font-mono text-[11px] font-medium tabular-nums text-slate-400 transition-colors duration-300 group-hover:bg-imu-50 group-hover:text-imu-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          {paper.tag ? (
                            <span className="rounded-full border border-amber-DEFAULT/25 bg-amber-pale/80 px-2.5 py-0.5 text-[11px] font-medium text-amber-DEFAULT">
                              {paper.tag}
                            </span>
                          ) : null}
                          <span className="text-xs text-slate-400">
                            {paper.venue} · {paper.year}
                          </span>
                        </div>
                        <h3 className="text-[15px] font-semibold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-imu-brand-deep sm:text-base">
                          {paper.link ? (
                            <a
                              href={paper.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-slate-300 decoration-1 underline-offset-[5px] transition-colors duration-300 hover:decoration-imu-highlight/50"
                            >
                              {paper.title}
                            </a>
                          ) : (
                            paper.title
                          )}
                        </h3>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{paper.authors}</p>
                      </div>
                      <svg
                        className="mt-1.5 h-4 w-4 shrink-0 text-slate-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-imu-400 group-hover:translate-x-0.5"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Works */}
            <section>
              <div className="mb-7 border-l-[3px] border-imu-highlight pl-4">
                <p className="mb-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-imu-brand/70">
                  {eyebrows.work}
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  {works.worksSectionTitle}
                </h2>
              </div>
              <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {works.list.map((work) => (
                  <li
                    key={`${work.title}-${work.year}`}
                    className="group relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-card transition-all duration-300 hover:z-10 hover:-translate-y-0.5 hover:border-imu-300/50 hover:shadow-card-hover"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="rounded-full border border-imu-200 bg-imu-50 px-2.5 py-0.5 text-[11px] font-medium text-imu-700">
                        {work.category}
                      </span>
                      <span className="text-xs text-slate-400">{work.year}</span>
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-imu-brand-deep">
                      {work.link ? (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-slate-300 decoration-1 underline-offset-[5px] transition-colors duration-300 hover:decoration-imu-highlight/50"
                        >
                          {work.title}
                        </a>
                      ) : (
                        work.title
                      )}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{work.summary}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
