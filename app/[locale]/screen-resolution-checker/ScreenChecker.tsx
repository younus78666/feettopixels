"use client";

import { useEffect, useState } from "react";
import { cn, formatNumber } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { getToolUi } from "@/lib/tool-ui";

interface ScreenInfo {
  width: number;
  height: number;
  devicePixelRatio: number;
  colorDepth: number;
  physicalWidth: number;
  physicalHeight: number;
}

interface Standard {
  name: string;
  width: number;
  height: number;
}

const standards: Standard[] = [
  { name: "HD (720p)", width: 1280, height: 720 },
  { name: "Full HD (1080p)", width: 1920, height: 1080 },
  { name: "QHD (1440p)", width: 2560, height: 1440 },
  { name: "4K UHD (2160p)", width: 3840, height: 2160 },
  { name: "5K", width: 5120, height: 2880 },
  { name: "8K UHD", width: 7680, height: 4320 },
];

export function ScreenChecker({ locale = "en" }: { locale?: Locale }) {
  const dict = getDictionary(locale);
  const toolUi = getToolUi(locale);
  const [info, setInfo] = useState<ScreenInfo | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const update = () => {
      setInfo({
        width: window.screen.width,
        height: window.screen.height,
        devicePixelRatio: window.devicePixelRatio,
        colorDepth: window.screen.colorDepth,
        physicalWidth: window.screen.width * window.devicePixelRatio,
        physicalHeight: window.screen.height * window.devicePixelRatio,
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleCopy = async () => {
    if (!info) return;
    const text = `${info.physicalWidth}x${info.physicalHeight} (${info.devicePixelRatio}x DPR, ${info.colorDepth}-bit color)`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access is not always available.
    }
  };

  const getStandardMatch = (width: number, height: number): string => {
    const highest = [...standards]
      .reverse()
      .find((standard) => width >= standard.width && height >= standard.height);
    if (!highest) return toolUi.screenChecker.belowHd;
    if (highest.name === standards[standards.length - 1].name) {
      return highest.name;
    }
    return `${highest.name} ${toolUi.screenChecker.orHigher}`;
  };

  if (!info) {
    return (
      <div className="tool-card">
        <p className="text-center text-neutral-500">
          {toolUi.screenChecker.detecting}
        </p>
      </div>
    );
  }

  return (
    <div className="tool-card space-y-6">
      <div className="rounded-lg border border-primary-200 bg-primary-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
              {toolUi.screenChecker.yourScreenResolution}
            </p>
            <p className="mono-display mt-1 text-3xl font-bold text-primary-800">
              {info.physicalWidth} x {info.physicalHeight}
            </p>
            <p className="mt-1 text-sm text-primary-600">
              {toolUi.screenChecker.cssPixels}: {info.width} x {info.height}
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.screenChecker.devicePixelRatio}
          </p>
          <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
            {info.devicePixelRatio}x
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.imageSize.colorDepth}
          </p>
          <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
            {info.colorDepth}-bit
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.common.totalPixels}
          </p>
          <p className="mono-display mt-1 text-xl font-bold text-neutral-800">
            {formatNumber(
              (info.physicalWidth * info.physicalHeight) / 1_000_000,
              2,
            )}{" "}
            MP
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {toolUi.common.standard}
          </p>
          <p className="mt-1 text-lg font-bold text-neutral-800">
            {getStandardMatch(info.physicalWidth, info.physicalHeight)}
          </p>
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.screenChecker.resolutionStandards}
        </p>
        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.common.standard}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.common.resolution}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.common.megapixels}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {toolUi.screenChecker.yourScreen}
                </th>
              </tr>
            </thead>
            <tbody>
              {standards.map((standard) => {
                const meets =
                  info.physicalWidth >= standard.width &&
                  info.physicalHeight >= standard.height;
                return (
                  <tr
                    key={standard.name}
                    className="border-b border-neutral-100 last:border-b-0"
                  >
                    <td className="px-4 py-2 font-medium text-neutral-800">
                      {standard.name}
                    </td>
                    <td className="mono-display px-4 py-2 text-neutral-800">
                      {standard.width} x {standard.height}
                    </td>
                    <td className="mono-display px-4 py-2 text-neutral-800">
                      {formatNumber(
                        (standard.width * standard.height) / 1_000_000,
                        1,
                      )}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                          meets
                            ? "bg-success-50 text-success-700"
                            : "bg-neutral-100 text-neutral-500",
                        )}
                      >
                        {meets
                          ? toolUi.screenChecker.meetsOrExceeds
                          : toolUi.screenChecker.below}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-lg bg-neutral-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.screenChecker.browserViewport}
        </p>
        <p className="mt-1 text-sm text-neutral-700">
          {toolUi.screenChecker.viewportNote}
        </p>
      </div>
    </div>
  );
}
