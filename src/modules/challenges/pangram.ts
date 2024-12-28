export function isPangram(sentence: string): boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const normalizedSentence = sentence.toLowerCase();
  
  for (const char of alphabet) {
    if (!normalizedSentence.includes(char)) {
      return false;
    }
  }
  return true;
}