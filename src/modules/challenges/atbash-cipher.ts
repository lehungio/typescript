// export function encode(plainText: unknown): unknown {
//   throw new Error('Remove this statement and implement this function')
// }

// export function decode(cipherText: unknown): unknown {
//   throw new Error('Remove this statement and implement this function')
// }

// atbash-cipher.ts

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const REVERSE_ALPHABET = 'zyxwvutsrqponmlkjihgfedcba';

function atbashMap(char: string): string {
  if (/[a-zA-Z]/.test(char)) {
    const index = ALPHABET.indexOf(char.toLowerCase());
    return REVERSE_ALPHABET[index];
  }
  return char;
}

export function encode(plainText: string): string {
  let encodedText = '';
  let count = 0;

  for (const char of plainText) {
    if (/[a-zA-Z0-9]/.test(char)) {
      if (count > 0 && count % 5 === 0) {
        encodedText += ' ';
      }
      encodedText += atbashMap(char);
      count++;
    }
  }

  return encodedText;
}

export function decode(cipherText: string): string {
  let decodedText = '';

  for (const char of cipherText) {
    if (/[a-zA-Z0-9]/.test(char)) {
      decodedText += atbashMap(char);
    }
  }

  return decodedText;
}