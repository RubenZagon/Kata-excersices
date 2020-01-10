// ba#
export function cleanString(s: string) {
  let stringToArray: string[] = []
  let foundHashtag: number[] = []
  let foundEmpty: number[] = []
  let counterHastag: number = 0;

  stringToArray = s.split("");

  stringToArray.forEach((element, index) => {
    if (element === "#") {
      foundHashtag.push(index)
      counterHastag++
    }
  });

  if (foundHashtag.length !== 0) {
    foundHashtag.forEach(position => {
      stringToArray[position] = ""
      stringToArray[position - 1] = ""
    });
  }

  stringToArray.forEach((element, index) => {
    if (element === "") {
      foundEmpty.push(index)
    }
  });

  // -- Buscar la primera pposición del hueco vació, y borrar uno pa atras hasta que empty sea = a counter * 2
  /*
  // [5, 8] - [4, 5, 7, 8]
  if (foundHashtag.length < (foundEmpty.length / 2)) {
    stringToArray[foundEmpty[0] - 1] = ""
  }
*/

  /*
    while (counterHastag < foundEmpty.length) {
      // Borro foundEmpy
      foundEmpty = []
      console.log('ESTOY ENTROO');
  
      stringToArray.forEach((element, index) => {
        if (element === "") {
          foundEmpty.push(index)
        }
      })
    }
  */

  /*
    for (let i = counterHastag; i < foundEmpty.length; i++) {
        let findIndexFirstEmpty = stringToArray.indexOf("");
        console.log(findIndexFirstEmpty);
  
        stringToArray[findIndexFirstEmpty - 1] = ""
      }
  */

  const result = stringToArray.join("")

  console.log(`
  Counter : ${counterHastag}

  longitud Hastag ${foundHashtag.length} - Empty ${foundEmpty.length}

  Hastags encontrados [${foundHashtag}]
  
  ENTRADA:
  [${s}]

  SALIDA:
  `, stringToArray);

  return result
}