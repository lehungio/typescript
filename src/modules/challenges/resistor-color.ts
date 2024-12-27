export const COLORS = [
  `black`,
  `brown`,
  `red`,
  `orange`,
  `yellow`,
  `green`,
  `blue`,
  `violet`,
  `grey`,
  `white`,
] as const;

export type Color = typeof COLORS[number];

export function colorCode(color: Color): number {
  return COLORS.indexOf(color);
}
