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
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-imu-400 hover:text-imu-brand-deep hover:shadow-md"
        >
          {ctas.learnMore}
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      }
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {people.list.map((person) => (
          <MemberCard key={person.name} person={person} />
        ))}
      </ul>
    </Section>
  );
}
