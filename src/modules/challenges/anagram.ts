export class Anagram {
  private word: string;

  constructor(word: string) {
    this.word = word.toLowerCase();
  }

  matches(...candidates: string[]): string[] {
    const sortedWord = this.sortString(this.word);
    return candidates.filter((candidate) => {
      const lowerCandidate = candidate.toLowerCase();
      return (
        lowerCandidate !== this.word &&
        this.sortString(lowerCandidate) === sortedWord
      );
    });
  }

  private sortString(str: string): string {
    return str.toLowerCase().split("").sort().join("");
  }
}
