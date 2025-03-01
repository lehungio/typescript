interface Item {
  weight: number;
  value: number;
}

interface KnapsackInput {
  maximumWeight: number;
  items: Item[];
}

export function maximumValue(input: KnapsackInput): number {
  const { maximumWeight, items } = input;
  const n = items.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    Array(maximumWeight + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    const { weight, value } = items[i - 1];
    for (let w = 0; w <= maximumWeight; w++) {
      if (weight <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][maximumWeight];
}
