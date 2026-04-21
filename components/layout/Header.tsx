"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, isDropdown } from "@/content/navigation";
import type { NavDropdown } from "@/content/navigation";
import { SiteLogo } from "@/components/branding/SiteLogo";
import { MobileMenu } from "./MobileMenu";
import { SearchModal } from "./SearchModal";
import { cn } from "@/lib/utils";
import { getHomeLabel } from "@/lib/home-label";
import {
  isCurrentPath,
  isDropdownCurrent,
  localizeNavHref,
} from "@/lib/nav-active";
import { getDictionary } from "@/lib/translations";
import { getNavLabel, getNavDescription } from "@/lib/nav-utils";
import type { Locale } from "@/lib/i18n";

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

function getGroupTone(heading: string) {
  const map: Record<
    string,
    { icon: string; panelClass: string; badgeClass: string }
  > = {
    "Physical Converters": {
      icon: "PX",
      panelClass: "border-primary-100 bg-primary-50/55",
      badgeClass: "bg-primary-100 text-primary-700",
    },
    "CSS Converters": {
      icon: "CSS",
      panelClass: "border-sky-100 bg-sky-50/60",
      badgeClass: "bg-sky-100 text-sky-700",
    },
    Calculators: {
      icon: "CALC",
      panelClass: "border-amber-100 bg-amber-50/55",
      badgeClass: "bg-amber-100 text-amber-700",
    },
    Guides: {
      icon: "GUIDE",
      panelClass: "border-violet-100 bg-violet-50/55",
      badgeClass: "bg-violet-100 text-violet-700",
    },
    References: {
      icon: "REF",
      panelClass: "border-emerald-100 bg-emerald-50/55",
      badgeClass: "bg-emerald-100 text-emerald-700",
    },
  };

  return (
    map[heading] || {
      icon: "GO",
      panelClass: "border-neutral-200 bg-neutral-50/70",
      badgeClass: "bg-neutral-200 text-neutral-700",
    }
  );
}

function getLinkBadge(label: string): string {
  const upper = label.toUpperCase();

  if (upper.includes("DPI")) return "DPI";
  if (upper.includes("PPI")) return "PPI";
  if (upper.includes("REM")) return "REM";
  if (upper.includes("EM")) return "EM";
  if (upper.includes("VW")) return "VW";
  if (upper.includes("PT")) return "PT";
  if (upper.includes("PIXEL") || upper.includes("PX")) return "PX";
  if (upper.includes("INCH")) return "IN";
  if (upper.includes("CM")) return "CM";
  if (upper.includes("MM")) return "MM";
  if (upper.includes("FEET")) return "FT";
  if (upper.includes("RATIO")) return "AR";
  if (upper.includes("IMAGE")) return "IMG";
  if (upper.includes("SCREEN")) return "SCR";
  if (upper.includes("RULER")) return "RUL";
  if (upper.includes("MEGAPIXEL")) return "MP";
  if (upper.includes("PAPER")) return "A4";
  if (upper.includes("SOCIAL")) return "SOC";
  if (upper.includes("PASSPORT")) return "ID";
  if (upper.includes("PRINT")) return "300";
  if (upper.includes("WEB")) return "WEB";
  if (upper.includes("COMMON")) return "4K";

  return upper.replace(/[^A-Z]/g, "").slice(0, 3) || "GO";
}

function DropdownMenu({
  dropdown,
  locale,
}: {
  dropdown: NavDropdown;
  locale: Locale;
}) {
  const pathname = usePathname();
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
  const dropdownActive = isDropdownCurrent(pathname, dropdown, locale);
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
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
          dropdownActive
            ? "bg-primary-50 text-primary-700"
            : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
        )}
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
            "scrollbar-subtle absolute left-1/2 top-full z-50 mt-2 max-h-[70vh] -translate-x-1/2 overflow-x-hidden overflow-y-auto rounded-2xl border border-neutral-200 bg-white/96 p-3 shadow-elevated backdrop-blur-sm",
            columnCount >= 3
              ? "w-[min(1280px,calc(100vw-2rem))]"
              : "w-[min(960px,calc(100vw-2rem))]",
            isToolsMenu && "max-h-[26rem]",
          )}
        >
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
          >
            {dropdown.groups.map((group) => {
              const groupHeading = translateGroupHeading(group.heading, dict);
              const tone = getGroupTone(group.heading);
              return (
                <div
                  key={group.heading}
                  className={cn(
                    "rounded-xl border p-3",
                    tone.panelClass,
                  )}
                >
                  <div className="mb-2.5 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "inline-flex h-6 min-w-6 items-center justify-center rounded-full px-2 text-[10px] font-semibold uppercase tracking-[0.18em]",
                          tone.badgeClass,
                        )}
                      >
                        {tone.icon}
                      </span>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                        {groupHeading}
                      </p>
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                      {group.links.length}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={localizeNavHref(link.href, locale)}
                          className={cn(
                            "group flex items-start gap-2.5 rounded-lg px-2.5 py-2 transition-colors",
                            isCurrentPath(pathname, link.href, locale)
                              ? "bg-white text-primary-700 shadow-soft"
                              : "bg-white/72 hover:bg-white",
                          )}
                          aria-current={
                            isCurrentPath(pathname, link.href, locale)
                              ? "page"
                              : undefined
                          }
                          onClick={() => setOpen(false)}
                        >
                          <span className="mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded-md bg-neutral-900 px-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                            {getLinkBadge(getNavLabel(link, dict))}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-medium leading-5 text-neutral-700 group-hover:text-primary-700">
                              {getNavLabel(link, dict)}
                            </span>
                            {showDescriptions && link.description && (
                              <span className="mt-0.5 block text-[11px] leading-4 text-neutral-400 group-hover:text-neutral-500">
                                {getNavDescription(link, dict)}
                              </span>
                            )}
                          </span>
                          <span className="pt-0.5 text-xs text-neutral-300 transition-colors group-hover:text-primary-400">
                            -&gt;
                          </span>
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
  const pathname = usePathname();
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
              href={localizeNavHref("/", locale)}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                isCurrentPath(pathname, "/", locale)
                  ? "bg-primary-50 text-primary-700"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
              )}
              aria-current={
                isCurrentPath(pathname, "/", locale) ? "page" : undefined
              }
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
                  href={localizeNavHref(entry.href, locale)}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isCurrentPath(pathname, entry.href, locale)
                      ? "bg-primary-50 text-primary-700"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
                  )}
                  aria-current={
                    isCurrentPath(pathname, entry.href, locale)
                      ? "page"
                      : undefined
                  }
                >
                  {entry.label === "About" ? dict.nav.about : entry.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
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
