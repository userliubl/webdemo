"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function SiteFooter() {
  const { dict } = useLocale();
  const { footer, meta } = dict;

  return (
    <footer
      id="footer"
      className="border-t border-white/10 bg-brand-darker-photo bg-cover bg-center px-4 py-12 text-white sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white">{footer.headline}</h3>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>
                <span className="text-white">{footer.addressLabel}</span>
                <p className="mt-0.5 text-white">{footer.address}</p>
              </li>
              <li>
                <span className="text-white">{footer.postalCodeLabel}</span>
                <p className="mt-0.5 text-white">{footer.postalCode}</p>
              </li>
              <li>
                <span className="text-white">{footer.phoneLabel}</span>
                <p className="mt-0.5 text-white">{footer.phone}</p>
              </li>
              <li>
                <span className="text-white">{footer.emailLabel}</span>
                <p className="mt-0.5">
                  <a
                    href={`mailto:${footer.email}`}
                    className="text-white underline-offset-2 hover:text-white/85 hover:underline"
                  >
                    {footer.email}
                  </a>
                </p>
              </li>
              <li>
                <span className="text-white">{footer.officeHoursLabel}</span>
                <p className="mt-0.5 text-white">{footer.officeHours}</p>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-white">{footer.note}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white">
              {footer.relatedTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footer.relatedLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline-offset-2 transition hover:text-white/85 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-white">{footer.siteCredit}</p>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white">
              {footer.aboutTitle}
            </h3>
            <p className="text-sm leading-relaxed text-white">{meta.description}</p>
            <p className="mt-4 text-xs text-white">
              {footer.keywordsLabel}
              {meta.keywords.join(" · ")}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} {meta.title}
            <span className="mx-2 text-white">|</span>
            <span className="text-white">{footer.icpNumber}</span>
          </p>
          <p className="font-mono text-xs text-white">Next.js App Router</p>
        </div>
      </div>
    </footer>
  );
}
