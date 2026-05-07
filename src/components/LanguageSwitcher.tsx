"use client";

import { LOCALES, LOCALE_LABELS, type Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

type Props = {
  /** 是否使用紧凑样式（顶部按钮组） */
  compact?: boolean;
  className?: string;
};

export function LanguageSwitcher({ compact = true, className = "" }: Props) {
  const { locale, setLocale, dict } = useLocale();

  return (
    <div
      role="group"
      aria-label={dict.language.switcherLabel}
      className={`inline-flex items-center rounded-full border border-slate-200 bg-white/80 p-0.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm ${className}`}
    >
      {LOCALES.map((code: Locale) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            title={LOCALE_LABELS[code].native}
            className={`rounded-full px-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-imu-highlight focus-visible:ring-offset-1 focus-visible:ring-offset-white ${
              compact ? "py-1.5" : "py-2"
            } ${
              active
                ? "bg-imu-50 text-imu-brand-deep ring-1 ring-imu-highlight/30 shadow-sm"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
            }`}
          >
            {LOCALE_LABELS[code].short}
          </button>
        );
      })}
    </div>
  );
}
