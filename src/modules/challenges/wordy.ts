// Main function to process the question and return the answer
export const answer = (question = ''): number => {
  // Validate the question format and extract the relevant part
  const parts = /^((\w+( by| is|)\s*|-?\d+\s*)+)\?$/.test(question)
    ? RegExp.$1.replace(/ (by|is)/g, '_$1').split(/\s/).filter(Boolean)
    : [];

  // Validate each part of the question
  parts.forEach((part, i) => {
    if ((i & 1) === 1) { // Odd index should be a number
      if (!/^-?\d+$/.test(part)) errors.syntax();
    } else { // Even index should be an operation
      if (!/^(What_is|plus|minus|multiplied_by|divided_by)$/.test(part)) {
        if (/^-?\d+$/.test(part)) {
          errors.syntax();
        } else {
          errors.operation();
        }
      }
    }
  });

  // Check for syntax errors in the overall structure
  if (!parts.length || (parts.length & 1) === 1) errors.syntax();

  // Reduce the parts to compute the final result
  return parts.slice(1).reduce(
    ([result, op]: [number, Operation], part: string) =>
      Object.prototype.hasOwnProperty.call(operations, part)
        ? [result, part] as [number, Operation]
        : [operations[op](result, Number(part)), op] as [number, Operation],
    [0, 'What_is'] as [number, Operation]
  )[0];
};

// Supported operations
const operations = {
  What_is: (a: number, b: number) => b,
  plus: (a: number, b: number) => a + b,
  minus: (a: number, b: number) => a - b,
  multiplied_by: (a: number, b: number) => a * b,
  divided_by: (a: number, b: number) => a / b,
} as const;

// Type for operations
type Operation = keyof typeof operations;

// Error handling functions
const errors = {
  operation: () => { throw new Error('Unknown operation'); },
  syntax: () => { throw new Error('Syntax error'); }
};