import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/alternates";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  locale?: Locale;
  href?: string;
  className?: string;
  showTagline?: boolean;
}

function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#0f766e,#22d3ee)] shadow-[0_18px_35px_-22px_rgba(15,118,110,0.95)]",
        className,
      )}
      aria-hidden="true"
    >
      <span className="absolute inset-[1px] rounded-[17px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]" />
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-7 w-7"
      >
        <rect x="6" y="7" width="7" height="7" rx="2" fill="white" fillOpacity="0.98" />
        <rect x="15.5" y="7" width="7" height="7" rx="2" fill="white" fillOpacity="0.7" />
        <rect x="6" y="16.5" width="7" height="7" rx="2" fill="white" fillOpacity="0.65" />
        <path
          d="M14 30.5H30.5"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M18 34.5V30.5M23 34.5V30.5M28 34.5V30.5"
          stroke="white"
          strokeOpacity="0.8"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14.5 27.5L29.5 12.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M23.5 12.5H29.5V18.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function SiteLogo({
  locale,
  href,
  className,
  showTagline = true,
}: SiteLogoProps) {
  const resolvedHref = href ?? (locale ? localizeHref(locale, "/") : "/");

  const content = (
    <>
      <BrandMark />
      <span className="flex min-w-0 flex-col">
        <span className="text-[15px] font-semibold tracking-[-0.04em] text-neutral-950 sm:text-base">
          Feet<span className="text-primary-600">To</span>Pixels
        </span>
        {showTagline && (
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
            DPI / PPI / CSS
          </span>
        )}
      </span>
    </>
  );

  return (
    <Link
      href={resolvedHref}
      aria-label="FeetToPixels home"
      className={cn(
        "inline-flex items-center gap-3 text-left transition-transform hover:-translate-y-0.5",
        className,
      )}
    >
      {content}
    </Link>
  );
}
