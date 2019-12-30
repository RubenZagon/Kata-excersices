var _AlphabeticalAddition = require("../AlphabeticalAddition.ts");

// interface KataFunction {
//   addLetters: (...letters: string[]) => string[];
// }

describe("Kata Alphabetical Addition", () => {
  it("Letters will always be lowercase", () => {
    expect(_AlphabeticalAddition.addLetters('A', 'b')).toEqual(['a', 'b'])
  })
})
