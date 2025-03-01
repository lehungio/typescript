export function nucleotideCounts(strand: string): Record<string, number> {
  const counts = { A: 0, C: 0, G: 0, T: 0 };

  for (const nucleotide of strand) {
    if (nucleotide in counts) {
      counts[nucleotide as keyof typeof counts]++;
    } else {
      throw new Error("Invalid nucleotide in strand");
    }
  }

  return counts;
}
