"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function SiteFooter() {
  const { dict } = useLocale();
  const { footer, meta } = dict;

  return (
    <footer
      id="footer"
      className="relative border-t border-white/[0.08] bg-brand-darker-photo bg-cover bg-center px-4 py-14 text-white sm:px-6 sm:py-16"
    >
      {/* Top horizon accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-DEFAULT/30 to-transparent" aria-hidden />

      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 border-b border-white/[0.08] pb-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          {/* Contact column */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {footer.headline}
            </h3>
            <ul className="space-y-3.5 text-sm leading-relaxed">
              <li>
                <span className="text-[11px] uppercase tracking-wider text-white/45">{footer.addressLabel}</span>
                <p className="mt-1 text-white/85">{footer.address}</p>
              </li>
              <li>
                <span className="text-[11px] uppercase tracking-wider text-white/45">{footer.postalCodeLabel}</span>
                <p className="mt-1 text-white/85">{footer.postalCode}</p>
              </li>
              <li>
                <span className="text-[11px] uppercase tracking-wider text-white/45">{footer.phoneLabel}</span>
                <p className="mt-1 text-white/85">{footer.phone}</p>
              </li>
              <li>
                <span className="text-[11px] uppercase tracking-wider text-white/45">{footer.emailLabel}</span>
                <p className="mt-1">
                  <a
                    href={`mailto:${footer.email}`}
                    className="text-white/85 underline-offset-4 transition-colors duration-200 hover:text-amber-light hover:underline"
                  >
                    {footer.email}
                  </a>
                </p>
              </li>
              <li>
                <span className="text-[11px] uppercase tracking-wider text-white/45">{footer.officeHoursLabel}</span>
                <p className="mt-1 text-white/85">{footer.officeHours}</p>
              </li>
            </ul>
            <p className="mt-5 text-[11px] leading-relaxed text-white/45">{footer.note}</p>
          </div>

          {/* Links column */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {footer.relatedTitle}
            </h3>
            <ul className="space-y-3 text-sm">
              {footer.relatedLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white/75 underline-offset-4 transition-all duration-200 hover:text-amber-light hover:underline"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[11px] leading-relaxed text-white/40">{footer.siteCredit}</p>
          </div>

          {/* About column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {footer.aboutTitle}
            </h3>
            <p className="text-sm leading-relaxed text-white/75">{meta.description}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {meta.keywords.map((kw) => (
                <span key={kw} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-white/55">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} {meta.title}
            <span className="mx-2 text-white/25">|</span>
            <span className="text-white/45">{footer.icpNumber}</span>
          </p>
          <p className="font-mono text-[11px] text-white/35">Next.js App Router</p>
        </div>
      </div>
    </footer>
  );
}
