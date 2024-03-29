import { colord } from "colord";

export const hexToRgb = (
  hex?: string | null,
  alpha?: number,
  numbersOnly?: boolean
): string | null => {
  if (!hex) return null;
  const color = colord(hex).alpha(alpha === 0 ? 0 : alpha || 1);
  const { r, g, b } = color.toRgb();
  if (numbersOnly) return `${r} ${g} ${b}`;
  if (alpha) {
    return `rgba(${r} ${g} ${b} / ${alpha}%)`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};
