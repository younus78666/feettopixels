"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { formatNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";

type ConversionMode = "px-to-rem" | "px-to-em" | "px-to-pt" | "px-to-vw";

const conversions: Record<ConversionMode, {
  convert: (px: number, base: number) => number;
  reverse: (val: number, base: number) => number;
}> = {
  "px-to-rem": {
    convert: (px, base) => px / base,
    reverse: (rem, base) => rem * base,
  },
  "px-to-em": {
    convert: (px, base) => px / base,
    reverse: (em, base) => em * base,
  },
  "px-to-pt": {
    convert: (px, dpi) => (px * 72) / dpi,
    reverse: (pt, dpi) => (pt * dpi) / 72,
  },
  "px-to-vw": {
    convert: (px, viewport) => (px / viewport) * 100,
    reverse: (vw, viewport) => (vw * viewport) / 100,
  },
};

interface CssConverterProps {
  mode: ConversionMode;
  fromLabel: string;
  toLabel: string;
  baseLabel: string;
  defaultBase: number;
  formula: string;
  quickRef?: number[];
  autoDetectBase?: boolean;
}

export function CssConverter({
  mode,
  fromLabel,
  toLabel,
  baseLabel,
  defaultBase,
  formula,
  quickRef = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64],
  autoDetectBase = false,
}: CssConverterProps) {
  const { convert, reverse } = conversions[mode];

  const [pxValue, setPxValue] = useState("16");
  const [resultValue, setResultValue] = useState(() =>
    formatNumber(convert(16, defaultBase), 4)
  );
  const [base, setBase] = useState(defaultBase);
  const [reversed, setReversed] = useState(false);
  const [copied, setCopied] = useState(false);

  // Auto-detect viewport width for vw
  useEffect(() => {
    if (autoDetectBase && typeof window !== "undefined") {
      const vw = window.innerWidth;
      setBase(vw);
      setResultValue(formatNumber(convert(16, vw), 4));
    }
  }, [autoDetectBase, convert]);

  const currentFromLabel = reversed ? toLabel : fromLabel;
  const currentToLabel = reversed ? fromLabel : toLabel;

  const doConvert = useCallback(
    (val: number, isReversed: boolean, currentBase: number) => {
      return isReversed ? reverse(val, currentBase) : convert(val, currentBase);
    },
    [convert, reverse]
  );

  const doReverse = useCallback(
    (val: number, isReversed: boolean, currentBase: number) => {
      return isReversed ? convert(val, currentBase) : reverse(val, currentBase);
    },
    [convert, reverse]
  );

  const handlePxChange = (val: string) => {
    setPxValue(val);
    const num = parseFloat(val);
    if (isNaN(num)) {
      setResultValue("");
      return;
    }
    setResultValue(formatNumber(doConvert(num, reversed, base), 4));
  };

  const handleResultChange = (val: string) => {
    setResultValue(val);
    const num = parseFloat(val);
    if (isNaN(num)) {
      setPxValue("");
      return;
    }
    setPxValue(formatNumber(doReverse(num, reversed, base), 4));
  };

  const handleBaseChange = (val: string) => {
    const num = parseFloat(val);
    if (isNaN(num) || num <= 0) return;
    setBase(num);
    const px = parseFloat(pxValue);
    if (!isNaN(px)) {
      setResultValue(formatNumber(doConvert(px, reversed, num), 4));
    }
  };

  const handleSwap = () => {
    setReversed(!reversed);
    const oldPx = pxValue;
    const oldResult = resultValue;
    setPxValue(oldResult);
    setResultValue(oldPx);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resultValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  };

  const tableData = useMemo(() => {
    return quickRef.map((px) => ({
      px,
      result: doConvert(px, reversed, base),
    }));
  }, [quickRef, base, reversed, doConvert]);

  return (
    <div className="tool-card space-y-6">
      {/* Converter inputs */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="w-full flex-1">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {currentFromLabel}
          </label>
          <input
            type="number"
            value={pxValue}
            onChange={(e) => handlePxChange(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder={`Enter ${currentFromLabel}`}
          />
        </div>

        <button
          onClick={handleSwap}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-500 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 sm:mt-5"
          aria-label="Swap conversion direction"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        </button>

        <div className="w-full flex-1">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {currentToLabel}
          </label>
          <div className="relative">
            <input
              type="number"
              value={resultValue}
              onChange={(e) => handleResultChange(e.target.value)}
              className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 pr-12 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder={`Result in ${currentToLabel}`}
            />
            <button
              onClick={handleCopy}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
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
        </div>
      </div>

      {/* Base value */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {baseLabel}
        </label>
        <input
          type="number"
          value={base}
          onChange={(e) => handleBaseChange(e.target.value)}
          className="mono-display w-full max-w-xs rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          step="1"
        />
      </div>

      {/* Formula */}
      <div className="rounded-lg bg-neutral-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Formula</p>
        <p className="mono-display mt-1 text-sm text-neutral-700">{formula}</p>
      </div>

      {/* Quick reference table */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Quick Reference ({baseLabel}: {base})
        </p>
        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {currentFromLabel}
                </th>
                <th className="px-4 py-2.5 text-left font-semibold text-neutral-600">
                  {currentToLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.px} className="border-b border-neutral-100 last:border-b-0">
                  <td className="mono-display px-4 py-2 text-neutral-800">
                    {formatNumber(row.px)}
                  </td>
                  <td className="mono-display px-4 py-2 text-neutral-800">
                    {formatNumber(row.result, 4)}
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
