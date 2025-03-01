export class ComplexNumber {
  readonly real: number;
  readonly imag: number;

  constructor(real: number, imaginary: number) {
    this.real = real;
    this.imag = imaginary;
  }

  add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real + other.real, this.imag + other.imag);
  }

  sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real - other.real, this.imag - other.imag);
  }

  div(other: ComplexNumber): ComplexNumber {
    const [a, b, c, d] = [this.real, this.imag, other.real, other.imag];
    const denominator = c ** 2 + d ** 2;
    const real = (a * c + b * d) / denominator;
    const imag = (b * c - a * d) / denominator;
    return new ComplexNumber(real, imag);
  }

  mul(other: ComplexNumber): ComplexNumber {
    const [a, b, c, d] = [this.real, this.imag, other.real, other.imag];
    const real = a * c - b * d;
    const imag = b * c + a * d;
    return new ComplexNumber(real, imag);
  }

  get abs(): number {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  get conj(): ComplexNumber {
    return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
  }

  get exp(): ComplexNumber {
    const expReal = Math.exp(this.real);
    const real = expReal * Math.cos(this.imag);
    const imag = expReal * Math.sin(this.imag);
    return new ComplexNumber(real, imag);
  }
}
