"use client";

import { useState, useCallback } from "react";
import { cn, formatNumber } from "@/lib/utils";

interface RatioPreset {
  label: string;
  x: number;
  y: number;
}

const ratioPresets: RatioPreset[] = [
  { label: "16:9", x: 16, y: 9 },
  { label: "4:3", x: 4, y: 3 },
  { label: "1:1", x: 1, y: 1 },
  { label: "3:2", x: 3, y: 2 },
  { label: "21:9", x: 21, y: 9 },
  { label: "9:16", x: 9, y: 16 },
];

function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

export function AspectRatioCalculator() {
  const [width, setWidth] = useState("1920");
  const [height, setHeight] = useState("1080");
  const [ratioX, setRatioX] = useState("16");
  const [ratioY, setRatioY] = useState("9");
  const [solveFor, setSolveFor] = useState<"height" | "width" | "ratio">("height");
  const [copied, setCopied] = useState(false);

  const w = parseFloat(width) || 0;
  const h = parseFloat(height) || 0;
  const rx = parseFloat(ratioX) || 0;
  const ry = parseFloat(ratioY) || 0;

  let resultWidth = w;
  let resultHeight = h;
  let resultRatioX = rx;
  let resultRatioY = ry;

  if (solveFor === "height" && w > 0 && rx > 0 && ry > 0) {
    resultHeight = (w * ry) / rx;
  } else if (solveFor === "width" && h > 0 && rx > 0 && ry > 0) {
    resultWidth = (h * rx) / ry;
  } else if (solveFor === "ratio" && w > 0 && h > 0) {
    const g = gcd(w, h);
    resultRatioX = w / g;
    resultRatioY = h / g;
  }

  const applyPreset = (preset: RatioPreset) => {
    setRatioX(String(preset.x));
    setRatioY(String(preset.y));
    if (solveFor === "height" && w > 0) {
      // height will be recalculated
    } else if (solveFor === "width" && h > 0) {
      // width will be recalculated
    }
  };

  const handleCopy = useCallback(async () => {
    const text = `${formatNumber(resultWidth, 0)} x ${formatNumber(resultHeight, 0)} (${resultRatioX}:${resultRatioY})`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  }, [resultWidth, resultHeight, resultRatioX, resultRatioY]);

  return (
    <div className="tool-card space-y-6">
      {/* Solve for selector */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Calculate
        </label>
        <div className="flex flex-wrap gap-2">
          {([
            { key: "height" as const, label: "Height from Width + Ratio" },
            { key: "width" as const, label: "Width from Height + Ratio" },
            { key: "ratio" as const, label: "Ratio from Width + Height" },
          ]).map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSolveFor(opt.key)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                solveFor === opt.key
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Ratio presets */}
      {solveFor !== "ratio" && (
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Common Ratios
          </label>
          <div className="flex flex-wrap gap-2">
            {ratioPresets.map((preset) => (
              <button
                key={preset.label}
                onClick={() => applyPreset(preset)}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                  rx === preset.x && ry === preset.y
                    ? "border-primary-300 bg-primary-50 text-primary-700"
                    : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"
                )}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Inputs */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Width (px) {solveFor === "width" && " - calculated"}
          </label>
          <input
            type="number"
            value={solveFor === "width" ? formatNumber(resultWidth, 0) : width}
            onChange={(e) => setWidth(e.target.value)}
            readOnly={solveFor === "width"}
            className={cn(
              "mono-display w-full rounded-lg border px-4 py-3 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/20",
              solveFor === "width"
                ? "border-primary-300 bg-primary-50 font-bold text-primary-800"
                : "border-neutral-300 bg-white text-neutral-900 focus:border-primary-500"
            )}
            placeholder="1920"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Height (px) {solveFor === "height" && " - calculated"}
          </label>
          <input
            type="number"
            value={solveFor === "height" ? formatNumber(resultHeight, 0) : height}
            onChange={(e) => setHeight(e.target.value)}
            readOnly={solveFor === "height"}
            className={cn(
              "mono-display w-full rounded-lg border px-4 py-3 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/20",
              solveFor === "height"
                ? "border-primary-300 bg-primary-50 font-bold text-primary-800"
                : "border-neutral-300 bg-white text-neutral-900 focus:border-primary-500"
            )}
            placeholder="1080"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Ratio X {solveFor === "ratio" && " - calculated"}
          </label>
          <input
            type="number"
            value={solveFor === "ratio" ? formatNumber(resultRatioX, 0) : ratioX}
            onChange={(e) => setRatioX(e.target.value)}
            readOnly={solveFor === "ratio"}
            className={cn(
              "mono-display w-full rounded-lg border px-4 py-3 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/20",
              solveFor === "ratio"
                ? "border-primary-300 bg-primary-50 font-bold text-primary-800"
                : "border-neutral-300 bg-white text-neutral-900 focus:border-primary-500"
            )}
            placeholder="16"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Ratio Y {solveFor === "ratio" && " - calculated"}
          </label>
          <input
            type="number"
            value={solveFor === "ratio" ? formatNumber(resultRatioY, 0) : ratioY}
            onChange={(e) => setRatioY(e.target.value)}
            readOnly={solveFor === "ratio"}
            className={cn(
              "mono-display w-full rounded-lg border px-4 py-3 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/20",
              solveFor === "ratio"
                ? "border-primary-300 bg-primary-50 font-bold text-primary-800"
                : "border-neutral-300 bg-white text-neutral-900 focus:border-primary-500"
            )}
            placeholder="9"
          />
        </div>
      </div>

      {/* Result summary */}
      <div className="flex items-center justify-between rounded-lg bg-primary-50 px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">Result</p>
          <p className="mono-display mt-1 text-lg font-bold text-primary-800">
            {formatNumber(resultWidth, 0)} x {formatNumber(resultHeight, 0)} px - {resultRatioX}:{resultRatioY}
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="rounded-md p-1.5 text-primary-400 transition-colors hover:bg-primary-100 hover:text-primary-600"
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

      {/* Formula display */}
      <div className="rounded-lg bg-neutral-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Formulas</p>
        <div className="mono-display mt-1 space-y-1 text-sm text-neutral-700">
          <p>Height = Width x (Ratio Y / Ratio X)</p>
          <p>Width = Height x (Ratio X / Ratio Y)</p>
          <p>Ratio = GCD-simplified Width:Height</p>
        </div>
      </div>

      {/* Common ratios reference */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Common Aspect Ratios
        </p>
        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Ratio</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Decimal</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Common Use</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Example Resolution</th>
              </tr>
            </thead>
            <tbody>
              {[
                { ratio: "16:9", decimal: "1.778", use: "HD Video, Monitors", example: "1920 x 1080" },
                { ratio: "4:3", decimal: "1.333", use: "Classic TV, iPad", example: "1024 x 768" },
                { ratio: "1:1", decimal: "1.000", use: "Social Media, Square", example: "1080 x 1080" },
                { ratio: "3:2", decimal: "1.500", use: "DSLR Photos, MacBook", example: "6000 x 4000" },
                { ratio: "21:9", decimal: "2.333", use: "Ultrawide Monitors, Cinema", example: "3440 x 1440" },
              ].map((row) => (
                <tr key={row.ratio} className="border-b border-neutral-100 last:border-b-0">
                  <td className="mono-display px-4 py-2 font-medium text-neutral-800">{row.ratio}</td>
                  <td className="mono-display px-4 py-2 text-neutral-800">{row.decimal}</td>
                  <td className="px-4 py-2 text-neutral-800">{row.use}</td>
                  <td className="mono-display px-4 py-2 text-neutral-800">{row.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
