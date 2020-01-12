export function cleanString(s: string) {
  let stringToArray: string[] = []
  let foundHashtag: number[] = []
  let counterOfBackSpaces: number = 0;

  stringToArray = s.split("");

  stringToArray.forEach((element, index) => {

    if (element === "#") {
      foundHashtag.push(index)

      // Busco dos # seguidos
      stringToArray[index + 1] === "#" ? counterOfBackSpaces++ : "";

      // Si el anterior al # es una letra, la borro de inmediato
      if (stringToArray[index - 1] !== "#") {
        stringToArray[index] = "";
        stringToArray[index - 1] = "";
      }
    }
  });



  // -- Buscar la primera posición del hueco vació, y borrar uno pa atras
  for (let i = 0; i < counterOfBackSpaces; i++) {
    let findIndexFirstEmpty = stringToArray.indexOf("");
    stringToArray[findIndexFirstEmpty - 1] = "";
  }


  const result = stringToArray.join("")

  /*
  console.log(`
  Counter : ${counterOfBackSpaces}
  
  longitud Hastag ${foundHashtag.length}
  
  Hastags encontrados [${foundHashtag}]
  
  ENTRADA:
  [${s}]
  
  SALIDA:
  `, stringToArray);
  */

  return result
}