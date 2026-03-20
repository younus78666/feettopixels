"use client";

import { useState } from "react";
import { cn, formatNumber } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { getToolUi } from "@/lib/tool-ui";

interface Device {
  name: string;
  width: number;
  height: number;
  diagonal: number;
  categoryKey: "phone" | "tablet" | "laptop" | "monitor";
}

const devices: Device[] = [
  { name: "iPhone 15 Pro", width: 2556, height: 1179, diagonal: 6.1, categoryKey: "phone" },
  { name: "Samsung Galaxy S24", width: 2340, height: 1080, diagonal: 6.2, categoryKey: "phone" },
  { name: 'iPad Pro 12.9"', width: 2732, height: 2048, diagonal: 12.9, categoryKey: "tablet" },
  { name: 'MacBook Pro 14"', width: 3024, height: 1964, diagonal: 14.2, categoryKey: "laptop" },
  { name: 'Dell UltraSharp 27" 4K', width: 3840, height: 2160, diagonal: 27, categoryKey: "monitor" },
];

const presets = [
  { label: "iPhone 15 Pro", width: 2556, height: 1179, diagonal: 6.1 },
  { label: "Galaxy S24", width: 2340, height: 1080, diagonal: 6.2 },
  { label: '14" MacBook Pro', width: 3024, height: 1964, diagonal: 14.2 },
  { label: '27" 4K Monitor', width: 3840, height: 2160, diagonal: 27 },
];

function calcPpi(width: number, height: number, diagonal: number): number {
  return Math.sqrt(width * width + height * height) / diagonal;
}

export function PpiCalculator({ locale = "en" }: { locale?: Locale }) {
  const dict = getDictionary(locale);
  const toolUi = getToolUi(locale);
  const [width, setWidth] = useState("2556");
  const [height, setHeight] = useState("1179");
  const [diagonal, setDiagonal] = useState("6.1");
  const [copied, setCopied] = useState(false);

  const numericWidth = parseFloat(width);
  const numericHeight = parseFloat(height);
  const numericDiagonal = parseFloat(diagonal);
  const ppi =
    !isNaN(numericWidth) &&
    !isNaN(numericHeight) &&
    !isNaN(numericDiagonal) &&
    numericDiagonal > 0
      ? calcPpi(numericWidth, numericHeight, numericDiagonal)
      : null;

  const applyPreset = (preset: (typeof presets)[number]) => {
    setWidth(String(preset.width));
    setHeight(String(preset.height));
    setDiagonal(String(preset.diagonal));
  };

  const handleCopy = async () => {
    if (ppi === null) return;
    try {
      await navigator.clipboard.writeText(formatNumber(ppi, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access is not always available.
    }
  };

  const categories = {
    phone: toolUi.ppiCalculator.phone,
    tablet: toolUi.ppiCalculator.tablet,
    laptop: toolUi.ppiCalculator.laptop,
    monitor: toolUi.ppiCalculator.monitor,
  };

  return (
    <div className="tool-card space-y-6">
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.ppiCalculator.quickPresets}
        </label>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => applyPreset(preset)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                width === String(preset.width) &&
                  height === String(preset.height) &&
                  diagonal === String(preset.diagonal)
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800",
              )}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.common.width} (px)
          </label>
          <input
            type="number"
            value={width}
            onChange={(event) => setWidth(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder={toolUi.ppiCalculator.widthPlaceholder}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.common.height} (px)
          </label>
          <input
            type="number"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder={toolUi.ppiCalculator.heightPlaceholder}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.common.diagonal} (in)
          </label>
          <input
            type="number"
            value={diagonal}
            onChange={(event) => setDiagonal(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder={toolUi.ppiCalculator.screenDiagonal}
            step="0.1"
          />
        </div>
      </div>

      <div className="rounded-lg border border-primary-200 bg-primary-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
              {toolUi.ppiCalculator.pixelsPerInch}
            </p>
            <p className="mono-display mt-1 text-3xl font-bold text-primary-800">
              {ppi !== null ? formatNumber(ppi, 2) : "-"}
            </p>
          </div>
          <button
            onClick={handleCopy}
            className="rounded-md p-2 text-primary-500 transition-colors hover:bg-primary-100 hover:text-primary-700"
            aria-label={dict.tool.copy}
            title={copied ? dict.tool.copied : dict.tool.copy}
          >
            {copied ? (
              <svg
                className="h-5 w-5 text-success-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="rounded-lg bg-neutral-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {dict.tool.formula}
        </p>
        <p className="mono-display mt-1 text-sm text-neutral-700">
          PPI = sqrt(width^2 + height^2) / diagonal
        </p>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.ppiCalculator.deviceComparison}
        </p>
        <div className="table-scroll-shell rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.common.device}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.common.category}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.common.resolution}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.common.size}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  PPI
                </th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr
                  key={device.name}
                  className="border-b border-neutral-100 last:border-b-0"
                >
                  <td className="px-4 py-2 font-medium text-neutral-800">
                    {device.name}
                  </td>
                  <td className="px-4 py-2 text-neutral-600">
                    {categories[device.categoryKey]}
                  </td>
                  <td className="mono-display px-4 py-2 text-neutral-800">
                    {device.width} x {device.height}
                  </td>
                  <td className="mono-display px-4 py-2 text-neutral-800">
                    {device.diagonal}&quot;
                  </td>
                  <td className="mono-display px-4 py-2 font-medium text-primary-700">
                    {formatNumber(
                      calcPpi(device.width, device.height, device.diagonal),
                      1,
                    )}
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
