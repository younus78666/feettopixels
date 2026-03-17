"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { formatNumber } from "@/lib/utils";

type ConversionType =
  | "px-to-in"
  | "in-to-px"
  | "px-to-cm"
  | "cm-to-px"
  | "px-to-mm"
  | "mm-to-px"
  | "px-to-ft"
  | "ft-to-px";

const conversions: Record<
  ConversionType,
  {
    forward: (value: number, dpi: number) => number;
    reverse: (value: number, dpi: number) => number;
  }
> = {
  "px-to-in": {
    forward: (px, dpi) => px / dpi,
    reverse: (inches, dpi) => inches * dpi,
  },
  "in-to-px": {
    forward: (inches, dpi) => inches * dpi,
    reverse: (px, dpi) => px / dpi,
  },
  "px-to-cm": {
    forward: (px, dpi) => (px * 2.54) / dpi,
    reverse: (cm, dpi) => (cm * dpi) / 2.54,
  },
  "cm-to-px": {
    forward: (cm, dpi) => (cm * dpi) / 2.54,
    reverse: (px, dpi) => (px * 2.54) / dpi,
  },
  "px-to-mm": {
    forward: (px, dpi) => (px * 25.4) / dpi,
    reverse: (mm, dpi) => (mm * dpi) / 25.4,
  },
  "mm-to-px": {
    forward: (mm, dpi) => (mm * dpi) / 25.4,
    reverse: (px, dpi) => (px * 25.4) / dpi,
  },
  "px-to-ft": {
    forward: (px, dpi) => px / (dpi * 12),
    reverse: (ft, dpi) => ft * 12 * dpi,
  },
  "ft-to-px": {
    forward: (ft, dpi) => ft * 12 * dpi,
    reverse: (px, dpi) => px / (dpi * 12),
  },
};

interface UnitConverterProps {
  fromUnit: string;
  toUnit: string;
  conversionType: ConversionType;
  formula: string;
  showDpiSelector?: boolean;
  defaultDpi?: number;
  dpiPresets?: number[];
  commonValues?: number[];
}

export function UnitConverter({
  fromUnit,
  toUnit,
  conversionType,
  formula,
  showDpiSelector = true,
  defaultDpi = 96,
  dpiPresets = [72, 96, 150, 300],
  commonValues = [1, 10, 50, 100, 250, 500, 1000],
}: UnitConverterProps) {
  const { forward: conversionFn, reverse: reverseConversionFn } =
    conversions[conversionType];

  const [fromValue, setFromValue] = useState("100");
  const [toValue, setToValue] = useState(() =>
    formatNumber(conversionFn(100, defaultDpi), 4)
  );
  const [dpi, setDpi] = useState(defaultDpi);
  const [customDpi, setCustomDpi] = useState("");
  const [reversed, setReversed] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentFromUnit = reversed ? toUnit : fromUnit;
  const currentToUnit = reversed ? fromUnit : toUnit;

  const convert = useCallback(
    (
      val: string,
      fromSide: "from" | "to",
      currentDpi: number,
      isReversed: boolean
    ) => {
      const num = parseFloat(val);
      if (isNaN(num)) {
        if (fromSide === "from") setToValue("");
        else setFromValue("");
        return;
      }

      if (fromSide === "from") {
        const fn = isReversed ? reverseConversionFn : conversionFn;
        setToValue(formatNumber(fn(num, currentDpi), 4));
      } else {
        const fn = isReversed ? conversionFn : reverseConversionFn;
        setFromValue(formatNumber(fn(num, currentDpi), 4));
      }
    },
    [conversionFn, reverseConversionFn]
  );

  const handleFromChange = (val: string) => {
    setFromValue(val);
    convert(val, "from", dpi, reversed);
  };

  const handleToChange = (val: string) => {
    setToValue(val);
    convert(val, "to", dpi, reversed);
  };

  const handleDpiChange = (newDpi: number) => {
    setDpi(newDpi);
    setCustomDpi("");
    convert(fromValue, "from", newDpi, reversed);
  };

  const handleCustomDpiChange = (val: string) => {
    setCustomDpi(val);
    const num = parseInt(val, 10);
    if (!isNaN(num) && num > 0) {
      setDpi(num);
      convert(fromValue, "from", num, reversed);
    }
  };

  const handleSwap = () => {
    setReversed(!reversed);
    const oldFrom = fromValue;
    const oldTo = toValue;
    setFromValue(oldTo);
    setToValue(oldFrom);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(toValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  };

  const conversionFnForTable = reversed ? reverseConversionFn : conversionFn;

  return (
    <div className="tool-card space-y-6">
      {/* Converter inputs */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        {/* From input */}
        <div className="w-full flex-1">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {currentFromUnit}
          </label>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => handleFromChange(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder={`Enter ${currentFromUnit}`}
          />
        </div>

        {/* Swap button */}
        <button
          onClick={handleSwap}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-500 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 sm:mt-5"
          aria-label="Swap conversion direction"
        >
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
              d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
        </button>

        {/* To input */}
        <div className="w-full flex-1">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {currentToUnit}
          </label>
          <div className="relative">
            <input
              type="number"
              value={toValue}
              onChange={(e) => handleToChange(e.target.value)}
              className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 pr-12 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder={`Result in ${currentToUnit}`}
            />
            <button
              onClick={handleCopy}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
              aria-label="Copy result"
              title="Copy result"
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
        </div>
      </div>

      {/* DPI selector */}
      {showDpiSelector && (
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
          <p className="mt-1.5 text-xs text-neutral-400">
            {dpi === 72 && "Standard for older Mac displays"}
            {dpi === 96 && "Standard for web and Windows displays"}
            {dpi === 150 && "Common for medium-quality print"}
            {dpi === 300 && "Standard for high-quality print"}
            {![72, 96, 150, 300].includes(dpi) && `Custom: ${dpi} DPI`}
          </p>
        </div>
      )}

      {/* Formula display */}
      <div className="rounded-lg bg-neutral-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Formula
        </p>
        <p className="mono-display mt-1 text-sm text-neutral-700">{formula}</p>
      </div>

      {/* Conversion table */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Common Conversions at {dpi} DPI
        </p>
        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {currentFromUnit}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {currentToUnit}
                </th>
              </tr>
            </thead>
            <tbody>
              {commonValues.map((val) => (
                <tr
                  key={val}
                  className="border-b border-neutral-100 last:border-b-0"
                >
                  <td className="mono-display px-4 py-2 text-neutral-800">
                    {formatNumber(val)}
                  </td>
                  <td className="mono-display px-4 py-2 text-neutral-800">
                    {formatNumber(conversionFnForTable(val, dpi), 4)}
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
