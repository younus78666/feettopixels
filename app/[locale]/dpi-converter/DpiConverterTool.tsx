"use client";

import { useState } from "react";
import { cn, formatNumber } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { getToolUi } from "@/lib/tool-ui";

interface Preset {
  label: string;
  currentDpi: number;
  targetDpi: number;
}

const presets: Preset[] = [
  { label: "72 -> 300", currentDpi: 72, targetDpi: 300 },
  { label: "96 -> 300", currentDpi: 96, targetDpi: 300 },
  { label: "300 -> 72", currentDpi: 300, targetDpi: 72 },
  { label: "150 -> 300", currentDpi: 150, targetDpi: 300 },
];

const comparisonRows = [
  { from: 72, to: 300 },
  { from: 96, to: 300 },
  { from: 150, to: 300 },
  { from: 300, to: 72 },
  { from: 300, to: 96 },
];

export function DpiConverterTool({ locale = "en" }: { locale?: Locale }) {
  const dict = getDictionary(locale);
  const toolUi = getToolUi(locale);
  const [currentDpi, setCurrentDpi] = useState("72");
  const [targetDpi, setTargetDpi] = useState("300");
  const [widthIn, setWidthIn] = useState("10");
  const [heightIn, setHeightIn] = useState("8");
  const [copied, setCopied] = useState(false);

  const numericCurrentDpi = parseFloat(currentDpi);
  const numericTargetDpi = parseFloat(targetDpi);
  const numericWidth = parseFloat(widthIn);
  const numericHeight = parseFloat(heightIn);

  const valid =
    !isNaN(numericCurrentDpi) &&
    !isNaN(numericTargetDpi) &&
    !isNaN(numericWidth) &&
    !isNaN(numericHeight) &&
    numericCurrentDpi > 0 &&
    numericTargetDpi > 0;

  const widthPx = valid ? numericWidth * numericCurrentDpi : null;
  const heightPx = valid ? numericHeight * numericCurrentDpi : null;
  const newWidth = valid ? (numericWidth * numericCurrentDpi) / numericTargetDpi : null;
  const newHeight = valid
    ? (numericHeight * numericCurrentDpi) / numericTargetDpi
    : null;

  const applyPreset = (preset: Preset) => {
    setCurrentDpi(String(preset.currentDpi));
    setTargetDpi(String(preset.targetDpi));
  };

  const handleCopy = async () => {
    if (newWidth === null || newHeight === null) return;
    const text = `${formatNumber(newWidth, 2)} x ${formatNumber(newHeight, 2)} ${toolUi.dpiConverter.copyTextUnit}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access is not always available.
    }
  };

  return (
    <div className="tool-card space-y-6">
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.dpiConverter.commonConversions}
        </label>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => applyPreset(preset)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                currentDpi === String(preset.currentDpi) &&
                  targetDpi === String(preset.targetDpi)
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800",
              )}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.dpiConverter.currentDpi}
          </label>
          <input
            type="number"
            value={currentDpi}
            onChange={(event) => setCurrentDpi(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="72"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.dpiConverter.targetDpi}
          </label>
          <input
            type="number"
            value={targetDpi}
            onChange={(event) => setTargetDpi(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="300"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.dpiConverter.widthInches}
          </label>
          <input
            type="number"
            value={widthIn}
            onChange={(event) => setWidthIn(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder={toolUi.common.width}
            step="0.1"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.dpiConverter.heightInches}
          </label>
          <input
            type="number"
            value={heightIn}
            onChange={(event) => setHeightIn(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder={toolUi.common.height}
            step="0.1"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.dpiConverter.pixelDimensions}
          </p>
          <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
            {widthPx !== null && heightPx !== null
              ? `${formatNumber(widthPx, 0)} x ${formatNumber(heightPx, 0)} px`
              : "-"}
          </p>
        </div>
        <div className="rounded-lg border border-primary-200 bg-primary-50 px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                {toolUi.dpiConverter.newPrintSize} ({targetDpi} {dict.tool.dpi})
              </p>
              <p className="mono-display mt-1 text-xl font-bold text-primary-800">
                {newWidth !== null && newHeight !== null
                  ? `${formatNumber(newWidth, 2)} x ${formatNumber(newHeight, 2)} in`
                  : "-"}
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
      </div>

      <div className="rounded-lg bg-neutral-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {dict.tool.formula}
        </p>
        <p className="mono-display mt-1 text-sm text-neutral-700">
          new size = (original size x current DPI) / target DPI
        </p>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.dpiConverter.referenceTitle}
        </p>
        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.dpiConverter.fromDpi}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.dpiConverter.toDpi}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.dpiConverter.newWidth}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.dpiConverter.newHeight}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={`${row.from}-${row.to}`}
                  className="border-b border-neutral-100 last:border-b-0"
                >
                  <td className="mono-display px-4 py-2 text-neutral-800">
                    {row.from}
                  </td>
                  <td className="mono-display px-4 py-2 text-neutral-800">
                    {row.to}
                  </td>
                  <td className="mono-display px-4 py-2 text-neutral-800">
                    {formatNumber((10 * row.from) / row.to, 2)}&quot;
                  </td>
                  <td className="mono-display px-4 py-2 text-neutral-800">
                    {formatNumber((8 * row.from) / row.to, 2)}&quot;
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
