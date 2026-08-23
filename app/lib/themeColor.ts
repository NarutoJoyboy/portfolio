/**
 * Reads a hex CSS custom property off :root and returns it as "r, g, b" for
 * interpolation into rgba(). Keeps the palette in globals.css as the single
 * source of truth instead of duplicating hex values in canvas code.
 */
export function rgbFromCssVar(name: string, fallback: string): string {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  const hex = raw.replace("#", "");
  if (hex.length !== 6) return fallback;
  const n = Number.parseInt(hex, 16);
  if (Number.isNaN(n)) return fallback;
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}
