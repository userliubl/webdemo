"use client";

import { Section } from "@/components/Section";
import { useLocale } from "@/i18n/LocaleProvider";

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
          className="inline-flex rounded border border-white px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/10"
        >
          {ctas.seeMore}
        </a>
      }
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {research.items.map((item) => (
          <li
            key={item.name}
            className="group relative flex h-full flex-col rounded-xl border border-white/55 bg-white/98 p-5 shadow-card-brand ring-1 ring-white/25 backdrop-blur-[2px] transition duration-200 hover:z-10 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:shadow-xl hover:shadow-imu-brand/20 motion-reduce:hover:translate-y-0"
          >
            <span
              className="mb-3 block h-0.5 w-8 rounded-full bg-gradient-to-r from-imu-highlight to-imu-highlight/40 transition-[width,opacity] duration-200 group-hover:w-12 group-hover:opacity-100"
              aria-hidden
            />
            <h3 className="text-base font-semibold text-slate-900">{item.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{item.summary}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
