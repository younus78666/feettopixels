"use client";

import { useMemo, useState } from "react";
import { formatNumber } from "@/lib/utils";

const SCREEN_PRESETS = [
  { name: '24" FHD Monitor', width: 1920, height: 1080, diagonal: 24 },
  { name: '27" 1440p Monitor', width: 2560, height: 1440, diagonal: 27 },
  { name: '27" 4K Monitor', width: 3840, height: 2160, diagonal: 27 },
  { name: '13.3" Laptop FHD', width: 1920, height: 1080, diagonal: 13.3 },
  { name: 'MacBook Pro 14"', width: 3024, height: 1964, diagonal: 14.2 },
  { name: 'iPhone 16 (460 PPI)', width: 2556, height: 1179, diagonal: 6.1 },
  { name: 'iPad Pro 12.9"', width: 2732, height: 2048, diagonal: 12.9 },
  { name: '55" 4K TV', width: 3840, height: 2160, diagonal: 55 },
];

function classifyDensity(ppi: number): { label: string; hint: string } {
  if (ppi === 0) return { label: "Awaiting input", hint: "" };
  if (ppi >= 400) return { label: "Ultra HiDPI", hint: "Phone-class density, 3x pixel ratio" };
  if (ppi >= 220) return { label: "Retina / HiDPI", hint: "2x pixel ratio, images need 2x assets" };
  if (ppi >= 130) return { label: "Sharp", hint: "Desktop standard, 1.25x to 1.5x territory" };
  if (ppi >= 90) return { label: "Standard", hint: "Classic desktop density, 1x pixel ratio" };
  return { label: "Low", hint: "Below web standard, large pixels visible up close" };
}

export function MinimalPpiCalculator() {
  const [widthPx, setWidthPx] = useState("1920");
  const [heightPx, setHeightPx] = useState("1080");
  const [diagonal, setDiagonal] = useState("24");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const w = useMemo(() => {
    const n = parseFloat(widthPx);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [widthPx]);

  const h = useMemo(() => {
    const n = parseFloat(heightPx);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [heightPx]);

  const diag = useMemo(() => {
    const n = parseFloat(diagonal);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [diagonal]);

  const diagonalPixels = useMemo(() => Math.sqrt(w * w + h * h), [w, h]);
  const ppi = diag > 0 ? diagonalPixels / diag : 0;
  const megapixels = (w * h) / 1_000_000;
  const dotPitchMm = ppi > 0 ? 25.4 / ppi : 0;
  const density = classifyDensity(ppi);

  const applyPreset = (preset: (typeof SCREEN_PRESETS)[number]) => {
    setWidthPx(String(preset.width));
    setHeightPx(String(preset.height));
    setDiagonal(String(preset.diagonal));
  };

  const copy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1200);
    } catch {
      /* clipboard unavailable */
    }
  };

  const results = [
    { key: "ppi", label: "PPI", value: ppi, decimals: 2, suffix: "ppi" },
    { key: "diagPx", label: "Diagonal (px)", value: diagonalPixels, decimals: 0, suffix: "px" },
    { key: "mp", label: "Megapixels", value: megapixels, decimals: 2, suffix: "MP" },
    { key: "pitch", label: "Dot Pitch", value: dotPitchMm, decimals: 4, suffix: "mm" },
  ];

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label
            htmlFor="ppi-width"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500"
          >
            Width (px)
          </label>
          <input
            id="ppi-width"
            type="number"
            inputMode="decimal"
            value={widthPx}
            onChange={(event) => setWidthPx(event.target.value)}
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg font-medium text-neutral-900 transition-colors focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            placeholder="1920"
            min={0}
            step="any"
          />
        </div>
        <div>
          <label
            htmlFor="ppi-height"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500"
          >
            Height (px)
          </label>
          <input
            id="ppi-height"
            type="number"
            inputMode="decimal"
            value={heightPx}
            onChange={(event) => setHeightPx(event.target.value)}
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg font-medium text-neutral-900 transition-colors focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            placeholder="1080"
            min={0}
            step="any"
          />
        </div>
        <div>
          <label
            htmlFor="ppi-diag"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500"
          >
            Diagonal (inches)
          </label>
          <input
            id="ppi-diag"
            type="number"
            inputMode="decimal"
            value={diagonal}
            onChange={(event) => setDiagonal(event.target.value)}
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg font-medium text-neutral-900 transition-colors focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            placeholder="24"
            min={0}
            step="any"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {SCREEN_PRESETS.map((preset) => {
          const active =
            w === preset.width && h === preset.height && diag === preset.diagonal;
          return (
            <button
              key={preset.name}
              type="button"
              onClick={() => applyPreset(preset)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                active
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-900 hover:text-neutral-900"
              }`}
            >
              {preset.name}
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {results.map((item) => {
          const formatted = formatNumber(item.value, item.decimals);
          const isCopied = copiedKey === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => copy(item.key, `${formatted} ${item.suffix}`)}
              className="group flex items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-left transition-colors hover:border-neutral-900 hover:bg-white focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
              aria-label={`Copy ${formatted} ${item.suffix}`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                {item.label}
              </span>
              <span className="flex items-baseline gap-1.5">
                <span className="font-mono text-base font-medium text-neutral-900">
                  {formatted}
                </span>
                <span className="text-xs font-medium uppercase text-neutral-500">
                  {item.suffix}
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

      <div className="mt-5 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Classification
        </p>
        <p className="mt-1 text-sm font-semibold text-neutral-900">{density.label}</p>
        {density.hint ? (
          <p className="mt-1 text-xs leading-relaxed text-neutral-500">{density.hint}</p>
        ) : null}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-neutral-500">
        Formula: PPI = sqrt(width squared plus height squared) divided by diagonal in inches.
        Pick a preset to auto-fill a common screen, or type your own resolution and diagonal.
      </p>
    </div>
  );
}
