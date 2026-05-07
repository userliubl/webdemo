"use client";

import { useCallback, useEffect, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

const SHOW_AFTER = 320;

export function BackToTop() {
  const { dict } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label={dict.backToTop}
      className={`fixed bottom-6 right-6 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-imu-brand shadow-lg shadow-imu-brand-deep/25 transition-all duration-300 hover:bg-imu-600 hover:shadow-xl hover:shadow-imu-brand-deep/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-DEFAULT focus-visible:ring-offset-2 sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-white" aria-hidden>
        <path d="M6 14l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
