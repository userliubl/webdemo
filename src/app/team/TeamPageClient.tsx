"use client";

import { SiteFooter } from "@/components/SiteFooter";
import { useLocale } from "@/i18n/LocaleProvider";
import type { DictPerson } from "@/i18n/types";

function PersonLine({ name, role, title, focus, email }: DictPerson) {
  return (
    <li className="group relative rounded-xl border border-slate-200/80 bg-white p-4 shadow-card transition-all duration-300 hover:z-10 hover:-translate-y-0.5 hover:border-imu-300/50 hover:shadow-card-hover">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-imu-brand-deep">{name}</h3>
          {title ? <p className="mt-1 text-[13px] text-slate-500">{title}</p> : null}
        </div>
        <span className="rounded-full border border-imu-200 bg-imu-50 px-2.5 py-0.5 text-[11px] font-medium text-imu-700">
          {role}
        </span>
      </div>
      {focus ? <p className="mt-3 text-[13px] leading-relaxed text-slate-600">{focus}</p> : null}
      {email ? (
        <a
          href={`mailto:${email}`}
          className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-imu-600 underline-offset-4 transition-colors duration-200 hover:text-imu-800 hover:underline"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {email}
        </a>
      ) : null}
    </li>
  );
}

export default function TeamPageClient() {
  const { dict } = useLocale();
  const { team, eyebrows, meta } = dict;
  const { chiefScientist, committee, faculty, groups } = team;

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-noise-subtle">
      <main>
        {/* Page hero — aligned with new Hero style */}
        <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-hero-imu bg-cover bg-center px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-22">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[size:44px_44px] bg-grid-on-brand opacity-[0.55]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.18),transparent_70%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/12 to-transparent"
          />

          <div className="relative mx-auto max-w-5xl">
            <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
              {eyebrows.organization}
            </p>
            <h1 className="text-3xl font-bold !leading-[1.15] tracking-tight text-white sm:text-4xl">
              {team.sectionTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/85">
              {team.intro}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="relative border-b border-slate-200/70 bg-light-photo bg-cover bg-center px-4 py-16 sm:px-6 sm:py-20 horizon-line">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(4,107,167,0.05),transparent_25%),radial-gradient(circle_at_90%_85%,rgba(200,138,61,0.04),transparent_25%)]"
          />
          <div className="relative mx-auto max-w-5xl">
            <div className="space-y-14">
              {/* Chief Scientist */}
              <section>
                <div className="mb-7 border-l-[3px] border-imu-highlight pl-4">
                  <p className="mb-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-imu-brand/70">
                    {eyebrows.chiefScientist}
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {team.chiefScientistTitle}
                  </h2>
                </div>
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-card-hover">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-imu-brand via-imu-brand-deep to-amber-DEFAULT text-xl font-bold text-white shadow-sm">
                      {chiefScientist.name.slice(0, 2)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-slate-900">{chiefScientist.name}</h3>
                        <span className="rounded-full border border-amber-DEFAULT/30 bg-amber-pale/80 px-2.5 py-0.5 text-[11px] font-medium text-amber-DEFAULT">
                          {chiefScientist.role}
                        </span>
                      </div>
                      {chiefScientist.title ? (
                        <p className="mt-1 text-[13px] text-slate-500">{chiefScientist.title}</p>
                      ) : null}
                      {chiefScientist.focus ? (
                        <p className="mt-3 text-[13px] leading-relaxed text-slate-600">{chiefScientist.focus}</p>
                      ) : null}
                      <p className="mt-3 text-[13px] leading-relaxed text-slate-600">{chiefScientist.note}</p>
                      {chiefScientist.email ? (
                        <a
                          href={`mailto:${chiefScientist.email}`}
                          className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-imu-600 underline-offset-4 transition-colors duration-200 hover:text-imu-800 hover:underline"
                        >
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {chiefScientist.email}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </section>

              {/* Committee */}
              <section>
                <div className="mb-7 border-l-[3px] border-imu-highlight pl-4">
                  <p className="mb-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-imu-brand/70">
                    {eyebrows.committee}
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {team.committeeTitle}
                  </h2>
                </div>
                <ul className="grid gap-4 md:grid-cols-2">
                  {committee.map((person) => (
                    <PersonLine key={person.name} {...person} />
                  ))}
                </ul>
              </section>

              {/* Faculty */}
              <section>
                <div className="mb-7 border-l-[3px] border-imu-highlight pl-4">
                  <p className="mb-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-imu-brand/70">
                    {eyebrows.faculty}
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {team.facultyTitle}
                  </h2>
                </div>
                <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {faculty.map((person) => (
                    <PersonLine key={person.name} {...person} />
                  ))}
                </ul>
              </section>

              {/* Groups */}
              <section>
                <div className="mb-7 border-l-[3px] border-imu-highlight pl-4">
                  <p className="mb-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-imu-brand/70">
                    {eyebrows.groups}
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {team.groupsTitle}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {groups.map((group) => (
                    <li
                      key={group.name}
                      className="group relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-card transition-all duration-300 hover:z-10 hover:-translate-y-0.5 hover:border-imu-300/50 hover:shadow-card-hover"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-imu-brand-deep">{group.name}</h3>
                          <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{group.summary}</p>
                        </div>
                        <div className="shrink-0 rounded-lg bg-imu-50 px-3 py-2 text-[13px] text-imu-700">
                          {team.leadsLabel}
                          {group.leads.join("、")}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
