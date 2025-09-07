export class Squares {
  constructor(private n: number) {}

  // Returns the square of the sum of numbers 1 through n.
  get squareOfSum(): number {
    const sum = (this.n * (this.n + 1)) / 2;
    return sum * sum;
  }

  // Returns the sum of the squares of numbers 1 through n.
  get sumOfSquares(): number {
    return (this.n * (this.n + 1) * (2 * this.n + 1)) / 6;
  }

  // Returns the difference between the square of the sum and the sum of the squares.
  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}