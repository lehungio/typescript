// export class Rational {
//   constructor() {
//     throw new Error('Remove this statement and implement this function')
//   }

//   add() {
//     throw new Error('Remove this statement and implement this function')
//   }

//   sub() {
//     throw new Error('Remove this statement and implement this function')
//   }

//   mul() {
//     throw new Error('Remove this statement and implement this function')
//   }

//   div() {
//     throw new Error('Remove this statement and implement this function')
//   }

//   abs() {
//     throw new Error('Remove this statement and implement this function')
//   }

//   exprational() {
//     throw new Error('Remove this statement and implement this function')
//   }

//   expreal() {
//     throw new Error('Remove this statement and implement this function')
//   }

//   reduce() {
//     throw new Error('Remove this statement and implement this function')
//   }
// }

// Solution 01: Make default - Run error
// export class Rational {
//   constructor(public numerator: number, public denominator: number) {
//     if (denominator === 0) {
//       throw new Error("Denominator cannot be zero");
//     }
//     this.abs();
//   }

//   add(other: Rational): Rational {
//     const newNumerator =
//       this.numerator * other.denominator + other.numerator * this.denominator;
//     const newDenominator = this.denominator * other.denominator;
//     return new Rational(newNumerator, newDenominator);
//   }

//   sub(other: Rational): Rational {
//     const newNumerator =
//       this.numerator * other.denominator - other.numerator * this.denominator;
//     const newDenominator = this.denominator * other.denominator;
//     return new Rational(newNumerator, newDenominator);
//   }

//   mul(other: Rational): Rational {
//     const newNumerator = this.numerator * other.numerator;
//     const newDenominator = this.denominator * other.denominator;
//     return new Rational(newNumerator, newDenominator);
//   }

//   div(other: Rational): Rational {
//     if (other.numerator === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     const newNumerator = this.numerator * other.denominator;
//     const newDenominator = this.denominator * other.numerator;
//     return new Rational(newNumerator, newDenominator);
//   }

//   abs() {
//     const gcd = (a: number, b: number): number => {
//       return b ? gcd(b, a % b) : Math.abs(a);
//     };

//     const gcdValue = gcd(this.numerator, this.denominator);
//     this.numerator /= gcdValue;
//     this.denominator /= gcdValue;

//     if (this.denominator < 0) {
//       this.numerator = -this.numerator;
//       this.denominator = -this.denominator;
//     }
//   }

//   toString(): string {
//     return `${this.numerator}/${this.denominator}`;
//   }
// }

// Solution 02: Copilot
export class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero");
    }
    const gcd = this.gcd(numerator, denominator);
    this.numerator = numerator / gcd;
    this.denominator = denominator / gcd;
    if (this.denominator < 0) {
      this.numerator = -this.numerator;
      this.denominator = -this.denominator;
    }
  }

  add(other: Rational): Rational {
    const numerator = this.numerator * other.denominator + other.numerator * this.denominator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  sub(other: Rational): Rational {
    const numerator = this.numerator * other.denominator - other.numerator * this.denominator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  mul(other: Rational): Rational {
    const numerator = this.numerator * other.numerator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  div(other: Rational): Rational {
    if (other.numerator === 0) {
      throw new Error("Cannot divide by zero");
    }
    const numerator = this.numerator * other.denominator;
    const denominator = this.denominator * other.numerator;
    return new Rational(numerator, denominator);
  }

  abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  exprational(exp: number): Rational {
    if (exp >= 0) {
      return new Rational(this.numerator ** exp, this.denominator ** exp);
    } else {
      return new Rational(this.denominator ** -exp, this.numerator ** -exp);
    }
  }

  expreal(base: number): number {
    return base ** (this.numerator / this.denominator);
  }

  reduce(): Rational {
    const gcd = this.gcd(this.numerator, this.denominator);
    return new Rational(this.numerator / gcd, this.denominator / gcd);
  }

  toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }

  private gcd(a: number, b: number): number {
    return b === 0 ? a : this.gcd(b, a % b);
  }
}