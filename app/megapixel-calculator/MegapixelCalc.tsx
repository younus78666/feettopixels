"use client";

import { useState } from "react";
import { formatNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface MpPreset {
  label: string;
  mp: number;
}

interface RatioPreset {
  label: string;
  x: number;
  y: number;
}

const mpPresets: MpPreset[] = [
  { label: "8 MP", mp: 8 },
  { label: "12 MP", mp: 12 },
  { label: "48 MP", mp: 48 },
  { label: "108 MP", mp: 108 },
];

const ratioPresets: RatioPreset[] = [
  { label: "4:3", x: 4, y: 3 },
  { label: "16:9", x: 16, y: 9 },
  { label: "3:2", x: 3, y: 2 },
  { label: "1:1", x: 1, y: 1 },
];

type Mode = "mp-to-px" | "px-to-mp";

export function MegapixelCalc() {
  const [mode, setMode] = useState<Mode>("mp-to-px");
  const [megapixels, setMegapixels] = useState("12");
  const [ratioX, setRatioX] = useState("4");
  const [ratioY, setRatioY] = useState("3");
  const [width, setWidth] = useState("4000");
  const [height, setHeight] = useState("3000");
  const [copied, setCopied] = useState(false);

  // MP to pixels
  const calcDimensions = (mp: number, rx: number, ry: number) => {
    const totalPx = mp * 1_000_000;
    // width * height = totalPx, width/height = rx/ry
    // width = rx/ry * height, so (rx/ry * height) * height = totalPx
    // height^2 = totalPx * ry / rx
    const h = Math.sqrt((totalPx * ry) / rx);
    const w = (rx / ry) * h;
    return { width: Math.round(w), height: Math.round(h) };
  };

  // Pixels to MP
  const calcMp = (w: number, h: number) => {
    return (w * h) / 1_000_000;
  };

  const handleMpChange = (val: string) => {
    setMegapixels(val);
    const mp = parseFloat(val);
    const rx = parseFloat(ratioX);
    const ry = parseFloat(ratioY);
    if (!isNaN(mp) && !isNaN(rx) && !isNaN(ry) && mp > 0 && rx > 0 && ry > 0) {
      const dims = calcDimensions(mp, rx, ry);
      setWidth(String(dims.width));
      setHeight(String(dims.height));
    }
  };

  const handleRatioChange = (rx: string, ry: string) => {
    setRatioX(rx);
    setRatioY(ry);
    if (mode === "mp-to-px") {
      const mp = parseFloat(megapixels);
      const rxn = parseFloat(rx);
      const ryn = parseFloat(ry);
      if (!isNaN(mp) && !isNaN(rxn) && !isNaN(ryn) && mp > 0 && rxn > 0 && ryn > 0) {
        const dims = calcDimensions(mp, rxn, ryn);
        setWidth(String(dims.width));
        setHeight(String(dims.height));
      }
    }
  };

  const handleWidthChange = (val: string) => {
    setWidth(val);
    const w = parseFloat(val);
    const h = parseFloat(height);
    if (!isNaN(w) && !isNaN(h) && w > 0 && h > 0) {
      setMegapixels(formatNumber(calcMp(w, h), 2));
    }
  };

  const handleHeightChange = (val: string) => {
    setHeight(val);
    const w = parseFloat(width);
    const h = parseFloat(val);
    if (!isNaN(w) && !isNaN(h) && w > 0 && h > 0) {
      setMegapixels(formatNumber(calcMp(w, h), 2));
    }
  };

  const applyMpPreset = (mp: number) => {
    setMegapixels(String(mp));
    setMode("mp-to-px");
    const rx = parseFloat(ratioX);
    const ry = parseFloat(ratioY);
    if (!isNaN(rx) && !isNaN(ry) && rx > 0 && ry > 0) {
      const dims = calcDimensions(mp, rx, ry);
      setWidth(String(dims.width));
      setHeight(String(dims.height));
    }
  };

  const applyRatioPreset = (p: RatioPreset) => {
    handleRatioChange(String(p.x), String(p.y));
  };

  const w = parseFloat(width);
  const h = parseFloat(height);
  const mp = !isNaN(w) && !isNaN(h) && w > 0 && h > 0 ? calcMp(w, h) : null;

  const handleCopy = async () => {
    const text = mode === "mp-to-px"
      ? `${width} x ${height} pixels (${megapixels} MP)`
      : `${mp !== null ? formatNumber(mp, 2) : "—"} MP (${width} x ${height})`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <div className="tool-card space-y-6">
      {/* Mode toggle */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Conversion Mode
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setMode("mp-to-px")}
            className={cn(
              "rounded-lg border px-4 py-1.5 text-sm font-medium transition-colors",
              mode === "mp-to-px"
                ? "border-primary-300 bg-primary-50 text-primary-700"
                : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"
            )}
          >
            Megapixels to Pixels
          </button>
          <button
            onClick={() => setMode("px-to-mp")}
            className={cn(
              "rounded-lg border px-4 py-1.5 text-sm font-medium transition-colors",
              mode === "px-to-mp"
                ? "border-primary-300 bg-primary-50 text-primary-700"
                : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"
            )}
          >
            Pixels to Megapixels
          </button>
        </div>
      </div>

      {/* MP Presets */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Megapixel Presets
        </label>
        <div className="flex flex-wrap gap-2">
          {mpPresets.map((p) => (
            <button
              key={p.mp}
              onClick={() => applyMpPreset(p.mp)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                megapixels === String(p.mp)
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Ratio Presets */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Aspect Ratio
        </label>
        <div className="flex flex-wrap gap-2">
          {ratioPresets.map((p) => (
            <button
              key={p.label}
              onClick={() => applyRatioPreset(p)}
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
          <div className="flex items-center gap-1">
            <input
              type="number"
              value={ratioX}
              onChange={(e) => handleRatioChange(e.target.value, ratioY)}
              className="mono-display w-16 rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-sm text-neutral-700 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            />
            <span className="text-neutral-400">:</span>
            <input
              type="number"
              value={ratioY}
              onChange={(e) => handleRatioChange(ratioX, e.target.value)}
              className="mono-display w-16 rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-sm text-neutral-700 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            />
          </div>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Megapixels
          </label>
          <input
            type="number"
            value={megapixels}
            onChange={(e) => handleMpChange(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="Megapixels"
            step="0.1"
            readOnly={mode === "px-to-mp"}
          />
        </div>
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
            readOnly={mode === "mp-to-px"}
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
            readOnly={mode === "mp-to-px"}
          />
        </div>
      </div>

      {/* Results */}
      <div className="rounded-lg border border-primary-200 bg-primary-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
              {mode === "mp-to-px" ? "Pixel Dimensions" : "Megapixels"}
            </p>
            <p className="mono-display mt-1 text-2xl font-bold text-primary-800">
              {mode === "mp-to-px"
                ? `${formatNumber(parseFloat(width), 0)} x ${formatNumber(parseFloat(height), 0)} px`
                : mp !== null
                  ? `${formatNumber(mp, 2)} MP`
                  : "—"}
            </p>
            <p className="mt-1 text-sm text-primary-600">
              {mp !== null ? `${formatNumber(mp * 1_000_000, 0)} total pixels` : ""}
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

      {/* Common camera resolutions */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Common Camera Resolutions (4:3)
        </p>
        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Megapixels</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Resolution (4:3)</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Resolution (16:9)</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Max Print (300 DPI)</th>
              </tr>
            </thead>
            <tbody>
              {[2, 5, 8, 12, 16, 24, 48, 108].map((mpVal) => {
                const d43 = calcDimensions(mpVal, 4, 3);
                const d169 = calcDimensions(mpVal, 16, 9);
                const printW = d43.width / 300;
                const printH = d43.height / 300;
                return (
                  <tr key={mpVal} className="border-b border-neutral-100 last:border-b-0">
                    <td className="mono-display px-4 py-2 font-medium text-primary-700">{mpVal} MP</td>
                    <td className="mono-display px-4 py-2 text-neutral-800">
                      {formatNumber(d43.width, 0)} x {formatNumber(d43.height, 0)}
                    </td>
                    <td className="mono-display px-4 py-2 text-neutral-800">
                      {formatNumber(d169.width, 0)} x {formatNumber(d169.height, 0)}
                    </td>
                    <td className="mono-display px-4 py-2 text-neutral-800">
                      {formatNumber(printW, 1)}&quot; x {formatNumber(printH, 1)}&quot;
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
