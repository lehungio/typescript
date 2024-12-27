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

export function resistorColorTrioDecoder([band1, band2, band3]: Color[]): string {
  let colorValue =
    (resitorColor.indexOf(band1) * 10 + resitorColor.indexOf(band2)) *
    10 ** resitorColor.indexOf(band3);

  let unit = "ohms";

  if (colorValue >= 1000) {
    unit = "kiloohms";
    colorValue = colorValue / 1000;
  }

  return `${colorValue} ${unit}`;
}