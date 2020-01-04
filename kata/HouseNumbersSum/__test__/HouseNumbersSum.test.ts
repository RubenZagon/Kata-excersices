import { houseNumbersSum } from "../HouseNumbersSum";

describe('Basic Test', () => {
  test('Should stop when find 0 on the sum array', () => {
    expect(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2])).toBe(11)
  });

  test('Second test', () => {
    expect(houseNumbersSum([4, 2, 1, 6, 0])).toBe(13)
  });

  test('Otro test', () => {
    expect(houseNumbersSum([4, 1, 2, 3, 0, 10, 2])).toBe(10)
  });

  test('Should be 0 if the first number is 0', () => {
    expect(houseNumbersSum([0, 1, 2, 3, 4, 5])).toBe(0)
  });
});