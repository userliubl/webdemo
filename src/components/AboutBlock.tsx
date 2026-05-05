"use client";

import { Section } from "@/components/Section";
import { useLocale } from "@/i18n/LocaleProvider";

export function AboutBlock() {
  const { dict } = useLocale();
  const { about, eyebrows } = dict;

  return (
    <Section id="about" title={about.title} eyebrow={eyebrows.about}>
      <div className="space-y-5 text-pretty leading-relaxed text-slate-600 sm:text-lg">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
