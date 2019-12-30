import {addLetters} from "../AlphabeticalAddition";

describe('Kata AlphabeticalAddition', () => {

    test('If not have any letters the function should return "z"', () => {
      expect(addLetters()).toStrictEqual('z');
    });

    test('should add the next letter on aphabetic and always in lowerCase', () => {
      expect(addLetters('a', 'B','c')).toStrictEqual('d');
    });

    test('Enter uppercase and must work', () => {
      expect(addLetters('a', 'B')).toStrictEqual('c');
    });

});
