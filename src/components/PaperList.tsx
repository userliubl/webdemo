"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { useLocale } from "@/i18n/LocaleProvider";

export function PaperList() {
  const { dict } = useLocale();
  const { works, eyebrows, ctas } = dict;
  const papers = works.papers;

  return (
    <Section
      id="papers"
      title={works.pageTitle}
      eyebrow={eyebrows.publications}
      action={
        <Link
          href="/works"
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-imu-400 hover:text-imu-brand-deep hover:shadow-md"
        >
          {ctas.more}
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      }
    >
      <ol className="space-y-3">
        {papers.map((paper, index) => (
          <li
            key={`${paper.title}-${paper.year}`}
            className="group relative rounded-xl border border-slate-200/80 bg-white p-5 shadow-card transition-all duration-300 hover:z-10 hover:border-imu-300/60 hover:shadow-card-hover sm:p-6"
          >
            <div className="flex items-start gap-4">
              {/* Number badge */}
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

              {/* Arrow indicator on hover */}
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
    </Section>
  );
}
