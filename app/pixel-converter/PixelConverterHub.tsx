"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { formatNumber } from "@/lib/utils";

type UnitKey = "px" | "in" | "cm" | "mm" | "ft";

const units: { key: UnitKey; label: string }[] = [
  { key: "px", label: "Pixels" },
  { key: "in", label: "Inches" },
  { key: "cm", label: "Centimeters" },
  { key: "mm", label: "Millimeters" },
  { key: "ft", label: "Feet" },
];

function convertToPixels(value: number, unit: UnitKey, dpi: number): number {
  switch (unit) {
    case "px": return value;
    case "in": return value * dpi;
    case "cm": return (value * dpi) / 2.54;
    case "mm": return (value * dpi) / 25.4;
    case "ft": return value * 12 * dpi;
  }
}

function convertFromPixels(px: number, unit: UnitKey, dpi: number): number {
  switch (unit) {
    case "px": return px;
    case "in": return px / dpi;
    case "cm": return (px * 2.54) / dpi;
    case "mm": return (px * 25.4) / dpi;
    case "ft": return px / (dpi * 12);
  }
}

export function PixelConverterHub() {
  const [fromUnit, setFromUnit] = useState<UnitKey>("px");
  const [toUnit, setToUnit] = useState<UnitKey>("in");
  const [fromValue, setFromValue] = useState("100");
  const [toValue, setToValue] = useState(() => {
    const px = convertToPixels(100, "px", 96);
    return formatNumber(convertFromPixels(px, "in", 96), 4);
  });
  const [dpi, setDpi] = useState(96);
  const dpiPresets = [72, 96, 150, 300];

  const recalculate = useCallback(
    (val: string, from: UnitKey, to: UnitKey, currentDpi: number) => {
      const num = parseFloat(val);
      if (isNaN(num)) return "";
      const px = convertToPixels(num, from, currentDpi);
      return formatNumber(convertFromPixels(px, to, currentDpi), 4);
    },
    []
  );

  const handleFromChange = (val: string) => {
    setFromValue(val);
    setToValue(recalculate(val, fromUnit, toUnit, dpi));
  };

  const handleToChange = (val: string) => {
    setToValue(val);
    setFromValue(recalculate(val, toUnit, fromUnit, dpi));
  };

  const handleFromUnitChange = (unit: UnitKey) => {
    setFromUnit(unit);
    setToValue(recalculate(fromValue, unit, toUnit, dpi));
  };

  const handleToUnitChange = (unit: UnitKey) => {
    setToUnit(unit);
    setToValue(recalculate(fromValue, fromUnit, unit, dpi));
  };

  const handleDpiChange = (newDpi: number) => {
    setDpi(newDpi);
    setToValue(recalculate(fromValue, fromUnit, toUnit, newDpi));
  };

  const handleSwap = () => {
    const newFrom = toUnit;
    const newTo = fromUnit;
    setFromUnit(newFrom);
    setToUnit(newTo);
    const oldFrom = fromValue;
    const oldTo = toValue;
    setFromValue(oldTo);
    setToValue(oldFrom);
  };

  return (
    <div className="tool-card space-y-5">
      <h2 className="text-lg font-semibold text-neutral-900">
        Quick Converter
      </h2>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        {/* From */}
        <div className="flex-1 w-full space-y-2">
          <select
            value={fromUnit}
            onChange={(e) => handleFromUnitChange(e.target.value as UnitKey)}
            className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          >
            {units.map((u) => (
              <option key={u.key} value={u.key}>
                {u.label}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => handleFromChange(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="Enter value"
          />
        </div>

        {/* Swap */}
        <button
          onClick={handleSwap}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-500 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 sm:mt-6"
          aria-label="Swap units"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        </button>

        {/* To */}
        <div className="flex-1 w-full space-y-2">
          <select
            value={toUnit}
            onChange={(e) => handleToUnitChange(e.target.value as UnitKey)}
            className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          >
            {units.map((u) => (
              <option key={u.key} value={u.key}>
                {u.label}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={toValue}
            onChange={(e) => handleToChange(e.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="Result"
          />
        </div>
      </div>

      {/* DPI */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
          DPI
        </label>
        <div className="flex flex-wrap items-center gap-2">
          {dpiPresets.map((preset) => (
            <button
              key={preset}
              onClick={() => handleDpiChange(preset)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                dpi === preset
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
              )}
            >
              {preset}
            </button>
          ))}
          <input
            type="number"
            placeholder="Custom"
            className="mono-display w-24 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              if (!isNaN(v) && v > 0) handleDpiChange(v);
            }}
          />
        </div>
      </div>
    </div>
  );
}
