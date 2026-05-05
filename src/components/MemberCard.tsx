import type { DictPerson } from "@/i18n/types";

type MemberCardProps = {
  person: DictPerson;
  featured?: boolean;
};

function getBadge(name: string) {
  return name.slice(0, 2);
}

export function MemberCard({ person, featured = false }: MemberCardProps) {
  return (
    <li
      className={`group relative flex flex-col rounded-lg border bg-white transition duration-200 hover:z-10 hover:scale-[1.02] motion-reduce:hover:scale-100 ${
        featured
          ? "border-imu-highlight/25 shadow-card hover:border-imu-highlight/60"
          : "border-slate-200 shadow-card hover:border-imu-400/60"
      }`}
    >
      <div className="flex items-start gap-4 p-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-imu-brand via-imu-brand-deep to-imu-highlight text-lg font-semibold text-white shadow-sm">
          {getBadge(person.name)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-lg font-semibold text-slate-900">{person.name}</span>
            <span className="rounded border border-imu-200 bg-imu-50 px-2.5 py-0.5 text-xs font-medium text-imu-800">
              {person.role}
            </span>
          </div>
          {person.title ? <p className="mt-1 text-sm text-slate-500">{person.title}</p> : null}
          {person.focus ? <p className="mt-3 text-sm leading-relaxed text-slate-600">{person.focus}</p> : null}
          {person.email ? (
            <a
              href={`mailto:${person.email}`}
              className="mt-4 inline-flex text-sm font-medium text-imu-700 underline-offset-2 hover:text-imu-900 hover:underline"
            >
              {person.email}
            </a>
          ) : null}
        </div>
      </div>
    </li>
  );
}
