export class Matrix {
  private matrix: number[][];

  constructor(input: string) {
      this.matrix = input.split('\n').map(row => row.split(' ').map(Number));
  }

  get rows(): number[][] {
      return this.matrix;
  }

  get columns(): number[][] {
      return this.matrix[0].map((_, colIndex) => this.matrix.map(row => row[colIndex])); // Transpose
  }
}