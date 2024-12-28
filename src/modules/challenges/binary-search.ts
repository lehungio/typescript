// export function find(haystack: unknown, needle: unknown): number | never {
//   throw new Error('Remove this statement and implement this function')
// }

export function find(sortedArray: number[], target: number): string | number {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (sortedArray[middle] === target) {
      return middle;
    } else if (sortedArray[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  // return -1;
  // return "Value not in array";
  throw new Error("Value not in array");
}