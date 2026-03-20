"use client";

import { useCallback, useState } from "react";
import {
  readImageDensityMetadata,
  type ImageDensityMetadata,
} from "@/lib/image-metadata";
import { cn, formatNumber } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { getToolUi } from "@/lib/tool-ui";

interface ImageInfo {
  name: string;
  width: number;
  height: number;
  fileSize: number;
  type: string;
  densityMetadata: ImageDensityMetadata;
}

function formatDpiValue(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  const decimals = Math.abs(rounded - Math.round(rounded)) < 0.01 ? 0 : 2;

  return formatNumber(rounded, decimals);
}

function formatEmbeddedDpi(metadata: ImageDensityMetadata, fallback: string): string {
  const { xDpi, yDpi } = metadata;

  if (xDpi === null && yDpi === null) {
    return fallback;
  }

  if (xDpi === null && yDpi !== null) {
    return `${formatDpiValue(yDpi)} DPI`;
  }

  if (yDpi === null && xDpi !== null) {
    return `${formatDpiValue(xDpi)} DPI`;
  }

  if (xDpi === null || yDpi === null) {
    return fallback;
  }

  if (Math.abs(xDpi - yDpi) < 0.01) {
    return `${formatDpiValue(xDpi)} DPI`;
  }

  return `${formatDpiValue(xDpi)} x ${formatDpiValue(yDpi)} DPI`;
}

function loadImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Unable to read image dimensions."));
    };

    img.src = url;
  });
}

function getQualityAssessment(width: number, height: number, locale: Locale) {
  const toolUi = getToolUi(locale);
  const totalPixels = width * height;
  const mp = totalPixels / 1_000_000;
  const longEdgeAt300 = Math.max(width, height) / 300;
  const shortEdgeAt300 = Math.min(width, height) / 300;

  let quality: "high" | "medium" | "low";
  let label: string;

  if (longEdgeAt300 >= 10 && shortEdgeAt300 >= 8) {
    quality = "high";
    label = toolUi.dpiChecker.printQuality300;
  } else if (longEdgeAt300 >= 6 && shortEdgeAt300 >= 4) {
    quality = "medium";
    label = toolUi.dpiChecker.mediumPrintHighWeb;
  } else {
    quality = "low";
    label = toolUi.dpiChecker.webOnly;
  }

  return { quality, label, mp };
}

const printRows = [
  { dpi: 300, labelKey: "professionalPrint" },
  { dpi: 150, labelKey: "largeFormat" },
  { dpi: 96, labelKey: "screenDisplay" },
  { dpi: 72, labelKey: "webStandard" },
] as const;

export function DpiChecker({ locale = "en" }: { locale?: Locale }) {
  const dict = getDictionary(locale);
  const toolUi = getToolUi(locale);
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const [dragging, setDragging] = useState(false);
  const [copied, setCopied] = useState(false);

  const processFile = useCallback(async (file: File) => {
    try {
      const [dimensions, densityMetadata] = await Promise.all([
        loadImageDimensions(file),
        readImageDensityMetadata(file),
      ]);

      setImageInfo({
        name: file.name,
        width: dimensions.width,
        height: dimensions.height,
        fileSize: file.size,
        type: file.type,
        densityMetadata,
      });
    } catch {
      setImageInfo(null);
    }
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) processFile(file);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleCopy = async () => {
    if (!imageInfo) return;
    const assessment = getQualityAssessment(imageInfo.width, imageInfo.height, locale);
    const text = `${imageInfo.name}: ${imageInfo.width}x${imageInfo.height}px, ${formatNumber(assessment.mp, 2)} MP, ${dict.tool.dpi}: ${embeddedDpi}, ${imageInfo.densityMetadata.message}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access is not always available.
    }
  };

  const assessment = imageInfo
    ? getQualityAssessment(imageInfo.width, imageInfo.height, locale)
    : null;
  const embeddedDpi = imageInfo
    ? formatEmbeddedDpi(imageInfo.densityMetadata, toolUi.common.unknown)
    : toolUi.common.unknown;

  return (
    <div className="tool-card space-y-6">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
          "relative flex min-h-[160px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-8 text-center transition-colors",
          dragging
            ? "border-primary-400 bg-primary-50"
            : "border-neutral-300 bg-neutral-50 hover:border-primary-300 hover:bg-primary-50/50",
        )}
      >
        <svg
          className="mb-3 h-10 w-10 text-neutral-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5zm14.47-9.22a.75.75 0 11-1.06-1.06.75.75 0 011.06 1.06z"
          />
        </svg>
        <p className="text-sm font-medium text-neutral-600">
          {toolUi.dpiChecker.dropImage}
        </p>
        <p className="mt-1 text-xs text-neutral-400">
          {toolUi.dpiChecker.supportedFormats}
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 cursor-pointer opacity-0"
        />
      </div>

      {imageInfo && assessment && (
        <>
          <div className="rounded-lg border border-primary-200 bg-primary-50 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                  {imageInfo.name}
                </p>
                <p className="mono-display mt-1 text-2xl font-bold text-primary-800">
                  {imageInfo.width} x {imageInfo.height} px
                </p>
                <p className="mt-2 text-sm font-medium text-primary-700">
                  {dict.tool.dpi}: {embeddedDpi}
                </p>
                <p className="mt-1 text-xs text-primary-600">
                  {imageInfo.densityMetadata.message}
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {dict.tool.dpi}
              </p>
              <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
                {embeddedDpi}
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                {imageInfo.densityMetadata.sourceLabel}
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {toolUi.common.megapixels}
              </p>
              <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
                {formatNumber(assessment.mp, 2)} MP
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {toolUi.common.size}
              </p>
              <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
                {imageInfo.fileSize >= 1024 * 1024
                  ? `${formatNumber(imageInfo.fileSize / (1024 * 1024), 2)} MB`
                  : `${formatNumber(imageInfo.fileSize / 1024, 0)} KB`}
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {toolUi.common.format}
              </p>
              <p className="mt-1 text-xl font-bold text-neutral-800 uppercase">
                {imageInfo.type.split("/")[1] || toolUi.common.unknown}
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {toolUi.common.quality}
              </p>
              <p
                className={cn(
                  "mt-1 text-lg font-bold",
                  assessment.quality === "high" && "text-success-700",
                  assessment.quality === "medium" && "text-warning-700",
                  assessment.quality === "low" && "text-error-700",
                )}
              >
                {assessment.label}
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                Based on the image size at 300 DPI.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {toolUi.dpiChecker.maximumPrintSize}
            </p>
        <div className="table-scroll-shell rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                      {dict.tool.dpi}
                    </th>
                    <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                      {toolUi.common.quality}
                    </th>
                    <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                      {toolUi.common.maxWidth}
                    </th>
                    <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                      {toolUi.common.maxHeight}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {printRows.map((row) => (
                    <tr
                      key={row.dpi}
                      className="border-b border-neutral-100 last:border-b-0"
                    >
                      <td className="mono-display px-4 py-2 font-medium text-primary-700">
                        {row.dpi}
                      </td>
                      <td className="px-4 py-2 text-neutral-600">
                        {toolUi.dpiChecker[row.labelKey]}
                      </td>
                      <td className="mono-display px-4 py-2 text-neutral-800">
                        {formatNumber(imageInfo.width / row.dpi, 2)}&quot;
                      </td>
                      <td className="mono-display px-4 py-2 text-neutral-800">
                        {formatNumber(imageInfo.height / row.dpi, 2)}&quot;
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Print sizes below are based on pixel dimensions at each target DPI, even when no embedded DPI metadata is present.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
