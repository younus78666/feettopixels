"use client";

import { useState } from "react";
import { formatNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";

const dpiPresets = [72, 96, 150, 300];

export function ImageSizeCalc() {
  const [width, setWidth] = useState("1920");
  const [height, setHeight] = useState("1080");
  const [dpi, setDpi] = useState(96);
  const [customDpi, setCustomDpi] = useState("");
  const [bitDepth, setBitDepth] = useState(24);
  const [copied, setCopied] = useState(false);

  const w = parseFloat(width);
  const h = parseFloat(height);
  const valid = !isNaN(w) && !isNaN(h) && w > 0 && h > 0 && dpi > 0;

  const widthInches = valid ? w / dpi : null;
  const heightInches = valid ? h / dpi : null;
  const widthCm = widthInches !== null ? widthInches * 2.54 : null;
  const heightCm = heightInches !== null ? heightInches * 2.54 : null;
  const widthMm = widthCm !== null ? widthCm * 10 : null;
  const heightMm = heightCm !== null ? heightCm * 10 : null;

  // File size: width * height * (bitDepth/8) bytes (uncompressed)
  const totalPixels = valid ? w * h : 0;
  const fileSizeBytes = totalPixels * (bitDepth / 8);
  const fileSizeMB = fileSizeBytes / (1024 * 1024);
  // JPEG typically 1/10 uncompressed
  const jpegEstMB = fileSizeMB / 10;
  // PNG typically 1/3 uncompressed
  const pngEstMB = fileSizeMB / 3;

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
    if (!valid) return;
    const text = `${width}x${height}px at ${dpi} DPI = ${formatNumber(widthInches!, 2)} x ${formatNumber(heightInches!, 2)} inches`;
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
      {/* Inputs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Width (px)
          </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="Width in pixels"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Height (px)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="Height in pixels"
          />
        </div>
      </div>

      {/* DPI selector */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          DPI (Dots Per Inch)
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
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"
              )}
            >
              {preset}
            </button>
          ))}
          <input
            type="number"
            value={customDpi}
            onChange={(e) => handleCustomDpiChange(e.target.value)}
            placeholder="Custom"
            className="mono-display w-24 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
      </div>

      {/* Bit depth */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Color Depth
        </label>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "8-bit (Grayscale)", value: 8 },
            { label: "24-bit (RGB)", value: 24 },
            { label: "32-bit (RGBA)", value: 32 },
            { label: "48-bit (Deep Color)", value: 48 },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setBitDepth(opt.value)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                bitDepth === opt.value
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Physical size results */}
      <div>
        <div className="flex items-center justify-between">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Physical Size at {dpi} DPI
          </p>
          <button
            onClick={handleCopy}
            className="rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-primary-200 bg-primary-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">Inches</p>
            <p className="mono-display mt-1 text-xl font-bold text-primary-800">
              {widthInches !== null && heightInches !== null
                ? `${formatNumber(widthInches, 2)} x ${formatNumber(heightInches, 2)}`
                : "—"}
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Centimeters</p>
            <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
              {widthCm !== null && heightCm !== null
                ? `${formatNumber(widthCm, 2)} x ${formatNumber(heightCm, 2)}`
                : "—"}
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Millimeters</p>
            <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
              {widthMm !== null && heightMm !== null
                ? `${formatNumber(widthMm, 1)} x ${formatNumber(heightMm, 1)}`
                : "—"}
            </p>
          </div>
        </div>
      </div>

      {/* File size estimates */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Estimated File Size ({bitDepth}-bit)
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Uncompressed (BMP)</p>
            <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
              {valid ? (fileSizeMB >= 1 ? `${formatNumber(fileSizeMB, 1)} MB` : `${formatNumber(fileSizeBytes / 1024, 0)} KB`) : "—"}
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">JPEG (estimated)</p>
            <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
              {valid ? (jpegEstMB >= 1 ? `${formatNumber(jpegEstMB, 1)} MB` : `${formatNumber(jpegEstMB * 1024, 0)} KB`) : "—"}
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">PNG (estimated)</p>
            <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
              {valid ? (pngEstMB >= 1 ? `${formatNumber(pngEstMB, 1)} MB` : `${formatNumber(pngEstMB * 1024, 0)} KB`) : "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Total pixels */}
      <div className="rounded-lg bg-neutral-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Total Pixels</p>
        <p className="mono-display mt-1 text-sm text-neutral-700">
          {valid ? `${formatNumber(totalPixels, 0)} pixels (${formatNumber(totalPixels / 1_000_000, 2)} megapixels)` : "—"}
        </p>
      </div>
    </div>
  );
}
