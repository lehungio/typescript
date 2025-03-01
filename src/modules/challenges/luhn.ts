export function valid(input: string): boolean {
  // Remove all spaces from the input
  const sanitizedInput = input.replace(/\s+/g, "");

  // Check if the sanitized input contains only digits
  if (!/^\d+$/.test(sanitizedInput)) {
    return false;
  }

  // If the input is a single digit, it cannot be valid
  if (sanitizedInput.length <= 1) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;

  // Iterate over the digits from right to left
  for (let i = sanitizedInput.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitizedInput[i], 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  // The sum must be divisible by 10 for the number to be valid
  return sum % 10 === 0;
}
