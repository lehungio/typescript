export function square(n: number): bigint {
  if (n < 1 || n > 64) {
    throw new Error("Square number must be between 1 and 64");
  }
  return BigInt(2 ** (n - 1));
}

export function total(): bigint {
  // The total number of grains is the sum of a geometric series
  // 2^0 + 2^1 + ... + 2^63 = 2^64 - 1
  return BigInt(2 ** 64) - BigInt(1);
}
