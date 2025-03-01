export class Crypto {
  private input: string;

  constructor(input: string) {
    this.input = input;
  }

  get normalizedText(): string {
    return this.input.replace(/[\s\W]/g, "").toLowerCase();
  }

  get size(): { column: number; row: number } {
    const length = this.normalizedText.length;
    const columnSize = Math.ceil(Math.sqrt(length));
    const rowSize = Math.ceil(length / columnSize);

    return {
      column: columnSize,
      row: rowSize,
    };
  }

  get rectangle(): string[] {
    const { column, row } = this.size;
    const result: string[] = [];

    for (let i = 0; i < row; i++) {
      const indexStart = i * column;
      const indexEnd = Math.min(
        indexStart + column,
        this.normalizedText.length
      );
      const segment = this.normalizedText.substring(indexStart, indexEnd);
      result.push(segment.padEnd(column));
    }

    return result;
  }

  get ciphertext(): string {
    const { column } = this.size;
    const codedRectangle: string[] = [];

    for (let i = 0; i < column; i++) {
      const word = this.rectangle.map((row) => row[i] || "").join("");
      codedRectangle.push(word);
    }

    return codedRectangle.join(" ");
  }
}
