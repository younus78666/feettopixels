"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toolsDropdown, learnDropdown } from "@/content/navigation";
import { getDictionary } from "@/lib/translations";
import { getNavLabel, getNavDescription } from "@/lib/nav-utils";
import { localizeHref } from "@/lib/alternates";
import type { Locale } from "@/lib/i18n";

interface SearchModalProps {
  locale: Locale;
}

interface SearchItem {
  label: string;
  description?: string;
  href: string;
  category: string;
}

export function SearchModal({ locale }: SearchModalProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const dict = getDictionary(locale);

  // Build searchable items from navigation
  const items = useMemo<SearchItem[]>(() => {
    const result: SearchItem[] = [];

    for (const group of toolsDropdown.groups) {
      for (const link of group.links) {
        result.push({
          label: getNavLabel(link, dict),
          description: getNavDescription(link, dict),
          href: localizeHref(locale, link.href),
          category: dict.nav.tools,
        });
      }
    }

    for (const group of learnDropdown.groups) {
      for (const link of group.links) {
        result.push({
          label: getNavLabel(link, dict),
          description: getNavDescription(link, dict),
          href: localizeHref(locale, link.href),
          category: dict.nav.learn,
        });
      }
    }

    // Static pages
    result.push(
      { label: dict.nav.about, href: localizeHref(locale, "/about"), category: "Pages", description: undefined },
      { label: dict.contact.title, href: localizeHref(locale, "/contact"), category: "Pages", description: undefined },
    );

    return result;
  }, [locale, dict]);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)),
    );
  }, [query, items]);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setQuery("");
    setActiveIndex(0);
    setOpen(true);
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }, []);

  const toggleModal = useCallback(() => {
    if (open) {
      closeModal();
      return;
    }
    openModal();
  }, [closeModal, open, openModal]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const active = listRef.current.querySelector("[data-active='true']");
    if (active) {
      active.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  // Cmd+K / Ctrl+K to open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggleModal();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [toggleModal]);

  // Close on route change
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setOpen(false);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  const navigate = useCallback(
    (href: string) => {
      closeModal();
      router.push(href);
    },
    [closeModal, router],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filtered[activeIndex]) {
      e.preventDefault();
      navigate(filtered[activeIndex].href);
    } else if (e.key === "Escape") {
      closeModal();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-[15%] z-[101] w-full max-w-lg -translate-x-1/2">
        <div className="mx-4 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl">
          {/* Search input */}
          <div className="flex items-center gap-3 border-b border-neutral-100 px-4">
            <svg
              className="h-5 w-5 shrink-0 text-neutral-400"
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
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder={`${dict.nav.search}...`}
              className="h-14 w-full bg-transparent text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
            />
            <kbd className="shrink-0 rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-mono text-[10px] text-neutral-400">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div ref={listRef} className="max-h-[60vh] overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-neutral-400">
                No results found
              </div>
            ) : (
              filtered.map((item, i) => (
                <button
                  key={item.href}
                  data-active={i === activeIndex}
                  onClick={() => navigate(item.href)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                    i === activeIndex
                      ? "bg-primary-50 text-primary-700"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium">{item.label}</div>
                    {item.description && (
                      <div className="mt-0.5 truncate text-xs text-neutral-400">
                        {item.description}
                      </div>
                    )}
                  </div>
                  <span className="shrink-0 mt-0.5 rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-500">
                    {item.category}
                  </span>
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
