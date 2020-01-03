![CodeWars](https://www.qualified.io/shared/images/codewars-black-large-24a9d355.png)

Exercise on :point_right:  [Codewars](https://www.codewars.com/kata/58880c6e79a0a3e459000004/train/typescript)  

## Kata Alphabetical-Addition

### Instructions:

Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

### Notes:
  - Letters will always be lowercase.
  - Letters can overflow (see second to last example of the description)
  - If no letters are given, the function should return 'z'



### Examples:
```
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
```