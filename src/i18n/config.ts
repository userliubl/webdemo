/** 站点支持的语言枚举与默认值 */
export const LOCALES = ["zh", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "zh";

/** 语言在 UI 上的展示名（与字典解耦，方便切换器直接使用）*/
export const LOCALE_LABELS: Record<Locale, { native: string; short: string; lang: string }> = {
  zh: { native: "简体中文", short: "中文", lang: "zh-CN" },
  en: { native: "English", short: "EN", lang: "en" },
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}
