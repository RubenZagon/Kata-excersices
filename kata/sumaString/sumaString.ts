/**
 * GitHub de la Kata
 * https://github.com/xpeppers/string-calculator-kata
 * 
 * 
 */

// "" -> 0
// "1" -> 1
// "3" -> 3
// "1,2" ->3
// "3,5" -> 8




const existDelimiter = (string) => {
  return (string.startsWith('//')) && (string.startsWith('\n', 3));
}

const getDelimiter = (string) => {
  if (existDelimiter(string)) {
    return string.substring(2, 3);
  } else {
    return ",";
  }
}

//Funcion guardar numeros negatigos en un array.
const saveNegativeNumbers = (string) => {

  let splitString = string.split(delimiter);
  let negatNumber = [];

  for (let i = 0; i < splitString.length; i++) {
    let passElementToNumber = parseInt(splitString[i]);
    if (!isNaN(passElementToNumber)) {
      if (passElementToNumber < 0) {
        negatNumber.push(passElementToNumber);
      }
    }
  }
  return negatNumber;
}


const generateErrorForNegativeNumbers = (string) => {
  throw new Error('Negativos no están permitidos: ' + saveNegativeNumbers(string));
}

const splitStringToArray = (string, delimiter) => {
  return string.split(delimiter);
}

let passElementToNumber = (string, delimiter, i) => {

}

// Método sumar
const addNumbers  = (string, delimiter) => {
  let add = 0;
  let splitText = splitStringToArray(string, delimiter);

  //for (i = 0; i < splitString.length; i++) {
  for (let i = 0; i < splitText.length; i++) {

    let passElementToNumber = parseInt(splitText[i]);

    if (!isNaN(passElementToNumber)) {
      if (passElementToNumber > 0) {
        if (passElementToNumber < 1001) {
          add = add + passElementToNumber;
        }
      }
      else {
        generateErrorForNegativeNumbers(string);
      }
    }
  }
  return add;
}


const verify = (string, delimiter) => {
  if (string == "") {
    return 0;
  }

  if (!string.includes(delimiter)) {
    return string;
  } else {
    return addNumbers(string, delimiter);
  }
}




const textToCalculate = "//.\n3.3.6.1000.5.2000"; /* "//[delimiter]\n[numbers...]"  */
const delimiter = getDelimiter(textToCalculate);

console.log(verify(textToCalculate, delimiter));

module.exports = {
  addNumbers,
  verify
}

