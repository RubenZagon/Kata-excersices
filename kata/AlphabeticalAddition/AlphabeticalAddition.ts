export function addLetters(...letters: string[]) {
  const lettersLower = letters.map(element => {
      return element.toLowerCase()
  });
  
  return lettersLower
  
}