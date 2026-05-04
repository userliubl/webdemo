import Link from "next/link";
import { MemberCard } from "@/components/MemberCard";
import { Section } from "@/components/Section";
import { people } from "@/data/site";

export function TeamGrid() {
  return (
    <Section
      id="people"
      title="团队成员"
      eyebrow="People"
      action={
        <Link
          href="/team"
          className="inline-flex rounded border border-imu-brand/20 bg-white/90 px-4 py-2 text-sm font-medium text-imu-brand-deep transition hover:border-imu-highlight/60 hover:text-imu-brand"
        >
          了解更多
        </Link>
      }
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {people.map((person) => (
          <MemberCard key={person.name} person={person} />
        ))}
      </ul>
    </Section>
  );
}
