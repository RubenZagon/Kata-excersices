import { addLetters } from "../AlphabeticalAddition";

describe('Basicos', () => {
  test('Debe devolver "z" si le entra solo una z', () => {
    expect(addLetters("z")).toBe("z")
  });

  test('Si no tiene nada me tiene que devolver "z"', () => {
    expect(addLetters()).toBe("z")
  });

  test('Si le meto una letra  solo, me ha de devolver la misma letra', () => {
    expect(addLetters("c")).toBe("c")
  });
});

describe('Complicados', () => {
  test('Me tiene que dar la continuación de "b" si le meto "a" y "b"', () => {
    expect(addLetters("a", "b")).toBe("c")
  });

  test('Me tiene que dar "f" al poner "a, b y c" porque la suma da 6 y "f" ocupa esa posición', () => {
    expect(addLetters("a", "b", "c")).toBe("f")
  });
});

describe('MODE INFERNO OVERFLOW', () => {
  test('"z y a" al hacer overflow da 28, por lo que se resetea la cuenta y ha de darme 1 que es "a"', () => {
    expect(addLetters("z", "a")).toBe("a")
  });
});