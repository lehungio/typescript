// Solution 01
export class SimpleCipher {
  key: string;

  constructor(key?: string) {
    if (key) {
      this.key = key;
    } else {
      this.key = this.generateRandomKey();
    }
  }

  private generateRandomKey(): string {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let key = '';
    for (let i = 0; i < 100; i++) {
      key += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return key;
  }

  encode(plaintext: string): string {
    return plaintext
      .split('')
      .map((char, index) => {
        const shift = this.key.charCodeAt(index % this.key.length) - 'a'.charCodeAt(0);
        return String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0));
      })
      .join('');
  }

  decode(ciphertext: string): string {
    return ciphertext
      .split('')
      .map((char, index) => {
        const shift = this.key.charCodeAt(index % this.key.length) - 'a'.charCodeAt(0);
        return String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) - shift + 26) % 26) + 'a'.charCodeAt(0));
      })
      .join('');
  }
}

// Solutioin 02