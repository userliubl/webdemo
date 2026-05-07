import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  variant?: "light" | "brand";
  action?: ReactNode;
  children: ReactNode;
};

export function Section({ id, title, eyebrow, variant = "light", action, children }: SectionProps) {
  const isBrand = variant === "brand";

  const shell = isBrand
    ? "relative border-b border-white/[0.07] bg-brand-photo bg-cover bg-center px-4 py-16 shadow-[inset_0_6px_14px_-6px_rgba(0,0,0,0.18)] sm:px-6 sm:py-20"
    : "relative border-b border-slate-200/70 bg-light-photo bg-cover bg-center bg-[size:20px_20px] bg-dot-subtle px-4 py-16 sm:px-6 sm:py-20 horizon-line";

  const eyebrowCls = isBrand ? "text-white/60" : "text-imu-brand/70";
  const titleCls = isBrand ? "text-white" : "text-slate-900";
  const barCls = isBrand
    ? "border-l-[3px] border-amber-DEFAULT/80"
    : "border-l-[3px] border-imu-highlight";

  const heading = (
    <div className={`max-w-2xl ${barCls} pl-4`}>
      {eyebrow ? (
        <p className={`mb-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] ${eyebrowCls}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${titleCls}`}>
        {title}
      </h2>
    </div>
  );

  return (
    <section id={id} className={shell}>
      {/* Ambient corner glows for light variant */}
      {!isBrand ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(4,107,167,0.05),transparent_25%),radial-gradient(circle_at_90%_85%,rgba(200,138,61,0.04),transparent_25%)]"
          />
        </>
      ) : (
        <>
          {/* Brand variant atmospheric highlights */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-1/4 h-48 w-48 rounded-full bg-white/[0.03] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-2/3 h-36 w-36 rounded-full bg-amber-light/[0.06] blur-3xl"
          />
        </>
      )}

      <div className="mx-auto max-w-5xl">
        {action ? (
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div className="min-w-0 flex-1">{heading}</div>
            <div className="shrink-0 sm:max-w-[40%] sm:pt-1 sm:text-right">{action}</div>
          </div>
        ) : (
          <div className="mb-10">{heading}</div>
        )}
        {children}
      </div>
    </section>
  );
}
