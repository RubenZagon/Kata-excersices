export function vertMirror(s: string) {

  let blockOfLetters: string[] = s.split("\n");

  let vertOrderArray: string[] = blockOfLetters.map((el, index) => {
    let letters: string[] = el.split("");
    // Reordena los bloques de palabras
    let vertOrderBlock = letters.reduceRight((acc, element) => {
      return acc + element
    })

    return index !== 0 ? "n" + vertOrderBlock : vertOrderBlock;
  })

  console.log(`
  Array nuevas letras ${blockOfLetters}

  Reordenada ${vertOrderArray.join("\\\ ")}
  `);

  return vertOrderArray.join("\\\ ")
}
export function horMirror(s: string) {
  return ""
}
export function oper(fct: (s: string) => string, s: string) {
  // your code
}