export function addLetters(...letters: string[]) {
  const arrayLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let add = 0;

  if (letters.length === 0) { return 'z' }
  if (letters.length === 1) { return letters[0] }

  add = addFunction(add, letters, arrayLetters);

  return arrayLetters[add - 1]

}

function addFunction(add: number, letters: string[], arrayLetters: string[]) {
  add = findMatchLetters(letters, arrayLetters, add);
  add = reducerOverflow(add);
  return add;
}

function reducerOverflow(add: number) {
  while (add > 26) {
    add -= 26;
  }
  return add;
}

function findMatchLetters(letters: string[], arrayLetters: string[], add: number) {
  letters.forEach(elementLetters => {
    arrayLetters.forEach((elementArrayLetters, index) => {
      if (elementLetters === elementArrayLetters) {
        add += index + 1;
      }
    });
  });
  return add;
}
