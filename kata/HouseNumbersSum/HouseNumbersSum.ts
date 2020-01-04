export function houseNumbersSum(inputArray: number[]): number {

  const findZeroPosition = inputArray.indexOf(0);

  if (findZeroPosition === 0) { return 0 }

  const reducer = (acumulator: number, currentValue: number): number => acumulator + currentValue;
  const addNumbers = inputArray.slice(0, findZeroPosition).reduce(reducer);

  return addNumbers;
}


