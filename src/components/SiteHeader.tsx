"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { siteAssets } from "@/data/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Dictionary } from "@/i18n/types";

type NavItem = Dictionary["nav"]["items"][number];

function scrollToSectionId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector("header");
  const headerH = header?.getBoundingClientRect().height ?? 52;
  const docStyle = getComputedStyle(document.documentElement);
  const padTop = parseFloat(docStyle.scrollPaddingTop) || headerH;
  const offset = Math.max(headerH, padTop);
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function prefersFineHover() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function SiteHeader() {
  const pathname = usePathname();
  const { dict } = useLocale();
  const nav = useMemo<readonly NavItem[]>(() => dict.nav.items, [dict]);
  const brandText = dict.nav.titleByPath[pathname] ?? dict.meta.title;
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const hoverCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHoverCloseTimer = useCallback(() => {
    if (hoverCloseTimerRef.current) {
      clearTimeout(hoverCloseTimerRef.current);
      hoverCloseTimerRef.current = null;
    }
  }, []);

  const openMenuFromHover = useCallback(() => {
    if (!prefersFineHover()) return;
    clearHoverCloseTimer();
    setMenuOpen(true);
  }, [clearHoverCloseTimer]);

  const scheduleMenuCloseFromHover = useCallback(() => {
    if (!prefersFineHover()) return;
    clearHoverCloseTimer();
    hoverCloseTimerRef.current = setTimeout(() => {
      setMenuOpen(false);
      hoverCloseTimerRef.current = null;
    }, 160);
  }, [clearHoverCloseTimer]);

  useEffect(() => () => clearHoverCloseTimer(), [clearHoverCloseTimer]);

  const updateActive = useCallback(() => {
    setScrolled(window.scrollY > 6);
    if (pathname === "/team") {
      setActiveId("people");
      return;
    }
    if (pathname === "/works") {
      setActiveId("papers");
      return;
    }
    if (pathname !== "/") {
      setActiveId(null);
      return;
    }
    const docStyle = getComputedStyle(document.documentElement);
    const padTop = parseFloat(docStyle.scrollPaddingTop);
    const headerOffset = Number.isFinite(padTop) ? padTop : 52;
    const y = window.scrollY + headerOffset;
    if (window.scrollY < 72) {
      setActiveId(null);
      return;
    }
    let current: string | null = null;
    for (const item of nav) {
      const el = document.getElementById(item.id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= y) current = item.id;
      }
    }
    setActiveId(current);
  }, [pathname, nav]);

  useEffect(() => {
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });
    window.addEventListener("hashchange", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
      window.removeEventListener("hashchange", updateActive);
    };
  }, [updateActive]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!shellRef.current?.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    clearHoverCloseTimer();
    setMenuOpen(false);
  }, [clearHoverCloseTimer]);

  const handleNavLinkClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, item: NavItem) => {
      clearHoverCloseTimer();
      closeMenu();
      if (item.href.startsWith("/#") && pathname === "/") {
        e.preventDefault();
        const id = item.href.slice(2);
        window.history.pushState(null, "", item.href);
        requestAnimationFrame(() => {
          scrollToSectionId(id);
        });
      }
    },
    [clearHoverCloseTimer, closeMenu, pathname],
  );

  const itemClass = (id: string) => {
    const active = activeId === id;
    return [
      "group flex origin-left items-start justify-between gap-3 rounded-xl px-3 py-3 outline-none transition-all duration-200",
      "motion-reduce:transition-colors",
      "hover:scale-[1.01] motion-reduce:hover:scale-100",
      "focus-visible:ring-2 focus-visible:ring-imu-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-white",
      active
        ? "bg-imu-50 text-imu-950 ring-1 ring-imu-highlight/30"
        : "text-slate-800 hover:bg-slate-50 active:bg-slate-100",
    ].join(" ");
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 font-sans text-slate-900 antialiased backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-slate-200/70 shadow-lg shadow-slate-300/20"
          : "border-transparent shadow-none"
      }`}
    >
      <div ref={shellRef} className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex h-[52px] items-center justify-between gap-3">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 max-w-[min(100%,14rem)] items-center gap-2.5 text-slate-900 transition hover:text-imu-brand-deep active:scale-[0.99] sm:max-w-none sm:gap-3"
            aria-label={dict.meta.title}
          >
            <Image
              src={siteAssets.logoSrc}
              alt={dict.meta.logoAlt}
              width={160}
              height={48}
              className="h-8 w-auto shrink-0 object-contain object-left sm:h-9"
              priority
            />
            <span
              key={`${pathname}-${dict.meta.title}`}
              className="truncate text-sm font-semibold tracking-tight transition-colors duration-200 sm:text-[15px] sm:leading-snug"
            >
              {brandText}
            </span>
          </Link>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <LanguageSwitcher className="hidden sm:inline-flex" />

          <div
            className="relative shrink-0"
            onMouseEnter={openMenuFromHover}
            onMouseLeave={scheduleMenuCloseFromHover}
          >
            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-slate-700 transition-all duration-300 hover:scale-105 motion-reduce:hover:scale-100 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-imu-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                menuOpen
                  ? "border-imu-highlight/40 bg-imu-50 shadow-md"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
              aria-expanded={menuOpen}
              aria-controls="site-nav-dropdown"
              aria-haspopup="true"
              aria-label={dict.meta.title}
              onClick={() => {
                clearHoverCloseTimer();
                setMenuOpen((o) => !o);
              }}
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
                className={`transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}
              >
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>

            <div
              id="site-nav-dropdown"
              aria-hidden={!menuOpen}
              inert={!menuOpen ? true : undefined}
              className={`absolute right-0 top-[calc(100%-6px)] z-50 w-[min(21rem,calc(100vw-2rem))] origin-top-right rounded-2xl border border-slate-200/80 bg-white/95 px-2.5 pb-2.5 pt-4 text-slate-900 shadow-2xl shadow-slate-400/20 backdrop-blur-xl transition-all duration-300 motion-reduce:transition-opacity ${
                menuOpen
                  ? "translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-[0.92] opacity-0 motion-reduce:translate-y-0 motion-reduce:scale-100"
              }`}
            >
              <nav className="flex flex-col gap-1" aria-label={dict.meta.title}>
                {nav.map((item, index) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`${itemClass(item.id)} [animation-delay:${index * 35}ms] ${
                      menuOpen ? "animate-[fadeInUp_320ms_ease-out_both]" : ""
                    }`}
                    onClick={(e) => handleNavLinkClick(e, item)}
                  >
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                      <div className="mt-1 text-xs leading-relaxed text-slate-500 transition group-hover:text-slate-600">
                        {item.hint}
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="mt-2 flex items-center justify-between gap-2 border-t border-slate-200 pt-3 sm:hidden">
                  <span className="text-xs text-slate-500">{dict.language.switcherLabel}</span>
                  <LanguageSwitcher />
                </div>
              </nav>
            </div>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}
