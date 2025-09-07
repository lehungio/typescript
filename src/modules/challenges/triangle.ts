export class Triangle {
  private side1: number;
  private side2: number;
  private side3: number;

  constructor(side1: number, side2: number, side3: number) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  get isEquilateral(): boolean {
    return this.isValidTriangle() && this.side1 === this.side2 && this.side2 === this.side3;
  }

  get isIsosceles(): boolean {
    return this.isValidTriangle() && (
      this.side1 === this.side2 ||
      this.side2 === this.side3 ||
      this.side1 === this.side3
    );
  }

  get isScalene(): boolean {
    return this.isValidTriangle() && this.side1 !== this.side2 && this.side2 !== this.side3 && this.side1 !== this.side3;
  }

  private isValidTriangle(): boolean {
    return (
      this.side1 > 0 &&
      this.side2 > 0 &&
      this.side3 > 0 &&
      this.side1 + this.side2 > this.side3 &&
      this.side2 + this.side3 > this.side1 &&
      this.side1 + this.side3 > this.side2
    );
  }
}