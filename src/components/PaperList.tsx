import Link from "next/link";
import { Section } from "@/components/Section";
import { papers } from "@/data/site";

export function PaperList() {
  return (
    <Section
      id="papers"
      title="论文和工作"
      eyebrow="Publications & Work"
      action={
        <Link
          href="/works"
          className="inline-flex rounded border border-imu-brand/20 bg-white/90 px-4 py-2 text-sm font-medium text-imu-brand-deep transition hover:border-imu-highlight/60 hover:text-imu-brand"
        >
          更多
        </Link>
      }
    >
      <ol className="space-y-4">
        {papers.map((paper, index) => (
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
    </Section>
  );
}
