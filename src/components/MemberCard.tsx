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
      className={`group relative flex flex-col rounded-2xl border bg-white transition-all duration-300 hover:z-10 ${
        featured
          ? "border-imu-300/60 shadow-card hover:-translate-y-0.5 hover:border-imu-400/70 hover:shadow-card-hover"
          : "border-slate-200/80 shadow-card hover:-translate-y-0.5 hover:border-imu-300/50 hover:shadow-card-hover"
      }`}
    >
      <div className="flex items-start gap-5 p-5 sm:p-6">
        {/* Avatar with refined gradient */}
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-base font-bold text-white shadow-sm transition-shadow duration-300 group-hover:shadow-md ${
          featured
            ? "bg-gradient-to-br from-imu-brand via-imu-brand-deep to-amber-DEFAULT"
            : "bg-gradient-to-br from-imu-400 via-imu-600 to-imu-800"
        }`}>
          {getBadge(person.name)}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-base font-semibold text-slate-900">{person.name}</span>
            <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
              featured
                ? "border-amber-DEFAULT/30 bg-amber-pale/80 text-amber-DEFAULT"
                : "border-imu-200 bg-imu-50 text-imu-700"
            }`}>
              {person.role}
            </span>
          </div>
          {person.title ? (
            <p className="mt-1 text-[13px] text-slate-500">{person.title}</p>
          ) : null}
          {person.focus ? (
            <p className="mt-3 text-[13px] leading-relaxed text-slate-600">{person.focus}</p>
          ) : null}
          {person.email ? (
            <a
              href={`mailto:${person.email}`}
              className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-imu-600 underline-offset-4 transition-colors duration-200 hover:text-imu-800 hover:underline"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {person.email}
            </a>
          ) : null}
        </div>
      </div>
    </li>
  );
}
