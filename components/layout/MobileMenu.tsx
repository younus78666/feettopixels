"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Link from "next/link";
import { navigation, isDropdown } from "@/content/navigation";
import type { NavDropdown } from "@/content/navigation";
import { getDictionary } from "@/lib/translations";
import { getNavLabel } from "@/lib/nav-utils";
import type { Locale } from "@/lib/i18n";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  locale: Locale;
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

function ExpandableSection({
  dropdown,
  locale,
}: {
  dropdown: NavDropdown;
  locale: Locale;
}) {
  const [expanded, setExpanded] = useState(false);
  const dict = getDictionary(locale);

  const label =
    dropdown.label === "Tools"
      ? dict.nav.tools
      : dropdown.label === "Learn"
        ? dict.nav.learn
        : dropdown.label;

  return (
    <div className="border-b border-neutral-100">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between px-6 py-3.5 text-left text-base font-medium text-neutral-800 hover:bg-neutral-50"
        aria-expanded={expanded}
      >
        {label}
        <svg
          className={`h-4 w-4 text-neutral-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
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

      {expanded && (
        <div className="bg-neutral-50 pb-2">
          {dropdown.groups.map((group) => (
            <div key={group.heading} className="px-6 py-2">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {translateGroupHeading(group.heading, dict)}
              </p>
              <ul className="space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="block rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-white hover:text-primary-700"
                    >
                      {getNavLabel(link, dict)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function MobileMenu({ open, onClose, locale }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const dict = getDictionary(locale);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="fixed inset-0 bg-neutral-900/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="fixed inset-y-0 w-full max-w-sm bg-white shadow-modal ltr:right-0 rtl:left-0"
        style={{ animation: "slideIn 0.25s ease-out" }}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4">
          <span className="text-lg font-semibold text-primary-700">
            FeetToPixels
          </span>
          <button
            onClick={onClose}
            className="rounded-md p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600"
            aria-label={dict.nav.closeMenu}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav
          className="overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 65px)" }}
        >
          {navigation.map((entry) =>
            isDropdown(entry) ? (
              <ExpandableSection
                key={entry.label}
                dropdown={entry}
                locale={locale}
              />
            ) : (
              <Link
                key={entry.href}
                href={`/${locale}${entry.href}`}
                className="block border-b border-neutral-100 px-6 py-3.5 text-base font-medium text-neutral-800 hover:bg-neutral-50"
              >
                {entry.label === "About" ? dict.nav.about : entry.label}
              </Link>
            ),
          )}
        </nav>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        [dir="rtl"] @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
