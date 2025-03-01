export function toRoman(num: number): string {
  const romanNumerals: { [key: number]: string } = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let result = "";

  for (let [value, numeral] of Object.entries(romanNumerals).sort(
    (a, b) => parseInt(b[0]) - parseInt(a[0])
  )) {
    while (num >= parseInt(value)) {
      result += numeral;
      num -= parseInt(value);
    }
  }

  return result;
}
