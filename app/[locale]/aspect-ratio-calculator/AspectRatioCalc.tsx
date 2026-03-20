"use client";

import { useState } from "react";
import { cn, formatEditableNumber, formatNumber } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { getToolUi } from "@/lib/tool-ui";

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

const referenceRows = [
  { ratio: "16:9", res: "1920 x 1080", name: "Full HD (1080p)" },
  { ratio: "16:9", res: "2560 x 1440", name: "QHD (1440p)" },
  { ratio: "16:9", res: "3840 x 2160", name: "4K UHD" },
  { ratio: "4:3", res: "1024 x 768", name: "XGA" },
  { ratio: "4:3", res: "2048 x 1536", name: "QXGA" },
  { ratio: "1:1", res: "1080 x 1080", name: "Instagram Square" },
  { ratio: "3:2", res: "2160 x 1440", name: "Surface Pro" },
  { ratio: "21:9", res: "2560 x 1080", name: "UltraWide FHD" },
  { ratio: "21:9", res: "3440 x 1440", name: "UltraWide QHD" },
];

function gcd(a: number, b: number): number {
  let currentA = Math.abs(Math.round(a));
  let currentB = Math.abs(Math.round(b));
  while (currentB) {
    const temp = currentB;
    currentB = currentA % currentB;
    currentA = temp;
  }
  return currentA;
}

export function AspectRatioCalc({ locale = "en" }: { locale?: Locale }) {
  const dict = getDictionary(locale);
  const toolUi = getToolUi(locale);
  const [width, setWidth] = useState("1920");
  const [height, setHeight] = useState("1080");
  const [ratioX, setRatioX] = useState("16");
  const [ratioY, setRatioY] = useState("9");
  const [lockField, setLockField] = useState<"width" | "height" | "ratio">(
    "ratio",
  );
  const [copied, setCopied] = useState(false);

  const applyPreset = (preset: RatioPreset) => {
    setRatioX(String(preset.x));
    setRatioY(String(preset.y));
    setLockField("ratio");
    const numericWidth = parseFloat(width);
    if (!isNaN(numericWidth) && numericWidth > 0) {
      setHeight(formatEditableNumber((numericWidth * preset.y) / preset.x, 0));
    }
  };

  const handleWidthChange = (val: string) => {
    setWidth(val);
    const numericWidth = parseFloat(val);
    if (isNaN(numericWidth) || numericWidth <= 0) return;

    if (lockField === "ratio") {
      const numericRatioX = parseFloat(ratioX);
      const numericRatioY = parseFloat(ratioY);
      if (
        !isNaN(numericRatioX) &&
        !isNaN(numericRatioY) &&
        numericRatioX > 0
      ) {
        setHeight(
          formatEditableNumber((numericWidth * numericRatioY) / numericRatioX, 0),
        );
      }
    } else if (lockField === "height") {
      const numericHeight = parseFloat(height);
      if (!isNaN(numericHeight) && numericHeight > 0) {
        const divisor = gcd(numericWidth, numericHeight);
        setRatioX(String(numericWidth / divisor));
        setRatioY(String(numericHeight / divisor));
      }
    }
  };

  const handleHeightChange = (val: string) => {
    setHeight(val);
    const numericHeight = parseFloat(val);
    if (isNaN(numericHeight) || numericHeight <= 0) return;

    if (lockField === "ratio") {
      const numericRatioX = parseFloat(ratioX);
      const numericRatioY = parseFloat(ratioY);
      if (
        !isNaN(numericRatioX) &&
        !isNaN(numericRatioY) &&
        numericRatioY > 0
      ) {
        setWidth(
          formatEditableNumber((numericHeight * numericRatioX) / numericRatioY, 0),
        );
      }
    } else if (lockField === "width") {
      const numericWidth = parseFloat(width);
      if (!isNaN(numericWidth) && numericWidth > 0) {
        const divisor = gcd(numericWidth, numericHeight);
        setRatioX(String(numericWidth / divisor));
        setRatioY(String(numericHeight / divisor));
      }
    }
  };

  const handleRatioChange = (axis: "x" | "y", val: string) => {
    if (axis === "x") setRatioX(val);
    else setRatioY(val);

    const numericRatioX = axis === "x" ? parseFloat(val) : parseFloat(ratioX);
    const numericRatioY = axis === "y" ? parseFloat(val) : parseFloat(ratioY);
    if (
      isNaN(numericRatioX) ||
      isNaN(numericRatioY) ||
      numericRatioX <= 0 ||
      numericRatioY <= 0
    ) {
      return;
    }

    if (lockField === "width") {
      const numericWidth = parseFloat(width);
      if (!isNaN(numericWidth) && numericWidth > 0) {
        setHeight(
          formatEditableNumber((numericWidth * numericRatioY) / numericRatioX, 0),
        );
      }
    } else if (lockField === "height") {
      const numericHeight = parseFloat(height);
      if (!isNaN(numericHeight) && numericHeight > 0) {
        setWidth(
          formatEditableNumber((numericHeight * numericRatioX) / numericRatioY, 0),
        );
      }
    }
  };

  const numericWidth = parseFloat(width);
  const numericHeight = parseFloat(height);
  const simplifiedRatio =
    !isNaN(numericWidth) &&
    !isNaN(numericHeight) &&
    numericWidth > 0 &&
    numericHeight > 0
      ? (() => {
          const divisor = gcd(numericWidth, numericHeight);
          return `${numericWidth / divisor}:${numericHeight / divisor}`;
        })()
      : "-";

  const decimalRatio =
    !isNaN(numericWidth) && !isNaN(numericHeight) && numericHeight > 0
      ? formatNumber(numericWidth / numericHeight, 4)
      : "-";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${width} x ${height} (${simplifiedRatio})`,
      );
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
          {toolUi.aspectRatio.presetRatios}
        </label>
        <div className="flex flex-wrap gap-2">
          {ratioPresets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => applyPreset(preset)}
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
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.aspectRatio.lockLabel}
        </label>
        <div className="flex flex-wrap gap-2">
          {([
            { key: "ratio", label: toolUi.aspectRatio.lockRatio },
            { key: "width", label: toolUi.aspectRatio.lockWidth },
            { key: "height", label: toolUi.aspectRatio.lockHeight },
          ] as const).map((field) => (
            <button
              key={field.key}
              onClick={() => setLockField(field.key)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                lockField === field.key
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800",
              )}
            >
              {field.label}
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
            onChange={(event) => handleWidthChange(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder={toolUi.common.width}
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
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.aspectRatio.ratioLabel}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={ratioX}
              onChange={(event) => handleRatioChange("x", event.target.value)}
              className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="W"
            />
            <span className="text-lg font-bold text-neutral-400">:</span>
            <input
              type="number"
              value={ratioY}
              onChange={(event) => handleRatioChange("y", event.target.value)}
              className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="H"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-primary-200 bg-primary-50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
            {toolUi.common.dimensions}
          </p>
          <p className="mono-display mt-1 text-xl font-bold text-primary-800">
            {width} x {height}
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.aspectRatio.simplifiedRatio}
          </p>
          <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
            {simplifiedRatio}
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {toolUi.aspectRatio.decimalRatio}
              </p>
              <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
                {decimalRatio}
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="rounded-md p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
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

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.aspectRatio.commonResolutions}
        </p>
        <div className="table-scroll-shell rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.common.ratio}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.common.resolution}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.common.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {referenceRows.map((row) => (
                <tr
                  key={`${row.ratio}-${row.res}`}
                  className="border-b border-neutral-100 last:border-b-0"
                >
                  <td className="px-4 py-2 font-medium text-primary-700">
                    {row.ratio}
                  </td>
                  <td className="mono-display px-4 py-2 text-neutral-800">
                    {row.res}
                  </td>
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
