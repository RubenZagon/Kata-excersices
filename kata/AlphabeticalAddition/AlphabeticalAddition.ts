const lettersAlphabetic = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i' ,'j' ,'k', 'l' , 'm' , 'n' , 'ñ' , 'o' , 'p', 'q', 'r', 's', 't', 'u' , 'v', 'w', 'x', 'y', 'z']

export function addLetters(...letters: string[]) {
  
  if (letters.length === 0 || letters[0] ==="z"){return 'z'}
  
  return lettersAlphabetic[letters.length].toLowerCase() 
}

function convertToNumbers(arrayLetters:string[], letters:string[]) {
  let newArray:number[] = []
  let found = []

  arrayLetters.forEach((value:string, index: number) => {
    found.push(arrayLetters.find((element, index) => {
      letters[index] == element 
      return index; //toy por aqui
    }))
    newArray.push(index)
  });
  
  console.log('Entontré esto ==>', found);
  
  return newArray
}


console.log(convertToNumbers(lettersAlphabetic, ['a','b', 'c']));