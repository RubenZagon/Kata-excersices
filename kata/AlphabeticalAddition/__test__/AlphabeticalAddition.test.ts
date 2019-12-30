import {addLetters} from "../AlphabeticalAddition";

describe('Kata AlphabeticalAddition', () => {
    test('should be lowercase always the letters', () => {
        expect(addLetters('a', 'B','c')).toStrictEqual(['a', 'b', 'c']);
    });
});
