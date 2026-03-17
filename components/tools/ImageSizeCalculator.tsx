"use client";

import { useState, useCallback } from "react";
import { cn, formatNumber } from "@/lib/utils";

const colorDepths = [
  { label: "8-bit (256 colors)", bits: 8 },
  { label: "16-bit (65K colors)", bits: 16 },
  { label: "24-bit (16.7M colors)", bits: 24 },
  { label: "32-bit (with alpha)", bits: 32 },
];

export function ImageSizeCalculator() {
  const [widthPx, setWidthPx] = useState("1920");
  const [heightPx, setHeightPx] = useState("1080");
  const [dpi, setDpi] = useState("96");
  const [colorDepth, setColorDepth] = useState(24);
  const [copied, setCopied] = useState(false);

  const w = parseFloat(widthPx) || 0;
  const h = parseFloat(heightPx) || 0;
  const d = parseFloat(dpi) || 0;

  const widthInches = d > 0 ? w / d : 0;
  const heightInches = d > 0 ? h / d : 0;
  const widthCm = widthInches * 2.54;
  const heightCm = heightInches * 2.54;
  const widthMm = widthInches * 25.4;
  const heightMm = heightInches * 25.4;

  const totalPixels = w * h;
  const rawBytes = (totalPixels * colorDepth) / 8;
  const rawMB = rawBytes / (1024 * 1024);

  // Estimated compressed sizes
  const jpegMB = rawMB * 0.1; // ~10:1 compression ratio
  const pngMB = rawMB * 0.5; // ~2:1 compression ratio

  const handleCopy = useCallback(async () => {
    const text = `${w}x${h}px at ${d} DPI = ${formatNumber(widthInches, 2)}" x ${formatNumber(heightInches, 2)}"`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  }, [w, h, d, widthInches, heightInches]);

  function formatFileSize(mb: number): string {
    if (mb >= 1024) return formatNumber(mb / 1024, 2) + " GB";
    if (mb >= 1) return formatNumber(mb, 2) + " MB";
    return formatNumber(mb * 1024, 1) + " KB";
  }

  return (
    <div className="tool-card space-y-6">
      {/* Inputs */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Width (pixels)
          </label>
          <input
            type="number"
            value={widthPx}
            onChange={(e) => setWidthPx(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="1920"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Height (pixels)
          </label>
          <input
            type="number"
            value={heightPx}
            onChange={(e) => setHeightPx(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="1080"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            DPI
          </label>
          <input
            type="number"
            value={dpi}
            onChange={(e) => setDpi(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="96"
          />
        </div>
      </div>

      {/* Color depth selector */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Color Depth
        </label>
        <div className="flex flex-wrap gap-2">
          {colorDepths.map((cd) => (
            <button
              key={cd.bits}
              onClick={() => setColorDepth(cd.bits)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                colorDepth === cd.bits
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"
              )}
            >
              {cd.label}
            </button>
          ))}
        </div>
      </div>

      {/* Physical size results */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-primary-50 px-4 py-3">
          <div className="flex items-start justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">Size (Inches)</p>
            <button
              onClick={handleCopy}
              className="rounded-md p-1 text-primary-400 transition-colors hover:bg-primary-100 hover:text-primary-600"
              aria-label="Copy result"
            >
              {copied ? (
                <svg className="h-4 w-4 text-success-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
              )}
            </button>
          </div>
          <p className="mono-display mt-1 text-lg font-bold text-primary-800">
            {widthInches > 0 ? `${formatNumber(widthInches, 2)}" x ${formatNumber(heightInches, 2)}"` : "—"}
          </p>
        </div>
        <div className="rounded-lg bg-neutral-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Size (CM)</p>
          <p className="mono-display mt-1 text-lg font-semibold text-neutral-800">
            {widthCm > 0 ? `${formatNumber(widthCm, 2)} x ${formatNumber(heightCm, 2)}` : "—"}
          </p>
        </div>
        <div className="rounded-lg bg-neutral-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Size (MM)</p>
          <p className="mono-display mt-1 text-lg font-semibold text-neutral-800">
            {widthMm > 0 ? `${formatNumber(widthMm, 1)} x ${formatNumber(heightMm, 1)}` : "—"}
          </p>
        </div>
      </div>

      {/* File size estimates */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Estimated File Sizes ({colorDepth}-bit color)
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Uncompressed (BMP)</p>
            <p className="mono-display mt-1 text-lg font-semibold text-neutral-800">
              {rawMB > 0 ? formatFileSize(rawMB) : "—"}
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">JPEG (est. ~10:1)</p>
            <p className="mono-display mt-1 text-lg font-semibold text-neutral-800">
              {jpegMB > 0 ? formatFileSize(jpegMB) : "—"}
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">PNG (est. ~2:1)</p>
            <p className="mono-display mt-1 text-lg font-semibold text-neutral-800">
              {pngMB > 0 ? formatFileSize(pngMB) : "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Formula display */}
      <div className="rounded-lg bg-neutral-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Formulas</p>
        <div className="mono-display mt-1 space-y-1 text-sm text-neutral-700">
          <p>Physical Size (inches) = Pixels / DPI</p>
          <p>Physical Size (cm) = Inches x 2.54</p>
          <p>Raw File Size = Width x Height x (Color Depth / 8) bytes</p>
        </div>
      </div>
    </div>
  );
}
