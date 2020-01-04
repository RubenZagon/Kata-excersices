import { factorial } from "../factorial";

describe('Factorial', () => {
  test('Should be 1 when input is 0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('Should be 1 when input is 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('On input 4, should be 24, becouse 4x3x2x1', () => {
    expect(factorial(4)).toBe(24);
  });

  test('Should be 5040 if the input number is 7', () => {
    expect(factorial(7)).toBe(5040)
  });
});
