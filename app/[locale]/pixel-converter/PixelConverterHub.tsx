"use client";

import { useCallback, useState } from "react";
import { cn, formatEditableNumber } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { getToolUi, getUnitLabel } from "@/lib/tool-ui";

type UnitKey = "px" | "in" | "cm" | "mm" | "ft";

const unitKeys: UnitKey[] = ["px", "in", "cm", "mm", "ft"];

function convertToPixels(value: number, unit: UnitKey, dpi: number): number {
  switch (unit) {
    case "px":
      return value;
    case "in":
      return value * dpi;
    case "cm":
      return (value * dpi) / 2.54;
    case "mm":
      return (value * dpi) / 25.4;
    case "ft":
      return value * 12 * dpi;
  }
}

function convertFromPixels(px: number, unit: UnitKey, dpi: number): number {
  switch (unit) {
    case "px":
      return px;
    case "in":
      return px / dpi;
    case "cm":
      return (px * 2.54) / dpi;
    case "mm":
      return (px * 25.4) / dpi;
    case "ft":
      return px / (dpi * 12);
  }
}

export function PixelConverterHub({ locale = "en" }: { locale?: Locale }) {
  const dict = getDictionary(locale);
  const toolUi = getToolUi(locale);
  const units = unitKeys.map((key) => ({
    key,
    label: getUnitLabel(locale, key),
  }));
  const [fromUnit, setFromUnit] = useState<UnitKey>("px");
  const [toUnit, setToUnit] = useState<UnitKey>("in");
  const [fromValue, setFromValue] = useState("100");
  const [toValue, setToValue] = useState(() => {
    const px = convertToPixels(100, "px", 96);
    return formatEditableNumber(convertFromPixels(px, "in", 96), 4);
  });
  const [dpi, setDpi] = useState(96);
  const [lastEditedSide, setLastEditedSide] = useState<"from" | "to">("from");
  const dpiPresets = [72, 96, 150, 300];

  const recalculate = useCallback(
    (val: string, from: UnitKey, to: UnitKey, currentDpi: number) => {
      const num = parseFloat(val);
      if (isNaN(num)) return "";
      const px = convertToPixels(num, from, currentDpi);
      return formatEditableNumber(convertFromPixels(px, to, currentDpi), 4);
    },
    [],
  );

  const handleFromChange = (val: string) => {
    setLastEditedSide("from");
    setFromValue(val);
    setToValue(recalculate(val, fromUnit, toUnit, dpi));
  };

  const handleToChange = (val: string) => {
    setLastEditedSide("to");
    setToValue(val);
    setFromValue(recalculate(val, toUnit, fromUnit, dpi));
  };

  const handleFromUnitChange = (unit: UnitKey) => {
    setFromUnit(unit);
    if (lastEditedSide === "from") {
      setToValue(recalculate(fromValue, unit, toUnit, dpi));
      return;
    }

    setFromValue(recalculate(toValue, toUnit, unit, dpi));
  };

  const handleToUnitChange = (unit: UnitKey) => {
    setToUnit(unit);
    if (lastEditedSide === "from") {
      setToValue(recalculate(fromValue, fromUnit, unit, dpi));
      return;
    }

    setFromValue(recalculate(toValue, unit, fromUnit, dpi));
  };

  const handleDpiChange = (newDpi: number) => {
    setDpi(newDpi);
    if (lastEditedSide === "from") {
      setToValue(recalculate(fromValue, fromUnit, toUnit, newDpi));
      return;
    }

    setFromValue(recalculate(toValue, toUnit, fromUnit, newDpi));
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
    setLastEditedSide("from");
  };

  return (
    <div className="tool-card space-y-5">
      <h2 className="text-lg font-semibold text-neutral-900">
        {toolUi.pixelConverterHub.quickConverter}
      </h2>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="w-full flex-1 space-y-2">
          <select
            value={fromUnit}
            onChange={(event) =>
              handleFromUnitChange(event.target.value as UnitKey)
            }
            className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          >
            {units.map((unit) => (
              <option key={unit.key} value={unit.key}>
                {unit.label}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={fromValue}
            onChange={(event) => handleFromChange(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder={dict.tool.enterValue}
          />
        </div>

        <button
          onClick={handleSwap}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-500 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 sm:mt-6"
          aria-label={toolUi.pixelConverterHub.swapUnits}
          title={toolUi.pixelConverterHub.swapUnits}
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

        <div className="w-full flex-1 space-y-2">
          <select
            value={toUnit}
            onChange={(event) => handleToUnitChange(event.target.value as UnitKey)}
            className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          >
            {units.map((unit) => (
              <option key={unit.key} value={unit.key}>
                {unit.label}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={toValue}
            onChange={(event) => handleToChange(event.target.value)}
            className="mono-display w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder={dict.tool.result}
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
                dpi === preset
                  ? "border-primary-300 bg-primary-50 text-primary-700"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300",
              )}
            >
              {preset}
            </button>
          ))}
          <input
            type="number"
            placeholder={toolUi.common.custom}
            className="mono-display w-24 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            onChange={(event) => {
              const value = parseInt(event.target.value, 10);
              if (!isNaN(value) && value > 0) {
                handleDpiChange(value);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
