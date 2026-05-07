"use client";

import { Section } from "@/components/Section";
import { useLocale } from "@/i18n/LocaleProvider";

const icons: Record<number, string> = {
  0: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  1: "M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 7c0-2 1-3 3-3h10c2 0 3 1 3 3M4 7h16M9 3v4M15 3v4M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01",
  2: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z M9 17l-2 2 2 2 M13 17l2 2-2 2",
};

export function ResearchGrid() {
  const { dict } = useLocale();
  const { research, eyebrows, ctas } = dict;

  return (
    <Section
      id="research"
      title={research.title}
      eyebrow={eyebrows.research}
      variant="brand"
      action={
        <a
          href="#papers"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/[0.08] px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/45 hover:bg-white/[0.14]"
        >
          {ctas.seeMore}
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      }
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {research.items.map((item, i) => (
          <li
            key={item.name}
            className="group relative flex h-full flex-col rounded-2xl border border-white/[0.12] bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-400 hover:z-10 hover:-translate-y-1 hover:border-white/[0.3] hover:bg-white/[0.1] hover:shadow-xl hover:shadow-black/10"
          >
            {/* Icon */}
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.1] ring-1 ring-white/15 transition-all duration-400 group-hover:bg-amber-DEFAULT/20 group-hover:ring-amber-DEFAULT/30">
              <svg className="h-5 w-5 text-white/80 transition-colors duration-400 group-hover:text-amber-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d={icons[i] ?? icons[0]} />
              </svg>
            </div>

            <h3 className="text-base font-semibold text-white">{item.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">{item.summary}</p>

            {/* Bottom accent bar */}
            <div className="mt-5 h-px w-0 bg-gradient-to-r from-amber-DEFAULT/60 to-transparent transition-all duration-500 group-hover:w-full" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
