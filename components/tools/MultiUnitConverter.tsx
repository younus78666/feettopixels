"use client";

import { useMemo, useState } from "react";
import { formatNumber } from "@/lib/utils";

const DPI_PRESETS = [
  { value: 72, label: "72 (legacy web)" },
  { value: 96, label: "96 (web standard)" },
  { value: 150, label: "150 (newsprint)" },
  { value: 300, label: "300 (print)" },
  { value: 600, label: "600 (archival)" },
];

const ROOT_FONT_SIZE = 16;

interface Unit {
  key: string;
  label: string;
  suffix: string;
  compute: (pixels: number, dpi: number) => number;
  decimals: number;
}

const UNITS: Unit[] = [
  {
    key: "inches",
    label: "Inches",
    suffix: "in",
    compute: (px, dpi) => px / dpi,
    decimals: 3,
  },
  {
    key: "cm",
    label: "Centimeters",
    suffix: "cm",
    compute: (px, dpi) => (px * 2.54) / dpi,
    decimals: 3,
  },
  {
    key: "mm",
    label: "Millimeters",
    suffix: "mm",
    compute: (px, dpi) => (px * 25.4) / dpi,
    decimals: 2,
  },
  {
    key: "feet",
    label: "Feet",
    suffix: "ft",
    compute: (px, dpi) => px / (dpi * 12),
    decimals: 4,
  },
  {
    key: "rem",
    label: "REM",
    suffix: "rem",
    compute: (px) => px / ROOT_FONT_SIZE,
    decimals: 4,
  },
  {
    key: "em",
    label: "EM",
    suffix: "em",
    compute: (px) => px / ROOT_FONT_SIZE,
    decimals: 4,
  },
  {
    key: "pt",
    label: "Points",
    suffix: "pt",
    compute: (px) => (px * 72) / 96,
    decimals: 2,
  },
];

export function MultiUnitConverter() {
  const [pixels, setPixels] = useState("96");
  const [dpi, setDpi] = useState(96);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const numericPixels = useMemo(() => {
    const parsed = parseFloat(pixels);
    return Number.isFinite(parsed) ? parsed : 0;
  }, [pixels]);

  const results = useMemo(() => {
    return UNITS.map((unit) => ({
      ...unit,
      value: unit.compute(numericPixels, dpi),
    }));
  }, [numericPixels, dpi]);

  const copyValue = async (key: string, value: number, decimals: number, suffix: string) => {
    const text = `${formatNumber(value, decimals)} ${suffix}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1200);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="pixels-input"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500"
          >
            Pixels
          </label>
          <div className="relative">
            <input
              id="pixels-input"
              type="number"
              inputMode="decimal"
              value={pixels}
              onChange={(event) => setPixels(event.target.value)}
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 pr-14 text-lg font-medium text-neutral-900 transition-colors focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
              placeholder="Enter pixel value"
              min={0}
              step="any"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-neutral-400">
              px
            </span>
          </div>
        </div>

        <div>
          <label
            htmlFor="dpi-select"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500"
          >
            DPI (for physical units)
          </label>
          <select
            id="dpi-select"
            value={dpi}
            onChange={(event) => setDpi(Number(event.target.value))}
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg font-medium text-neutral-900 transition-colors focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
          >
            {DPI_PRESETS.map((preset) => (
              <option key={preset.value} value={preset.value}>
                {preset.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {results.map((unit) => {
          const formatted = formatNumber(unit.value, unit.decimals);
          const isCopied = copiedKey === unit.key;
          return (
            <button
              key={unit.key}
              type="button"
              onClick={() => copyValue(unit.key, unit.value, unit.decimals, unit.suffix)}
              className="group flex items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-left transition-colors hover:border-neutral-900 hover:bg-white focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
              aria-label={`Copy ${formatted} ${unit.suffix}`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                {unit.label}
              </span>
              <span className="flex items-baseline gap-1.5">
                <span className="font-mono text-base font-medium text-neutral-900">
                  {formatted}
                </span>
                <span className="text-xs font-medium uppercase text-neutral-500">
                  {unit.suffix}
                </span>
                <span
                  className={`ml-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isCopied ? "text-emerald-600" : "text-neutral-300 group-hover:text-neutral-500"
                  }`}
                >
                  {isCopied ? "Copied" : "Copy"}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-neutral-500">
        Enter a pixel value to see every unit update instantly. DPI only affects
        physical units (inches, cm, mm, feet, points); REM and EM use a 16 px root.
      </p>
    </div>
  );
}
