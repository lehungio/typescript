export function count(text: string): Map<string, number> {
  const wordCounts = new Map<string, number>()
  const words = text
    .toLowerCase()
    .match(/\b[\w']+\b/g) // Match words including those with apostrophes

  if (words) {
    for (const word of words) {
      wordCounts.set(word, (wordCounts.get(word) || 0) + 1)
    }
  }

  return wordCounts
}