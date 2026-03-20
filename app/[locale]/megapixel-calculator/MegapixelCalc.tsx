"use client";

import { useState } from "react";
import { cn, formatEditableNumber, formatNumber } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { getToolUi } from "@/lib/tool-ui";

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

function calcDimensions(mp: number, ratioX: number, ratioY: number) {
  const totalPixels = mp * 1_000_000;
  const height = Math.sqrt((totalPixels * ratioY) / ratioX);
  const width = (ratioX / ratioY) * height;
  return { width: Math.round(width), height: Math.round(height) };
}

function calcMp(width: number, height: number) {
  return (width * height) / 1_000_000;
}

export function MegapixelCalc({ locale = "en" }: { locale?: Locale }) {
  const dict = getDictionary(locale);
  const toolUi = getToolUi(locale);
  const [mode, setMode] = useState<Mode>("mp-to-px");
  const [megapixels, setMegapixels] = useState("12");
  const [ratioX, setRatioX] = useState("4");
  const [ratioY, setRatioY] = useState("3");
  const [width, setWidth] = useState("4000");
  const [height, setHeight] = useState("3000");
  const [copied, setCopied] = useState(false);

  const handleMpChange = (val: string) => {
    setMegapixels(val);
    const numericMp = parseFloat(val);
    const numericRatioX = parseFloat(ratioX);
    const numericRatioY = parseFloat(ratioY);
    if (
      !isNaN(numericMp) &&
      !isNaN(numericRatioX) &&
      !isNaN(numericRatioY) &&
      numericMp > 0 &&
      numericRatioX > 0 &&
      numericRatioY > 0
    ) {
      const dims = calcDimensions(numericMp, numericRatioX, numericRatioY);
      setWidth(String(dims.width));
      setHeight(String(dims.height));
    }
  };

  const handleRatioChange = (nextRatioX: string, nextRatioY: string) => {
    setRatioX(nextRatioX);
    setRatioY(nextRatioY);
    if (mode === "mp-to-px") {
      const numericMp = parseFloat(megapixels);
      const numericRatioX = parseFloat(nextRatioX);
      const numericRatioY = parseFloat(nextRatioY);
      if (
        !isNaN(numericMp) &&
        !isNaN(numericRatioX) &&
        !isNaN(numericRatioY) &&
        numericMp > 0 &&
        numericRatioX > 0 &&
        numericRatioY > 0
      ) {
        const dims = calcDimensions(numericMp, numericRatioX, numericRatioY);
        setWidth(String(dims.width));
        setHeight(String(dims.height));
      }
    }
  };

  const handleWidthChange = (val: string) => {
    setWidth(val);
    const numericWidth = parseFloat(val);
    const numericHeight = parseFloat(height);
    if (
      !isNaN(numericWidth) &&
      !isNaN(numericHeight) &&
      numericWidth > 0 &&
      numericHeight > 0
    ) {
      setMegapixels(formatEditableNumber(calcMp(numericWidth, numericHeight), 2));
    }
  };

  const handleHeightChange = (val: string) => {
    setHeight(val);
    const numericWidth = parseFloat(width);
    const numericHeight = parseFloat(val);
    if (
      !isNaN(numericWidth) &&
      !isNaN(numericHeight) &&
      numericWidth > 0 &&
      numericHeight > 0
    ) {
      setMegapixels(formatEditableNumber(calcMp(numericWidth, numericHeight), 2));
    }
  };

  const applyMpPreset = (mp: number) => {
    setMegapixels(String(mp));
    setMode("mp-to-px");
    const numericRatioX = parseFloat(ratioX);
    const numericRatioY = parseFloat(ratioY);
    if (
      !isNaN(numericRatioX) &&
      !isNaN(numericRatioY) &&
      numericRatioX > 0 &&
      numericRatioY > 0
    ) {
      const dims = calcDimensions(mp, numericRatioX, numericRatioY);
      setWidth(String(dims.width));
      setHeight(String(dims.height));
    }
  };

  const applyRatioPreset = (preset: RatioPreset) => {
    handleRatioChange(String(preset.x), String(preset.y));
  };

  const numericWidth = parseFloat(width);
  const numericHeight = parseFloat(height);
  const mp =
    !isNaN(numericWidth) &&
    !isNaN(numericHeight) &&
    numericWidth > 0 &&
    numericHeight > 0
      ? calcMp(numericWidth, numericHeight)
      : null;

  const handleCopy = async () => {
    const text =
      mode === "mp-to-px"
        ? `${width} x ${height} pixels (${megapixels} MP)`
        : `${mp !== null ? formatNumber(mp, 2) : "-"} MP (${width} x ${height})`;
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
          {toolUi.megapixel.conversionMode}
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setMode("mp-to-px")}
            className={cn(
              "rounded-lg border px-4 py-1.5 text-sm font-medium transition-colors",
              mode === "mp-to-px"
                ? "border-primary-300 bg-primary-50 text-primary-700"
                : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800",
            )}
          >
            {toolUi.megapixel.megapixelsToPixels}
          </button>
          <button
            onClick={() => setMode("px-to-mp")}
            className={cn(
              "rounded-lg border px-4 py-1.5 text-sm font-medium transition-colors",
              mode === "px-to-mp"
                ? "border-primary-300 bg-primary-50 text-primary-700"
                : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800",
            )}
          >
            {toolUi.megapixel.pixelsToMegapixels}
          </button>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.megapixel.megapixelPresets}
        </label>
        <div className="flex flex-wrap gap-2">
          {mpPresets.map((preset) => (
            <button
              key={preset.mp}
              onClick={() => applyMpPreset(preset.mp)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                megapixels === String(preset.mp)
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800",
              )}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.megapixel.aspectRatio}
        </label>
        <div className="flex flex-wrap gap-2">
          {ratioPresets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => applyRatioPreset(preset)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                ratioX === String(preset.x) && ratioY === String(preset.y)
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800",
              )}
            >
              {preset.label}
            </button>
          ))}
          <div className="flex items-center gap-1">
            <input
              type="number"
              value={ratioX}
              onChange={(event) => handleRatioChange(event.target.value, ratioY)}
              className="mono-display w-16 rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-sm text-neutral-700 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            />
            <span className="text-neutral-400">:</span>
            <input
              type="number"
              value={ratioY}
              onChange={(event) => handleRatioChange(ratioX, event.target.value)}
              className="mono-display w-16 rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-sm text-neutral-700 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.common.megapixels}
          </label>
          <input
            type="number"
            value={megapixels}
            onChange={(event) => handleMpChange(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder={toolUi.common.megapixels}
            step="0.1"
            readOnly={mode === "px-to-mp"}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.common.width} (px)
          </label>
          <input
            type="number"
            value={width}
            onChange={(event) => handleWidthChange(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder={toolUi.common.width}
            readOnly={mode === "mp-to-px"}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.common.height} (px)
          </label>
          <input
            type="number"
            value={height}
            onChange={(event) => handleHeightChange(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder={toolUi.common.height}
            readOnly={mode === "mp-to-px"}
          />
        </div>
      </div>

      <div className="rounded-lg border border-primary-200 bg-primary-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
              {mode === "mp-to-px"
                ? toolUi.megapixel.pixelDimensions
                : toolUi.common.megapixels}
            </p>
            <p className="mono-display mt-1 text-2xl font-bold text-primary-800">
              {mode === "mp-to-px"
                ? `${formatNumber(parseFloat(width), 0)} x ${formatNumber(parseFloat(height), 0)} px`
                : mp !== null
                  ? `${formatNumber(mp, 2)} MP`
                  : "-"}
            </p>
            <p className="mt-1 text-sm text-primary-600">
              {mp !== null
                ? `${formatNumber(mp * 1_000_000, 0)} ${toolUi.megapixel.totalPixels}`
                : ""}
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

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.megapixel.commonCameraResolutions}
        </p>
        <div className="table-scroll-shell rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.common.megapixels}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.megapixel.resolution43}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.megapixel.resolution169}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.megapixel.maxPrint300}
                </th>
              </tr>
            </thead>
            <tbody>
              {[2, 5, 8, 12, 16, 24, 48, 108].map((mpValue) => {
                const dims43 = calcDimensions(mpValue, 4, 3);
                const dims169 = calcDimensions(mpValue, 16, 9);
                const printWidth = dims43.width / 300;
                const printHeight = dims43.height / 300;

                return (
                  <tr
                    key={mpValue}
                    className="border-b border-neutral-100 last:border-b-0"
                  >
                    <td className="mono-display px-4 py-2 font-medium text-primary-700">
                      {mpValue} MP
                    </td>
                    <td className="mono-display px-4 py-2 text-neutral-800">
                      {formatNumber(dims43.width, 0)} x {formatNumber(dims43.height, 0)}
                    </td>
                    <td className="mono-display px-4 py-2 text-neutral-800">
                      {formatNumber(dims169.width, 0)} x {formatNumber(dims169.height, 0)}
                    </td>
                    <td className="mono-display px-4 py-2 text-neutral-800">
                      {formatNumber(printWidth, 1)}&quot; x {formatNumber(printHeight, 1)}&quot;
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
