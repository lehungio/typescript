type TripletArray = [number, number, number];

type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

class Triplet {
  private a: number;
  private b: number;
  private c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray(): TripletArray {
    return [this.a, this.b, this.c];
  }

  static findTriplets(
    sum: number,
    minFactor: number = 1,
    maxFactor: number = sum
  ): Triplet[] {
    const result: Triplet[] = [];

    for (let a = minFactor; a <= maxFactor; a++) {
      for (let b = a + 1; b <= maxFactor; b++) {
        const c = sum - a - b;
        if (c > b && c <= maxFactor && a * a + b * b === c * c) {
          result.push(new Triplet(a, b, c));
        }
      }
    }

    return result;
  }
}

export function triplets({
  minFactor = 1,
  maxFactor,
  sum,
}: Options): Triplet[] {
  if (maxFactor === undefined) {
    maxFactor = sum;
  }
  return Triplet.findTriplets(sum, minFactor, maxFactor);
}

export { Triplet };
