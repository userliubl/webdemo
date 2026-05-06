import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  /** light：浅灰底（正文区）；brand：官网「学术·科研」式深蓝底 */
  variant?: "light" | "brand";
  /** 区块标题右侧操作（如「查看更多」） */
  action?: ReactNode;
  children: ReactNode;
};

export function Section({ id, title, eyebrow, variant = "light", action, children }: SectionProps) {
  const isBrand = variant === "brand";

  const shell = isBrand
    ? "relative border-b border-white/10 bg-brand-photo bg-cover bg-center px-4 py-14 shadow-[inset_0_8px_16px_-8px_rgba(0,0,0,0.15)] sm:px-6 sm:py-16"
    : "relative border-b border-slate-200/80 bg-light-photo bg-cover bg-center bg-[size:20px_20px] bg-dot-subtle px-4 py-14 shadow-[inset_0_6px_12px_-6px_rgba(15,23,42,0.04)] sm:px-6 sm:py-16"

  const eyebrowCls = isBrand ? "text-white/65" : "text-imu-brand-deep";
  const titleCls = isBrand ? "text-white" : "text-slate-900";
  /** 浅底用主色竖条；品牌深蓝底上若仍用 imu-highlight 会与背景融在一起，改用浅色条保证对比 */
  const barCls = isBrand ? "border-l-[3px] border-white/90" : "border-l-[3px] border-imu-highlight";

  const heading = (
    <div className={`max-w-2xl ${barCls} pl-[1.125rem]`}>
      {eyebrow ? (
        <p className={`mb-1 font-mono text-xs uppercase tracking-widest ${eyebrowCls}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`text-2xl font-semibold tracking-tight sm:text-3xl ${titleCls}`}>{title}</h2>
    </div>
  );

  return (
    <section id={id} className={shell}>
      {!isBrand ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(4,107,167,0.065),transparent_18%),radial-gradient(circle_at_88%_82%,rgba(4,107,167,0.05),transparent_22%)]"
        />
      ) : null}
      <div className="mx-auto max-w-5xl">
        {action ? (
          <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div className="min-w-0 flex-1">{heading}</div>
            <div className="shrink-0 sm:max-w-[40%] sm:pt-1 sm:text-right">{action}</div>
          </div>
        ) : (
          <div className="mb-9">{heading}</div>
        )}
        {children}
      </div>
    </section>
  );
}
