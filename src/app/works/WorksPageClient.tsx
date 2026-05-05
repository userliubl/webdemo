"use client";

import { AmbientBackground } from "@/components/AmbientBackground";
import { SiteFooter } from "@/components/SiteFooter";
import { useLocale } from "@/i18n/LocaleProvider";

export default function WorksPageClient() {
  const { dict } = useLocale();
  const { works, eyebrows } = dict;

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-transparent">
      <AmbientBackground />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-hero-imu bg-cover bg-center px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[size:40px_40px] bg-grid-on-brand opacity-90"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-[8%] top-12 h-44 w-44 rounded-full bg-white/12 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-[8%] top-[25%] h-36 w-36 rounded-full bg-imu-highlight/30 blur-3xl"
          />

          <div className="relative mx-auto max-w-5xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/75">
              {eyebrows.publications}
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {works.pageHeading}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              {works.pageIntro}
            </p>
          </div>
        </section>

        <section className="relative border-b border-slate-200/80 bg-slate-50/78 px-4 py-14 backdrop-blur-[2px] sm:px-6 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(4,107,167,0.065),transparent_18%),radial-gradient(circle_at_88%_82%,rgba(4,107,167,0.05),transparent_22%)]"
          />
          <div className="relative mx-auto max-w-5xl space-y-12">
            <section>
              <div className="mb-6 border-l-[3px] border-imu-highlight pl-[1.125rem]">
                <p className="mb-1 font-mono text-xs uppercase tracking-widest text-imu-brand-deep">
                  {eyebrows.papers}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {works.papersSectionTitle}
                </h2>
              </div>
              <ol className="space-y-4">
                {works.papers.map((paper, index) => (
                  <li
                    key={`${paper.title}-${paper.year}`}
                    className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-card transition duration-200 hover:z-10 hover:scale-[1.02] hover:border-imu-highlight/50 motion-reduce:hover:scale-100 sm:p-6"
                  >
                    <div className="flex flex-wrap items-start gap-3">
                      <span className="mt-0.5 font-mono text-xs text-imu-brand/40 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          {paper.tag ? (
                            <span className="rounded border border-imu-highlight/35 bg-imu-50 px-2 py-0.5 text-xs font-medium text-imu-brand-deep">
                              {paper.tag}
                            </span>
                          ) : null}
                          <span className="text-xs text-slate-500">
                            {paper.venue} · {paper.year}
                          </span>
                        </div>
                        <h3 className="mt-2 text-base font-medium leading-snug text-slate-900 sm:text-lg">
                          {paper.link ? (
                            <a
                              href={paper.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-imu-brand-deep underline decoration-imu-highlight/40 underline-offset-[5px] transition hover:text-imu-brand hover:decoration-imu-highlight"
                            >
                              {paper.title}
                            </a>
                          ) : (
                            paper.title
                          )}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">{paper.authors}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <div className="mb-6 border-l-[3px] border-imu-highlight pl-[1.125rem]">
                <p className="mb-1 font-mono text-xs uppercase tracking-widest text-imu-brand-deep">
                  {eyebrows.work}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {works.worksSectionTitle}
                </h2>
              </div>
              <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {works.list.map((work) => (
                  <li
                    key={`${work.title}-${work.year}`}
                    className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-card transition duration-200 hover:z-10 hover:scale-[1.02] hover:border-imu-highlight/40 motion-reduce:hover:scale-100"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded border border-imu-200 bg-imu-50 px-2.5 py-0.5 text-xs font-medium text-imu-800">
                        {work.category}
                      </span>
                      <span className="text-xs text-slate-500">{work.year}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900">
                      {work.link ? (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-imu-brand-deep underline decoration-imu-highlight/40 underline-offset-[5px] transition hover:text-imu-brand hover:decoration-imu-highlight"
                        >
                          {work.title}
                        </a>
                      ) : (
                        work.title
                      )}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{work.summary}</p>
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
