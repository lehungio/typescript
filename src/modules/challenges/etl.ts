export function transform(oldSystem: { [key: number]: string[] }): { [key: string]: number } {
  const newSystem: { [key: string]: number } = {};
  for (const [points, letters] of Object.entries(oldSystem)) {
      for (const letter of letters) {
          newSystem[letter.toLowerCase()] = parseInt(points, 10);
      }
  }
  return newSystem;
}