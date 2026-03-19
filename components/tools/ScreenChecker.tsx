"use client";

import { useState, useEffect, useCallback } from "react";
import { formatNumber } from "@/lib/utils";

interface ScreenInfo {
  screenWidth: number;
  screenHeight: number;
  viewportWidth: number;
  viewportHeight: number;
  devicePixelRatio: number;
  colorDepth: number;
  orientation: string;
  physicalWidth: number;
  physicalHeight: number;
}

const resolutionStandards = [
  { name: "HD (720p)", width: 1280, height: 720 },
  { name: "Full HD (1080p)", width: 1920, height: 1080 },
  { name: "QHD (1440p)", width: 2560, height: 1440 },
  { name: "4K UHD", width: 3840, height: 2160 },
  { name: "5K", width: 5120, height: 2880 },
];

export function ScreenChecker() {
  const [info, setInfo] = useState<ScreenInfo | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function detect() {
      const dpr = window.devicePixelRatio || 1;
      const sw = window.screen.width;
      const sh = window.screen.height;
      const orientation =
        sw > sh ? "Landscape" : sw < sh ? "Portrait" : "Square";

      setInfo({
        screenWidth: sw,
        screenHeight: sh,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        devicePixelRatio: dpr,
        colorDepth: window.screen.colorDepth,
        orientation,
        physicalWidth: sw * dpr,
        physicalHeight: sh * dpr,
      });
    }

    detect();
    window.addEventListener("resize", detect);
    return () => window.removeEventListener("resize", detect);
  }, []);

  const handleCopy = useCallback(async () => {
    if (!info) return;
    const text = `Screen: ${info.screenWidth}x${info.screenHeight}, DPR: ${info.devicePixelRatio}, Viewport: ${info.viewportWidth}x${info.viewportHeight}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  }, [info]);

  if (!info) {
    return (
      <div className="tool-card">
        <p className="text-neutral-500">Detecting screen information...</p>
      </div>
    );
  }

  const closestStandard = [...resolutionStandards]
    .reverse()
    .find(
      (s) =>
        (info.physicalWidth >= s.width && info.physicalHeight >= s.height) ||
        (info.physicalWidth >= s.height && info.physicalHeight >= s.width)
    );

  return (
    <div className="tool-card space-y-6">
      {/* Main results */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-primary-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
            Screen Resolution
          </p>
          <p className="mono-display mt-1 text-2xl font-bold text-primary-800">
            {info.screenWidth} x {info.screenHeight}
          </p>
          <p className="mt-0.5 text-xs text-primary-600">CSS pixels</p>
        </div>
        <div className="rounded-lg bg-neutral-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Physical Resolution
          </p>
          <p className="mono-display mt-1 text-2xl font-bold text-neutral-800">
            {info.physicalWidth} x {info.physicalHeight}
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">hardware pixels</p>
        </div>
        <div className="rounded-lg bg-neutral-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Device Pixel Ratio
          </p>
          <p className="mono-display mt-1 text-2xl font-bold text-neutral-800">
            {info.devicePixelRatio}x
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">
            {info.devicePixelRatio > 1 ? "High-DPI (Retina)" : "Standard density"}
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-neutral-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Viewport Size
          </p>
          <p className="mono-display mt-1 text-lg font-semibold text-neutral-800">
            {info.viewportWidth} x {info.viewportHeight}
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">browser viewport</p>
        </div>
        <div className="rounded-lg bg-neutral-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Color Depth
          </p>
          <p className="mono-display mt-1 text-lg font-semibold text-neutral-800">
            {info.colorDepth}-bit
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">
            {info.colorDepth >= 24 ? formatNumber(Math.pow(2, info.colorDepth), 0) + " colors" : "Limited colors"}
          </p>
        </div>
        <div className="rounded-lg bg-neutral-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Orientation
          </p>
          <p className="mt-1 text-lg font-semibold text-neutral-800">
            {info.orientation}
          </p>
        </div>
      </div>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
      >
        {copied ? "Copied!" : "Copy Screen Info"}
      </button>

      {/* Standard comparison */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Resolution Standard Comparison
        </p>
        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Standard</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Resolution</th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {resolutionStandards.map((standard) => {
                const meetsCSS =
                  (info.screenWidth >= standard.width && info.screenHeight >= standard.height) ||
                  (info.screenWidth >= standard.height && info.screenHeight >= standard.width);
                const meetsPhysical =
                  (info.physicalWidth >= standard.width && info.physicalHeight >= standard.height) ||
                  (info.physicalWidth >= standard.height && info.physicalHeight >= standard.width);

                return (
                  <tr key={standard.name} className="border-b border-neutral-100 last:border-b-0">
                    <td className="px-4 py-2 font-medium text-neutral-800">{standard.name}</td>
                    <td className="mono-display px-4 py-2 text-neutral-800">
                      {standard.width} x {standard.height}
                    </td>
                    <td className="px-4 py-2">
                      {meetsPhysical ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-success-50 px-2 py-0.5 text-xs font-medium text-success-700">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          Meets or exceeds
                        </span>
                      ) : meetsCSS ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-warning-50 px-2 py-0.5 text-xs font-medium text-warning-700">
                          CSS only
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-500">
                          Below
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {closestStandard && (
          <p className="mt-2 text-sm text-neutral-600">
            Your physical resolution matches or exceeds <strong>{closestStandard.name}</strong>.
          </p>
        )}
      </div>
    </div>
  );
}
