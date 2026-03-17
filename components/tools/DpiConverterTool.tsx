"use client";

import { useState, useCallback } from "react";
import { formatNumber } from "@/lib/utils";

export function DpiConverterTool() {
  const [currentDpi, setCurrentDpi] = useState("72");
  const [targetDpi, setTargetDpi] = useState("300");
  const [widthPx, setWidthPx] = useState("1024");
  const [heightPx, setHeightPx] = useState("768");
  const [copied, setCopied] = useState(false);

  const srcDpi = parseFloat(currentDpi) || 0;
  const tgtDpi = parseFloat(targetDpi) || 0;
  const w = parseFloat(widthPx) || 0;
  const h = parseFloat(heightPx) || 0;

  // Current print size at current DPI
  const currentWidthIn = srcDpi > 0 ? w / srcDpi : 0;
  const currentHeightIn = srcDpi > 0 ? h / srcDpi : 0;

  // Print size at target DPI (same pixel count)
  const targetWidthIn = tgtDpi > 0 ? w / tgtDpi : 0;
  const targetHeightIn = tgtDpi > 0 ? h / tgtDpi : 0;

  // Pixels needed at target DPI to maintain same print size
  const neededWidthPx = currentWidthIn * tgtDpi;
  const neededHeightPx = currentHeightIn * tgtDpi;

  const handleCopy = useCallback(async () => {
    const text = `Print size at ${tgtDpi} DPI: ${formatNumber(targetWidthIn, 2)}" x ${formatNumber(targetHeightIn, 2)}"`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  }, [tgtDpi, targetWidthIn, targetHeightIn]);

  return (
    <div className="tool-card space-y-6">
      {/* Inputs */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Current DPI
          </label>
          <input
            type="number"
            value={currentDpi}
            onChange={(e) => setCurrentDpi(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="72"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Target DPI
          </label>
          <input
            type="number"
            value={targetDpi}
            onChange={(e) => setTargetDpi(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="300"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Width (pixels)
          </label>
          <input
            type="number"
            value={widthPx}
            onChange={(e) => setWidthPx(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="1024"
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
            placeholder="768"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Current print size */}
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Print Size at {srcDpi || "—"} DPI (current)
          </p>
          <p className="mono-display mt-1 text-lg font-semibold text-neutral-800">
            {currentWidthIn > 0
              ? `${formatNumber(currentWidthIn, 2)}" x ${formatNumber(currentHeightIn, 2)}"`
              : "—"}
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">
            {currentWidthIn > 0
              ? `${formatNumber(currentWidthIn * 2.54, 2)} cm x ${formatNumber(currentHeightIn * 2.54, 2)} cm`
              : ""}
          </p>
        </div>

        {/* Target print size */}
        <div className="rounded-lg border border-primary-200 bg-primary-50 px-4 py-3">
          <div className="flex items-start justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
              Print Size at {tgtDpi || "—"} DPI (target)
            </p>
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
            {targetWidthIn > 0
              ? `${formatNumber(targetWidthIn, 2)}" x ${formatNumber(targetHeightIn, 2)}"`
              : "—"}
          </p>
          <p className="mt-0.5 text-xs text-primary-600">
            {targetWidthIn > 0
              ? `${formatNumber(targetWidthIn * 2.54, 2)} cm x ${formatNumber(targetHeightIn * 2.54, 2)} cm`
              : ""}
          </p>
        </div>
      </div>

      {/* Pixels needed to maintain print size */}
      {srcDpi > 0 && tgtDpi > 0 && w > 0 && (
        <div className="rounded-lg border border-warning-500/30 bg-warning-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-warning-700">
            Pixels Needed to Maintain Same Print Size at {tgtDpi} DPI
          </p>
          <p className="mono-display mt-1 text-lg font-semibold text-warning-800">
            {formatNumber(neededWidthPx, 0)} x {formatNumber(neededHeightPx, 0)} px
          </p>
          <p className="mt-0.5 text-xs text-warning-600">
            Scale factor: {formatNumber(tgtDpi / srcDpi, 2)}x
            {tgtDpi > srcDpi ? " (upscaling required)" : tgtDpi < srcDpi ? " (downscaling)" : ""}
          </p>
        </div>
      )}

      {/* Formula display */}
      <div className="rounded-lg bg-neutral-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Formulas</p>
        <div className="mono-display mt-1 space-y-1 text-sm text-neutral-700">
          <p>Print Size (inches) = Pixel Dimensions / DPI</p>
          <p>Needed Pixels = Print Size (inches) x Target DPI</p>
          <p>Scale Factor = Target DPI / Current DPI</p>
        </div>
      </div>

      {/* Common conversions table */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Common DPI Conversions
        </p>
        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">From DPI</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">To DPI</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Use Case</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Scale Factor</th>
              </tr>
            </thead>
            <tbody>
              {[
                { from: 72, to: 300, use: "Web to Print" },
                { from: 96, to: 300, use: "Screen to Print" },
                { from: 150, to: 300, use: "Draft to Final" },
                { from: 300, to: 72, use: "Print to Web" },
                { from: 72, to: 96, use: "Mac to Windows" },
              ].map((row) => (
                <tr key={`${row.from}-${row.to}`} className="border-b border-neutral-100 last:border-b-0">
                  <td className="mono-display px-4 py-2 text-neutral-800">{row.from}</td>
                  <td className="mono-display px-4 py-2 text-neutral-800">{row.to}</td>
                  <td className="px-4 py-2 text-neutral-800">{row.use}</td>
                  <td className="mono-display px-4 py-2 text-neutral-800">{formatNumber(row.to / row.from, 2)}x</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
