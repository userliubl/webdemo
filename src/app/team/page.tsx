import type { Metadata } from "next";
import { AmbientBackground } from "@/components/AmbientBackground";
import { SiteFooter } from "@/components/SiteFooter";
import { siteMeta, teamOrganization } from "@/data/site";

export const metadata: Metadata = {
  title: "组织结构",
  description: `了解${siteMeta.title}的组织结构、研究骨干与研究小组。`,
};

const stats = [
  { label: "核心成员", value: `${teamOrganization.faculty.length} 位` },
  { label: "研究小组", value: `${teamOrganization.groups.length} 个` },
  { label: "组织方式", value: "分层协作" },
];

function PersonLine({
  name,
  role,
  title,
  focus,
  email,
}: {
  name: string;
  role: string;
  title?: string;
  focus?: string;
  email?: string;
}) {
  return (
    <li className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-card transition duration-200 hover:z-10 hover:scale-[1.02] hover:border-imu-highlight/40 motion-reduce:hover:scale-100">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{name}</h3>
          {title ? <p className="mt-1 text-sm text-slate-500">{title}</p> : null}
        </div>
        <span className="rounded border border-imu-200 bg-imu-50 px-2.5 py-0.5 text-xs font-medium text-imu-800">
          {role}
        </span>
      </div>
      {focus ? <p className="mt-3 text-sm leading-relaxed text-slate-600">{focus}</p> : null}
      {email ? (
        <a
          href={`mailto:${email}`}
          className="mt-4 inline-flex text-sm font-medium text-imu-700 underline-offset-2 hover:text-imu-900 hover:underline"
        >
          {email}
        </a>
      ) : null}
    </li>
  );
}

export default function TeamPage() {
  const { chiefScientist, committee, faculty, groups, title, intro } = teamOrganization;

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-transparent">
      <AmbientBackground />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-hero-imu bg-cover bg-center px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[size:40px_40px] bg-grid-on-brand opacity-90"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-[8%] top-12 h-44 w-44 rounded-full bg-white/12 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-[8%] top-[25%] h-36 w-36 rounded-full bg-imu-highlight/30 blur-3xl"
          />

          <div className="relative mx-auto max-w-5xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/75">Organization</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1.35fr_0.9fr] lg:items-end">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {siteMeta.title}{title}
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                  {intro}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/10 p-3 text-center">
                    <div className="text-lg font-semibold text-white sm:text-xl">{item.value}</div>
                    <div className="mt-1 text-xs text-white/70">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-b border-slate-200/80 bg-slate-50/78 px-4 py-14 backdrop-blur-[2px] sm:px-6 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(4,107,167,0.065),transparent_18%),radial-gradient(circle_at_88%_82%,rgba(4,107,167,0.05),transparent_22%)]"
          />
          <div className="relative mx-auto max-w-5xl">
            <div className="space-y-12">
              <section>
                <div className="mb-6 border-l-[3px] border-imu-highlight pl-[1.125rem]">
                  <p className="mb-1 font-mono text-xs uppercase tracking-widest text-imu-brand-deep">
                    Chief Scientist
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">首席科学家</h2>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-imu-brand via-imu-brand-deep to-imu-highlight text-xl font-semibold text-white shadow-sm">
                      {chiefScientist.name.slice(0, 2)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold text-slate-900">{chiefScientist.name}</h3>
                        <span className="rounded border border-imu-200 bg-imu-50 px-2.5 py-0.5 text-xs font-medium text-imu-800">
                          {chiefScientist.role}
                        </span>
                      </div>
                      {chiefScientist.title ? (
                        <p className="mt-1 text-sm text-slate-500">{chiefScientist.title}</p>
                      ) : null}
                      {chiefScientist.focus ? (
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{chiefScientist.focus}</p>
                      ) : null}
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{chiefScientist.note}</p>
                      {chiefScientist.email ? (
                        <a
                          href={`mailto:${chiefScientist.email}`}
                          className="mt-4 inline-flex text-sm font-medium text-imu-700 underline-offset-2 hover:text-imu-900 hover:underline"
                        >
                          {chiefScientist.email}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="mb-6 border-l-[3px] border-imu-highlight pl-[1.125rem]">
                  <p className="mb-1 font-mono text-xs uppercase tracking-widest text-imu-brand-deep">Committee</p>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">中心学术委员会</h2>
                </div>
                <ul className="grid gap-4 md:grid-cols-2">
                  {committee.map((person) => (
                    <PersonLine key={person.name} {...person} />
                  ))}
                </ul>
              </section>

              <section>
                <div className="mb-6 border-l-[3px] border-imu-highlight pl-[1.125rem]">
                  <p className="mb-1 font-mono text-xs uppercase tracking-widest text-imu-brand-deep">Faculty</p>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">研究骨干</h2>
                </div>
                <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {faculty.map((person) => (
                    <PersonLine key={person.name} {...person} />
                  ))}
                </ul>
              </section>

              <section>
                <div className="mb-6 border-l-[3px] border-imu-highlight pl-[1.125rem]">
                  <p className="mb-1 font-mono text-xs uppercase tracking-widest text-imu-brand-deep">Groups</p>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">研究小组</h2>
                </div>
                <ul className="space-y-4">
                  {groups.map((group) => (
                    <li
                      key={group.name}
                      className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition duration-200 hover:z-10 hover:scale-[1.02] hover:border-imu-highlight/40 motion-reduce:hover:scale-100"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-slate-900">{group.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">{group.summary}</p>
                        </div>
                        <div className="shrink-0 rounded-lg bg-imu-50 px-3 py-2 text-sm text-imu-800">
                          负责人：{group.leads.join("、")}
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
