/**
 * En CodeWars he tenido que suprimir el doble \\ ya que ahí no hace falta escapar el backslash
 * 
 */

export function vertMirror(strng: string) {

  // return strng.split("\n").map(s => s.split("").reverse().join("")).join("\n");

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

export function oper(fct: (s: string) => string, s: string) {
  return fct === horMirror ? horMirror(s) : vertMirror(s)
}
