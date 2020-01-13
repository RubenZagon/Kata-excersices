export function cleanString(s: string) {
  let stringToArray: string[] = s.split("");

  for (let i = 0; i < s.length; i++) {
    let indexOfFirstHashtag = stringToArray.indexOf("#");

    stringToArray[indexOfFirstHashtag] = "";
    stringToArray[indexOfFirstHashtag - 1] = "";

    stringToArray = stringToArray.filter(element => {
      if (element !== "") {
        return element
      }
    })
  }

  const result: string = stringToArray.join("")

  return result
}

/**
 * SOLUCIÓN OPTIMIZADA
 *

export function cleanString(s: string) {
  return Array.from(s).reduce((a, b) => b == '#'? a.slice(0,-1) : a.concat(b), '')
}

 */