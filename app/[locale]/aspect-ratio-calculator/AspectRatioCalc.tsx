"use client";

import { useState } from "react";
import { formatNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";

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
];

function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

export function AspectRatioCalc() {
  const [width, setWidth] = useState("1920");
  const [height, setHeight] = useState("1080");
  const [ratioX, setRatioX] = useState("16");
  const [ratioY, setRatioY] = useState("9");
  const [lockField, setLockField] = useState<"width" | "height" | "ratio">("ratio");
  const [copied, setCopied] = useState(false);

  const applyPreset = (p: RatioPreset) => {
    setRatioX(String(p.x));
    setRatioY(String(p.y));
    setLockField("ratio");
    const w = parseFloat(width);
    if (!isNaN(w) && w > 0) {
      setHeight(formatNumber((w * p.y) / p.x, 0));
    }
  };

  const handleWidthChange = (val: string) => {
    setWidth(val);
    const w = parseFloat(val);
    if (isNaN(w) || w <= 0) return;

    if (lockField === "ratio") {
      const rx = parseFloat(ratioX);
      const ry = parseFloat(ratioY);
      if (!isNaN(rx) && !isNaN(ry) && rx > 0) {
        setHeight(formatNumber((w * ry) / rx, 0));
      }
    } else if (lockField === "height") {
      const h = parseFloat(height);
      if (!isNaN(h) && h > 0) {
        const g = gcd(w, h);
        setRatioX(String(w / g));
        setRatioY(String(h / g));
      }
    }
  };

  const handleHeightChange = (val: string) => {
    setHeight(val);
    const h = parseFloat(val);
    if (isNaN(h) || h <= 0) return;

    if (lockField === "ratio") {
      const rx = parseFloat(ratioX);
      const ry = parseFloat(ratioY);
      if (!isNaN(rx) && !isNaN(ry) && ry > 0) {
        setWidth(formatNumber((h * rx) / ry, 0));
      }
    } else if (lockField === "width") {
      const w = parseFloat(width);
      if (!isNaN(w) && w > 0) {
        const g = gcd(w, h);
        setRatioX(String(w / g));
        setRatioY(String(h / g));
      }
    }
  };

  const handleRatioChange = (axis: "x" | "y", val: string) => {
    if (axis === "x") setRatioX(val);
    else setRatioY(val);

    const rx = axis === "x" ? parseFloat(val) : parseFloat(ratioX);
    const ry = axis === "y" ? parseFloat(val) : parseFloat(ratioY);
    if (isNaN(rx) || isNaN(ry) || rx <= 0 || ry <= 0) return;

    if (lockField === "width") {
      const w = parseFloat(width);
      if (!isNaN(w) && w > 0) {
        setHeight(formatNumber((w * ry) / rx, 0));
      }
    } else if (lockField === "height") {
      const h = parseFloat(height);
      if (!isNaN(h) && h > 0) {
        setWidth(formatNumber((h * rx) / ry, 0));
      }
    }
  };

  // Simplified ratio
  const w = parseFloat(width);
  const h = parseFloat(height);
  const simplifiedRatio =
    !isNaN(w) && !isNaN(h) && w > 0 && h > 0
      ? (() => {
          const g = gcd(w, h);
          return `${w / g}:${h / g}`;
        })()
      : "—";

  const decimalRatio = !isNaN(w) && !isNaN(h) && h > 0 ? formatNumber(w / h, 4) : "—";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${width} x ${height} (${simplifiedRatio})`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <div className="tool-card space-y-6">
      {/* Preset ratios */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Preset Ratios
        </label>
        <div className="flex flex-wrap gap-2">
          {ratioPresets.map((p) => (
            <button
              key={p.label}
              onClick={() => applyPreset(p)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                ratioX === String(p.x) && ratioY === String(p.y)
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lock selector */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Lock (calculate the other values)
        </label>
        <div className="flex flex-wrap gap-2">
          {(["ratio", "width", "height"] as const).map((field) => (
            <button
              key={field}
              onClick={() => setLockField(field)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium capitalize transition-colors",
                lockField === field
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"
              )}
            >
              {field}
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
            onChange={(e) => handleWidthChange(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="Width"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Height (px)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => handleHeightChange(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="Height"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Ratio (W:H)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={ratioX}
              onChange={(e) => handleRatioChange("x", e.target.value)}
              className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="W"
            />
            <span className="text-lg font-bold text-neutral-400">:</span>
            <input
              type="number"
              value={ratioY}
              onChange={(e) => handleRatioChange("y", e.target.value)}
              className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="H"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-primary-200 bg-primary-50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
            Dimensions
          </p>
          <p className="mono-display mt-1 text-xl font-bold text-primary-800">
            {width} x {height}
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Simplified Ratio
          </p>
          <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
            {simplifiedRatio}
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Decimal Ratio
              </p>
              <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
                {decimalRatio}
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="rounded-md p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
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
      </div>

      {/* Common resolutions table */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Common Resolutions by Aspect Ratio
        </p>
        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Ratio</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Resolution</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Name</th>
              </tr>
            </thead>
            <tbody>
              {[
                { ratio: "16:9", res: "1920 x 1080", name: "Full HD (1080p)" },
                { ratio: "16:9", res: "2560 x 1440", name: "QHD (1440p)" },
                { ratio: "16:9", res: "3840 x 2160", name: "4K UHD" },
                { ratio: "4:3", res: "1024 x 768", name: "XGA" },
                { ratio: "4:3", res: "2048 x 1536", name: "QXGA" },
                { ratio: "1:1", res: "1080 x 1080", name: "Instagram Square" },
                { ratio: "3:2", res: "2160 x 1440", name: "Surface Pro" },
                { ratio: "21:9", res: "2560 x 1080", name: "UltraWide FHD" },
                { ratio: "21:9", res: "3440 x 1440", name: "UltraWide QHD" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-neutral-100 last:border-b-0">
                  <td className="px-4 py-2 font-medium text-primary-700">{row.ratio}</td>
                  <td className="mono-display px-4 py-2 text-neutral-800">{row.res}</td>
                  <td className="px-4 py-2 text-neutral-600">{row.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
