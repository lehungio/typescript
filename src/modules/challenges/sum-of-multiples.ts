export function sum(factors: number[], limit: number): number {
  const multiples = new Set<number>();

  for (const factor of factors) {
    if (factor === 0) continue; // Skip zero as it doesn't contribute to the sum

    for (let multiple = factor; multiple < limit; multiple += factor) {
      multiples.add(multiple);
    }
  }

  return Array.from(multiples).reduce((acc, curr) => acc + curr, 0);
}
