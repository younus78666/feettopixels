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
