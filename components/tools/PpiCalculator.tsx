"use client";

import { useState, useCallback } from "react";
import { cn, formatNumber } from "@/lib/utils";

interface ScreenPreset {
  name: string;
  width: number;
  height: number;
  diagonal: number;
}

const screenPresets: ScreenPreset[] = [
  { name: '24" Monitor (1080p)', width: 1920, height: 1080, diagonal: 24 },
  { name: '27" Monitor (1440p)', width: 2560, height: 1440, diagonal: 27 },
  { name: '13" Laptop (1080p)', width: 1920, height: 1080, diagonal: 13.3 },
  { name: '6.1" Phone (1170x2532)', width: 1170, height: 2532, diagonal: 6.1 },
];

interface DevicePpi {
  device: string;
  ppi: number;
  resolution: string;
  screenSize: string;
}

const commonDevices: DevicePpi[] = [
  { device: "iPhone 16", ppi: 460, resolution: "2556 x 1179", screenSize: '6.1"' },
  { device: "Samsung Galaxy S24", ppi: 416, resolution: "2340 x 1080", screenSize: '6.2"' },
  { device: 'MacBook Pro 14"', ppi: 254, resolution: "3024 x 1964", screenSize: '14.2"' },
  { device: 'Dell 27" 4K (S2722QC)', ppi: 163, resolution: "3840 x 2160", screenSize: '27"' },
  { device: 'iPad Pro 12.9"', ppi: 264, resolution: "2732 x 2048", screenSize: '12.9"' },
];

function calcPpi(w: number, h: number, diag: number): number {
  return Math.sqrt(w * w + h * h) / diag;
}

export function PpiCalculator() {
  const [widthPx, setWidthPx] = useState("1920");
  const [heightPx, setHeightPx] = useState("1080");
  const [diagonal, setDiagonal] = useState("24");
  const [copied, setCopied] = useState(false);

  const w = parseFloat(widthPx) || 0;
  const h = parseFloat(heightPx) || 0;
  const diag = parseFloat(diagonal) || 0;

  const ppi = diag > 0 ? calcPpi(w, h, diag) : 0;
  const totalPixels = w * h;
  const megapixels = totalPixels / 1_000_000;

  const applyPreset = (preset: ScreenPreset) => {
    setWidthPx(String(preset.width));
    setHeightPx(String(preset.height));
    setDiagonal(String(preset.diagonal));
  };

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(formatNumber(ppi, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  }, [ppi]);

  const densityLabel =
    ppi >= 400 ? "Ultra-High Density" :
    ppi >= 200 ? "High Density (Retina-class)" :
    ppi >= 100 ? "Standard Density" :
    "Low Density";

  return (
    <div className="tool-card space-y-6">
      {/* Preset buttons */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Screen Presets
        </label>
        <div className="flex flex-wrap gap-2">
          {screenPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                w === preset.width && h === preset.height && diag === preset.diagonal
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"
              )}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

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
            Diagonal (inches)
          </label>
          <input
            type="number"
            value={diagonal}
            onChange={(e) => setDiagonal(e.target.value)}
            step="0.1"
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="24"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-primary-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">PPI</p>
          <div className="flex items-center gap-2">
            <p className="mono-display mt-1 text-2xl font-bold text-primary-800">
              {ppi > 0 ? formatNumber(ppi, 2) : " - "}
            </p>
            <button
              onClick={handleCopy}
              className="mt-1 rounded-md p-1 text-primary-400 transition-colors hover:bg-primary-100 hover:text-primary-600"
              aria-label="Copy PPI value"
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
        </div>
        <div className="rounded-lg bg-neutral-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Total Pixels</p>
          <p className="mono-display mt-1 text-lg font-semibold text-neutral-800">
            {totalPixels > 0 ? formatNumber(totalPixels, 0) : " - "}
          </p>
        </div>
        <div className="rounded-lg bg-neutral-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Megapixels</p>
          <p className="mono-display mt-1 text-lg font-semibold text-neutral-800">
            {megapixels > 0 ? formatNumber(megapixels, 2) + " MP" : " - "}
          </p>
        </div>
        <div className="rounded-lg bg-neutral-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Density</p>
          <p className="mt-1 text-sm font-semibold text-neutral-800">
            {ppi > 0 ? densityLabel : " - "}
          </p>
        </div>
      </div>

      {/* Formula display */}
      <div className="rounded-lg bg-neutral-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Formula</p>
        <p className="mono-display mt-1 text-sm text-neutral-700">
          PPI = sqrt(width<sup>2</sup> + height<sup>2</sup>) / diagonal
        </p>
        {ppi > 0 && (
          <p className="mono-display mt-1 text-xs text-neutral-500">
            = sqrt({w}<sup>2</sup> + {h}<sup>2</sup>) / {diag} = {formatNumber(ppi, 2)}
          </p>
        )}
      </div>

      {/* Device PPI Comparison Table */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Common Device PPI Comparison
        </p>
        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Device</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Resolution</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Screen Size</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">PPI</th>
              </tr>
            </thead>
            <tbody>
              {commonDevices.map((device) => (
                <tr key={device.device} className="border-b border-neutral-100 last:border-b-0">
                  <td className="px-4 py-2 font-medium text-neutral-800">{device.device}</td>
                  <td className="mono-display px-4 py-2 text-neutral-800">{device.resolution}</td>
                  <td className="px-4 py-2 text-neutral-800">{device.screenSize}</td>
                  <td className="mono-display px-4 py-2 text-neutral-800">{device.ppi}</td>
                </tr>
              ))}
              {ppi > 0 && (
                <tr className="border-t-2 border-primary-200 bg-primary-50/50">
                  <td className="px-4 py-2 font-medium text-primary-800">Your Screen</td>
                  <td className="mono-display px-4 py-2 text-primary-800">{w} x {h}</td>
                  <td className="px-4 py-2 text-primary-800">{diag}&quot;</td>
                  <td className="mono-display px-4 py-2 font-bold text-primary-800">{formatNumber(ppi, 1)}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
