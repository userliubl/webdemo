"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_LABELS,
  isLocale,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { Dictionary } from "@/i18n/types";

const STORAGE_KEY = "stir-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  dict: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  /** 首次挂载时根据 localStorage 或浏览器语言决定初始 locale */
  useEffect(() => {
    if (typeof window === "undefined") return;
    let next: Locale | null = null;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(stored)) next = stored;
    } catch {
      // localStorage 不可用时忽略
    }
    if (!next && typeof navigator !== "undefined") {
      const lang = navigator.language?.toLowerCase() ?? "";
      if (lang.startsWith("zh")) next = "zh";
      else if (lang.startsWith("en")) next = "en";
    }
    if (next && next !== locale) setLocaleState(next);
    // 仅初始化一次
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** locale 变化时同步 <html lang>，并写入 localStorage */
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = LOCALE_LABELS[locale].lang;
      document.documentElement.dataset.locale = locale;
    }
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, locale);
      } catch {
        // 忽略
      }
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    if (!LOCALES.includes(next)) return;
    setLocaleState(next);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, dict: getDictionary(locale) }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside <LocaleProvider>");
  }
  return ctx;
}
