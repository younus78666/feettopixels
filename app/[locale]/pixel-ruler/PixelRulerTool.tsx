"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { getToolUi, getUnitLabel } from "@/lib/tool-ui";

const CREDIT_CARD_WIDTH_IN = 3.375;

export function PixelRulerTool({ locale = "en" }: { locale?: Locale }) {
  const dict = getDictionary(locale);
  const toolUi = getToolUi(locale);
  const rulerRef = useRef<HTMLDivElement>(null);
  const [ppi, setPpi] = useState(96);
  const [calibrated, setCalibrated] = useState(false);
  const [calibrationWidth, setCalibrationWidth] = useState(324);
  const [unit, setUnit] = useState<"px" | "in" | "cm">("px");
  const [rulerLength, setRulerLength] = useState(() =>
    typeof window !== "undefined" ? Math.min(window.innerWidth - 80, 1200) : 800,
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setRulerLength(Math.min(window.innerWidth - 80, 1200));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCalibrate = () => {
    const newPpi = calibrationWidth / CREDIT_CARD_WIDTH_IN;
    setPpi(Math.round(newPpi));
    setCalibrated(true);
  };

  const handleCopy = async () => {
    const text = `Screen PPI: ${ppi} (${calibrated ? toolUi.pixelRuler.calibrated : toolUi.pixelRuler.defaultMode})`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access is not always available.
    }
  };

  const ticks = useMemo(() => {
    const output: { position: number; label: string; major: boolean }[] = [];

    if (unit === "px") {
      const step = 50;
      for (let px = 0; px <= rulerLength; px += step) {
        output.push({
          position: px,
          label: `${px}`,
          major: px % 100 === 0,
        });
      }
      return output;
    }

    if (unit === "in") {
      const totalInches = rulerLength / ppi;
      for (let inches = 0; inches <= totalInches; inches += 0.25) {
        const px = inches * ppi;
        if (px > rulerLength) break;
        output.push({
          position: px,
          label: inches % 1 === 0 ? `${inches}"` : "",
          major: inches % 1 === 0,
        });
      }
      return output;
    }

    const pixelsPerCm = ppi / 2.54;
    const totalCm = rulerLength / pixelsPerCm;
    for (let cm = 0; cm <= totalCm; cm += 0.5) {
      const px = cm * pixelsPerCm;
      if (px > rulerLength) break;
      output.push({
        position: px,
        label: cm % 1 === 0 ? `${cm}` : "",
        major: cm % 1 === 0,
      });
    }

    return output;
  }, [ppi, rulerLength, unit]);

  const unitLabels = {
    px: getUnitLabel(locale, "px"),
    in: getUnitLabel(locale, "in"),
    cm: getUnitLabel(locale, "cm"),
  };

  return (
    <div className="tool-card space-y-6">
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {toolUi.pixelRuler.rulerUnit}
        </label>
        <div className="flex flex-wrap gap-2">
          {(["px", "in", "cm"] as const).map((unitKey) => (
            <button
              key={unitKey}
              onClick={() => setUnit(unitKey)}
              className={cn(
                "rounded-lg border px-4 py-1.5 text-sm font-medium uppercase transition-colors",
                unit === unitKey
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-800",
              )}
            >
              {unitLabels[unitKey]}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <div
          ref={rulerRef}
          className="relative h-20 rounded-lg border border-neutral-300 bg-white"
          style={{ width: rulerLength }}
        >
          {ticks.map((tick) => (
            <div
              key={`${tick.position}-${tick.label}`}
              className="absolute top-0"
              style={{ left: tick.position }}
            >
              <div
                className={cn(
                  "border-l",
                  tick.major ? "h-8 border-neutral-800" : "h-4 border-neutral-400",
                )}
              />
              {tick.label && (
                <span
                  className={cn(
                    "absolute left-0.5 text-neutral-600",
                    tick.major ? "top-9 text-xs font-medium" : "top-5 text-[10px]",
                  )}
                >
                  {tick.label}
                </span>
              )}
            </div>
          ))}
          <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-lg bg-primary-500" />
        </div>
      </div>

      <div className="rounded-lg border border-primary-200 bg-primary-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
              {toolUi.pixelRuler.screenPpi}
              {calibrated ? ` (${toolUi.pixelRuler.calibrated})` : ""}
            </p>
            <p className="mono-display mt-1 text-3xl font-bold text-primary-800">
              {ppi} PPI
            </p>
          </div>
          <button
            onClick={handleCopy}
            className="rounded-md p-2 text-primary-500 transition-colors hover:bg-primary-100 hover:text-primary-700"
            aria-label={toolUi.pixelRuler.copyPpi}
            title={copied ? dict.tool.copied : toolUi.pixelRuler.copyPpi}
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

      <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-6 py-4">
        <p className="mb-3 text-sm font-semibold text-neutral-700">
          {toolUi.pixelRuler.calibrateWithCreditCard}
        </p>
        <p className="mb-4 text-xs leading-relaxed text-neutral-500">
          {toolUi.pixelRuler.calibrationInstructions}
        </p>
        <div
          className="mb-4 h-4 rounded bg-primary-400"
          style={{ width: calibrationWidth }}
        />
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={200}
            max={600}
            value={calibrationWidth}
            onChange={(event) => setCalibrationWidth(Number(event.target.value))}
            className="w-full"
          />
          <span className="mono-display text-sm text-neutral-600">
            {calibrationWidth}px
          </span>
        </div>
        <button
          onClick={handleCalibrate}
          className="mt-4 rounded-lg border border-primary-300 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-100"
        >
          {toolUi.pixelRuler.calibrate}
        </button>
      </div>
    </div>
  );
}
