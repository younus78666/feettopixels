"use client";

import { useState, useCallback } from "react";
import { formatNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface Preset {
  label: string;
  width: number;
  height: number;
  diagonal: number;
}

const presets: Preset[] = [
  { label: '24" 1080p', width: 1920, height: 1080, diagonal: 24 },
  { label: '27" 4K', width: 3840, height: 2160, diagonal: 27 },
  { label: '13" MacBook', width: 2560, height: 1600, diagonal: 13.3 },
  { label: '6.1" iPhone', width: 2556, height: 1179, diagonal: 6.1 },
];

export function DpiCalculator() {
  const [width, setWidth] = useState("1920");
  const [height, setHeight] = useState("1080");
  const [diagonal, setDiagonal] = useState("24");
  const [copied, setCopied] = useState(false);

  const calculate = useCallback(
    (w: string, h: string, d: string) => {
      const wn = parseFloat(w);
      const hn = parseFloat(h);
      const dn = parseFloat(d);
      if (isNaN(wn) || isNaN(hn) || isNaN(dn) || dn === 0) return null;
      return Math.sqrt(wn * wn + hn * hn) / dn;
    },
    []
  );

  const dpi = calculate(width, height, diagonal);

  const applyPreset = (p: Preset) => {
    setWidth(String(p.width));
    setHeight(String(p.height));
    setDiagonal(String(p.diagonal));
  };

  const handleCopy = async () => {
    if (dpi === null) return;
    try {
      await navigator.clipboard.writeText(formatNumber(dpi, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <div className="tool-card space-y-6">
      {/* Presets */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Preset Screen Sizes
        </label>
        <div className="flex flex-wrap gap-2">
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => applyPreset(p)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                width === String(p.width) &&
                  height === String(p.height) &&
                  diagonal === String(p.diagonal)
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Width (px)
          </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="Width in pixels"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Height (px)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="Height in pixels"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Diagonal (inches)
          </label>
          <input
            type="number"
            value={diagonal}
            onChange={(e) => setDiagonal(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="Screen diagonal"
            step="0.1"
          />
        </div>
      </div>

      {/* Result */}
      <div className="rounded-lg border border-primary-200 bg-primary-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
              Calculated DPI
            </p>
            <p className="mono-display mt-1 text-3xl font-bold text-primary-800">
              {dpi !== null ? formatNumber(dpi, 2) : "—"}
            </p>
          </div>
          <button
            onClick={handleCopy}
            className="rounded-md p-2 text-primary-500 transition-colors hover:bg-primary-100 hover:text-primary-700"
            aria-label="Copy result"
          >
            {copied ? (
              <svg className="h-5 w-5 text-success-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Formula */}
      <div className="rounded-lg bg-neutral-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Formula
        </p>
        <p className="mono-display mt-1 text-sm text-neutral-700">
          DPI = sqrt(width² + height²) / diagonal
        </p>
      </div>

      {/* Reference table */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Common Screen DPI Values
        </p>
        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Screen</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Resolution</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Size</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">DPI</th>
              </tr>
            </thead>
            <tbody>
              {presets.map((p) => (
                <tr key={p.label} className="border-b border-neutral-100 last:border-b-0">
                  <td className="px-4 py-2 text-neutral-800">{p.label}</td>
                  <td className="mono-display px-4 py-2 text-neutral-800">{p.width} x {p.height}</td>
                  <td className="mono-display px-4 py-2 text-neutral-800">{p.diagonal}&quot;</td>
                  <td className="mono-display px-4 py-2 font-medium text-primary-700">
                    {formatNumber(Math.sqrt(p.width * p.width + p.height * p.height) / p.diagonal, 1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
