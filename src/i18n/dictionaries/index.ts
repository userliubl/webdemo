import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { zh } from "./zh";
import { en } from "./en";

export const dictionaries: Record<Locale, Dictionary> = { zh, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
