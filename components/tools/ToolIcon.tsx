import { cn } from "@/lib/utils";

type ToolVisualKind =
  | "hub"
  | "physical"
  | "css"
  | "screen"
  | "image"
  | "guide";

interface ToolVisualMeta {
  kind: ToolVisualKind;
  label: string;
}

interface ToolIconProps {
  href?: string;
  name?: string;
  className?: string;
}

const hubSlugs = new Set(["pixel-converter"]);
const physicalSlugs = new Set([
  "pixels-to-inches",
  "inches-to-pixels",
  "pixels-to-cm",
  "cm-to-pixels",
  "pixels-to-mm",
  "mm-to-pixels",
  "feet-to-pixels",
  "pixels-to-feet",
]);
const cssSlugs = new Set([
  "px-to-rem",
  "px-to-em",
  "px-to-pt",
  "px-to-vw",
  "em-vs-rem",
]);
const screenSlugs = new Set([
  "dpi-calculator",
  "ppi-calculator",
  "dpi-converter",
  "screen-resolution-checker",
  "pixel-ruler",
  "aspect-ratio-calculator",
]);
const imageSlugs = new Set([
  "image-dpi-checker",
  "image-size-calculator",
  "megapixel-calculator",
  "passport-photo-size",
  "social-media-image-sizes",
  "paper-sizes-in-pixels",
  "standard-image-sizes",
]);

function normalizeSlug(href = "", name = ""): string {
  const candidate = href || name;
  return candidate
    .replace(/^\/+|\/+$/g, "")
    .split("/")
    .filter(Boolean)
    .pop()
    ?.toLowerCase() || "";
}

export function getToolVisualMeta(href = "", name = ""): ToolVisualMeta {
  const slug = normalizeSlug(href, name);

  if (hubSlugs.has(slug)) {
    return { kind: "hub", label: "Hub" };
  }

  if (physicalSlugs.has(slug)) {
    return { kind: "physical", label: "Tool" };
  }

  if (cssSlugs.has(slug)) {
    return { kind: "css", label: "CSS Tool" };
  }

  if (screenSlugs.has(slug)) {
    return { kind: "screen", label: "Tool" };
  }

  if (imageSlugs.has(slug)) {
    return {
      kind: "image",
      label: slug.endsWith("calculator") || slug.endsWith("checker") ? "Tool" : "Reference",
    };
  }

  return { kind: "guide", label: "Guide" };
}

function renderIcon(kind: ToolVisualKind) {
  switch (kind) {
    case "hub":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
          <rect x="4" y="4" width="6" height="6" rx="1.5" />
          <rect x="14" y="4" width="6" height="6" rx="1.5" />
          <rect x="4" y="14" width="6" height="6" rx="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 13v7m0 0-3-3m3 3 3-3" />
        </svg>
      );
    case "physical":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8.5h16M6 8.5v3m3-3v2m3-2v3m3-3v2m3-2v3M5 6h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
        </svg>
      );
    case "css":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5 5 12l4 7M15 5l4 7-4 7M13 4l-2 16" />
        </svg>
      );
    case "screen":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
          <rect x="3.5" y="5" width="17" height="11" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19h6m-8 0h10" />
        </svg>
      );
    case "image":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
          <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
          <circle cx="9" cy="10" r="1.75" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m5.5 17 4.5-4.5 3.5 3.5 2-2 2.5 3" />
        </svg>
      );
    case "guide":
    default:
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 5.5h9.5A2.5 2.5 0 0 1 18 8v10.5a1 1 0 0 1-1.5.86L12 16.8l-4.5 2.56A1 1 0 0 1 6 18.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6M9 12h5" />
        </svg>
      );
  }
}

export function ToolIcon({ href = "", name = "", className }: ToolIconProps) {
  const meta = getToolVisualMeta(href, name);

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-2xl border shadow-[0_18px_35px_-26px_rgba(15,23,42,0.35)]",
        meta.kind === "hub" && "border-primary-200 bg-primary-50 text-primary-700",
        meta.kind === "physical" && "border-sky-200 bg-sky-50 text-sky-700",
        meta.kind === "css" && "border-violet-200 bg-violet-50 text-violet-700",
        meta.kind === "screen" && "border-amber-200 bg-amber-50 text-amber-700",
        meta.kind === "image" && "border-rose-200 bg-rose-50 text-rose-700",
        meta.kind === "guide" && "border-emerald-200 bg-emerald-50 text-emerald-700",
        className,
      )}
    >
      {renderIcon(meta.kind)}
    </span>
  );
}
