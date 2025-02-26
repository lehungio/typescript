export function steps(n: number): number {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error('Only positive integers are allowed');
  }

  let count = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    count++;
  }

  return count;
}