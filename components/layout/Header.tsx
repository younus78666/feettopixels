"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navigation, isDropdown } from "@/content/navigation";
import type { NavDropdown } from "@/content/navigation";
import { SiteLogo } from "@/components/branding/SiteLogo";
import { MobileMenu } from "./MobileMenu";
import { SearchModal } from "./SearchModal";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";
import { getHomeLabel } from "@/lib/home-label";
import { getDictionary } from "@/lib/translations";
import { getNavLabel, getNavDescription } from "@/lib/nav-utils";
import type { Locale } from "@/lib/i18n";

function localizeHref(href: string, locale: Locale): string {
  return `/${locale}${href}`;
}

function translateGroupHeading(
  heading: string,
  dict: ReturnType<typeof getDictionary>,
): string {
  const map: Record<string, string> = {
    "Physical Converters": dict.categories.physical,
    "CSS Converters": dict.categories.css,
    Calculators: dict.categories.calculators,
    Guides: dict.categories.guides,
    References: dict.categories.references,
  };
  return map[heading] || heading;
}

function DropdownMenu({
  dropdown,
  locale,
}: {
  dropdown: NavDropdown;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const dict = getDictionary(locale);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const columnCount = dropdown.groups.length;
  const isToolsMenu = dropdown.label === "Tools";
  const showDescriptions = dropdown.label === "Learn";
  const label =
    dropdown.label === "Tools"
      ? dict.nav.tools
      : dropdown.label === "Learn"
        ? dict.nav.learn
        : dropdown.label;

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {open && (
        <div
          className={cn(
            "absolute left-1/2 top-full z-50 mt-2 max-h-[70vh] -translate-x-1/2 overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-4 shadow-elevated",
            columnCount >= 3 ? "w-[760px] max-w-[calc(100vw-2rem)]" : "w-[520px] max-w-[calc(100vw-2rem)]",
            isToolsMenu && "max-h-[28rem]",
          )}
        >
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
          >
            {dropdown.groups.map((group) => {
              const groupHeading = translateGroupHeading(group.heading, dict);
              return (
                <div key={group.heading}>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                    {groupHeading}
                  </p>
                  <ul className="space-y-1">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={localizeHref(link.href, locale)}
                          className="group block rounded-lg px-2.5 py-1.5 transition-colors hover:bg-primary-50"
                          onClick={() => setOpen(false)}
                        >
                          <span className="block text-sm font-medium leading-5 text-neutral-700 group-hover:text-primary-700">
                            {getNavLabel(link, dict)}
                          </span>
                          {showDescriptions && link.description && (
                            <span className="mt-0.5 block text-[11px] leading-4 text-neutral-400 group-hover:text-neutral-500">
                              {getNavDescription(link, dict)}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dict = getDictionary(locale);
  const homeLabel = getHomeLabel(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-[background-color,box-shadow,border-color] duration-200",
          scrolled
            ? "border-b border-neutral-200/80 bg-white/80 shadow-soft backdrop-blur-xl"
            : "bg-white/0",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <SiteLogo locale={locale} className="shrink-0" />

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            <Link
              href={localizeHref("/", locale)}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              {homeLabel}
            </Link>
            {navigation.map((entry) =>
              isDropdown(entry) ? (
                <DropdownMenu
                  key={entry.label}
                  dropdown={entry}
                  locale={locale}
                />
              ) : (
                <Link
                  key={entry.href}
                  href={localizeHref(entry.href, locale)}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                >
                  {entry.label === "About" ? dict.nav.about : entry.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher locale={locale} />

            <button
              onClick={() => {
                document.dispatchEvent(
                  new KeyboardEvent("keydown", { key: "k", metaKey: true }),
                );
              }}
              className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1.5 text-sm text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-600 sm:flex"
              aria-label={`${dict.nav.search} (Ctrl+K)`}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <span className="text-xs">{dict.nav.search}</span>
              <kbd className="rounded-full border border-neutral-200 bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
                Ctrl K
              </kbd>
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className="inline-flex items-center justify-center rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700 lg:hidden"
              aria-label={dict.nav.openMenu}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        locale={locale}
      />

      <SearchModal locale={locale} />
    </>
  );
}
