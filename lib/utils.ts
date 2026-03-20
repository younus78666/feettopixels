/**
 * Merge class names. Filters out falsy values and joins with a space.
 * Intentionally dependency-free (no clsx / tailwind-merge).
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a number with locale-aware separators.
 * Defaults to 2 decimal places; strips trailing zeros.
 */
export function formatNumber(
  value: number,
  decimals: number = 2,
  locale: string = "en-US",
): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Format a number for editable form fields.
 * Keeps decimal precision but avoids locale separators that break number inputs.
 */
export function formatEditableNumber(
  value: number,
  decimals: number = 2,
): string {
  if (!Number.isFinite(value)) return "";
  return value.toFixed(decimals).replace(/\.?0+$/, "");
}
