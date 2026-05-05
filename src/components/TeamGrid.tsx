"use client";

import Link from "next/link";
import { MemberCard } from "@/components/MemberCard";
import { Section } from "@/components/Section";
import { useLocale } from "@/i18n/LocaleProvider";

export function TeamGrid() {
  const { dict } = useLocale();
  const { people, eyebrows, ctas } = dict;

  return (
    <Section
      id="people"
      title={people.sectionTitle}
      eyebrow={eyebrows.people}
      action={
        <Link
          href="/team"
          className="inline-flex rounded border border-imu-brand/20 bg-white/90 px-4 py-2 text-sm font-medium text-imu-brand-deep transition hover:border-imu-highlight/60 hover:text-imu-brand"
        >
          {ctas.learnMore}
        </Link>
      }
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {people.list.map((person) => (
          <MemberCard key={person.name} person={person} />
        ))}
      </ul>
    </Section>
  );
}
