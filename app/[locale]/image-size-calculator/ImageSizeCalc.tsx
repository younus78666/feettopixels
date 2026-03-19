"use client";

import { useState } from "react";
import { cn, formatNumber } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { getToolUi, getUnitLabel } from "@/lib/tool-ui";

const dpiPresets = [72, 96, 150, 300];

export function ImageSizeCalc({ locale = "en" }: { locale?: Locale }) {
  const dict = getDictionary(locale);
  const toolUi = getToolUi(locale);
  const inchLabel = getUnitLabel(locale, "in");
  const centimeterLabel = getUnitLabel(locale, "cm");
  const millimeterLabel = getUnitLabel(locale, "mm");
  const [width, setWidth] = useState("1920");
  const [height, setHeight] = useState("1080");
  const [dpi, setDpi] = useState(96);
  const [customDpi, setCustomDpi] = useState("");
  const [bitDepth, setBitDepth] = useState(24);
  const [copied, setCopied] = useState(false);

  const numericWidth = parseFloat(width);
  const numericHeight = parseFloat(height);
  const valid =
    !isNaN(numericWidth) &&
    !isNaN(numericHeight) &&
    numericWidth > 0 &&
    numericHeight > 0 &&
    dpi > 0;

  const widthInches = valid ? numericWidth / dpi : null;
  const heightInches = valid ? numericHeight / dpi : null;
  const widthCm = widthInches !== null ? widthInches * 2.54 : null;
  const heightCm = heightInches !== null ? heightInches * 2.54 : null;
  const widthMm = widthCm !== null ? widthCm * 10 : null;
  const heightMm = heightCm !== null ? heightCm * 10 : null;

  const totalPixels = valid ? numericWidth * numericHeight : 0;
  const fileSizeBytes = totalPixels * (bitDepth / 8);
  const fileSizeMB = fileSizeBytes / (1024 * 1024);
  const jpegEstimateMB = fileSizeMB / 10;
  const pngEstimateMB = fileSizeMB / 3;

  const bitDepthOptions = [
    { label: toolUi.imageSize.bitDepth8, value: 8 },
    { label: toolUi.imageSize.bitDepth24, value: 24 },
    { label: toolUi.imageSize.bitDepth32, value: 32 },
    { label: toolUi.imageSize.bitDepth48, value: 48 },
  ];

  const handleDpiChange = (newDpi: number) => {
    setDpi(newDpi);
    setCustomDpi("");
  };

  const handleCustomDpiChange = (val: string) => {
    setCustomDpi(val);
    const num = parseInt(val, 10);
    if (!isNaN(num) && num > 0) {
      setDpi(num);
    }
  };

  const handleCopy = async () => {
    if (!valid || widthInches === null || heightInches === null) return;
    const text = `${width}x${height}px / ${dpi} ${dict.tool.dpi} = ${formatNumber(widthInches, 2)} x ${formatNumber(heightInches, 2)} ${inchLabel}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access is not always available.
    }
  };

  const formatSize = (megabytes: number) => {
    if (megabytes >= 1) {
      return `${formatNumber(megabytes, 1)} MB`;
    }
    return `${formatNumber(megabytes * 1024, 0)} KB`;
  };

  return (
    <div className="tool-card space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            W (px)
          </label>
          <input
            type="number"
            value={width}
            onChange={(event) => setWidth(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="px"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            H (px)
          </label>
          <input
            type="number"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="px"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {dict.tool.dpi}
        </label>
        <div className="flex flex-wrap items-center gap-2">
          {dpiPresets.map((preset) => (
            <button
              key={preset}
              onClick={() => handleDpiChange(preset)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                dpi === preset && customDpi === ""
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800",
              )}
            >
              {preset}
            </button>
          ))}
          <input
            type="number"
            value={customDpi}
            onChange={(event) => handleCustomDpiChange(event.target.value)}
            placeholder={dict.tool.customDpi}
            className="mono-display w-24 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.imageSize.colorDepth}
        </label>
        <div className="flex flex-wrap gap-2">
          {bitDepthOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setBitDepth(option.value)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                bitDepth === option.value
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.imageSize.physicalSize} ({dpi} {dict.tool.dpi})
          </p>
          <button
            onClick={handleCopy}
            className="rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
            aria-label={dict.tool.copy}
            title={copied ? dict.tool.copied : dict.tool.copy}
          >
            {copied ? (
              <svg
                className="h-4 w-4 text-success-500"
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
                className="h-4 w-4"
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-primary-200 bg-primary-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
              {inchLabel}
            </p>
            <p className="mono-display mt-1 text-xl font-bold text-primary-800">
              {widthInches !== null && heightInches !== null
                ? `${formatNumber(widthInches, 2)} x ${formatNumber(heightInches, 2)}`
                : "-"}
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {centimeterLabel}
            </p>
            <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
              {widthCm !== null && heightCm !== null
                ? `${formatNumber(widthCm, 2)} x ${formatNumber(heightCm, 2)}`
                : "-"}
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {millimeterLabel}
            </p>
            <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
              {widthMm !== null && heightMm !== null
                ? `${formatNumber(widthMm, 1)} x ${formatNumber(heightMm, 1)}`
                : "-"}
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.imageSize.estimatedFileSize} ({bitDepth}-bit)
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {toolUi.imageSize.uncompressedBmp}
            </p>
            <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
              {valid
                ? fileSizeMB >= 1
                  ? `${formatNumber(fileSizeMB, 1)} MB`
                  : `${formatNumber(fileSizeBytes / 1024, 0)} KB`
                : "-"}
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {toolUi.imageSize.jpegEstimated}
            </p>
            <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
              {valid ? formatSize(jpegEstimateMB) : "-"}
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {toolUi.imageSize.pngEstimated}
            </p>
            <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
              {valid ? formatSize(pngEstimateMB) : "-"}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-neutral-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.common.totalPixels}
        </p>
        <p className="mono-display mt-1 text-sm text-neutral-700">
          {valid
            ? `${formatNumber(totalPixels, 0)} ${toolUi.imageSize.pixelsWord} (${formatNumber(totalPixels / 1_000_000, 2)} ${toolUi.imageSize.megapixelsWord})`
            : "-"}
        </p>
      </div>
    </div>
  );
}
