export function parse(phrase: string): string {
  const words = phrase.match(/[A-Z]+[a-z]*|[a-z]+/g) ?? [];
  const acronym = words.map((word) => word[0].toUpperCase()).join("");
  return acronym;
}
