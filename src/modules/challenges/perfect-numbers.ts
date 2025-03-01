export function classify(n: number): string {
  if (n <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  const sumOfDivisors = (num: number): number => {
    let sum = 0;
    for (let i = 1; i <= Math.floor(num / 2); i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum;
  };

  const sum = sumOfDivisors(n);

  if (sum === n) {
    return "perfect";
  } else if (sum > n) {
    return "abundant";
  } else {
    return "deficient";
  }
}
