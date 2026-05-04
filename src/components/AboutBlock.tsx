import { Section } from "@/components/Section";
import { about } from "@/data/site";

export function AboutBlock() {
  return (
    <Section id="about" title={about.title} eyebrow="About">
      <div className="space-y-5 text-pretty leading-relaxed text-slate-600 sm:text-lg">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
