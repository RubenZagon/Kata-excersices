export function vertMirror(strng: string) {

  let blockOfLetters: string[] = strng.split("\n");

  let vertOrderArray: string[] = blockOfLetters.map((el, index) => {
    let letters: string[] = el.split("");
    // Reordena los bloques de palabras
    let vertOrderBlock = letters.reduceRight((acc, element) => {
      return acc + element
    })

    return index !== 0 ? "n" + vertOrderBlock : vertOrderBlock;
  })

  return vertOrderArray.join("\\")
}
export function horMirror(strng: string) {
  return strng.split("\n").reverse().join("\\n");
}

// FASE FINAL 
export function oper(fct: (s: string) => string, s: string) {
}


  // console.log(`
  // Array nuevas letras ${blockOfLetters}

  // Reordenada ${vertOrderArray.join("\\\ ")}
  // `);