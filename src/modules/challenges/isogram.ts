export function isIsogram(str: string): boolean {
  // Normalize the string: convert to lowercase and remove non-letter characters
  const normalizedStr = str.toLowerCase().replace(/[^a-z]/g, "");

  // Create a set to track unique characters
  const charSet = new Set();

  // Iterate over each character in the normalized string
  for (const char of normalizedStr) {
    // If the character is already in the set, it's not an isogram
    if (charSet.has(char)) {
      return false;
    }
    // Add the character to the set
    charSet.add(char);
  }

  // If no duplicates were found, it's an isogram
  return true;
}
