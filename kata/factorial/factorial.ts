export function factorial(n: number): number {
  if (n === 0) { return 1 }

  let result = n;

  while (n > 1) {
    n--
    result = result * n
  }

  return result;
}
