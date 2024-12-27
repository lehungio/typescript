const resitorColor = [
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
] as const; // need "as const" for type Color

export type Color = typeof resitorColor[number];

export function resistorColorDecoder([band1, band2]: Color[]): number {
  return resitorColor.indexOf(band1) * 10 + resitorColor.indexOf(band2);
}