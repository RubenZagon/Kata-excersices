/*
https://www.codewars.com/kata/58845748bd5733f1b300001f/train/javascript

## Task

You are given two numbers `a` and `b` where `0 ≤ a ≤ b`. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

## Example

For a = 2 and b = 7, the output should be `11`

Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.

## Input/Output

    `[input]` integer `a`

    Constraints: 0 ≤ a ≤ b.

    `[input]` integer `b`

    Constraints: a ≤ b ≤ 100.

    `[output]` an integer
*/

// 1011001 -> 1001101

const reducer = (accumulator, currentValue) => accumulator + currentValue;

export function binary(a) {
  let binary = [],
      actualCociente,dividendo = a, actualResto

  while (dividendo !== 0){
    actualCociente = dividendo/2
    actualResto = dividendo%2
    if (dividendo % 2 === 1){
      dividendo = actualCociente - 0.5
    } else {
      dividendo = actualCociente
    }
    binary.unshift(actualResto)
  }
  return binary.reduce(reducer)
}

function crearSecuencia (a, b){
  let secuencia = [a]

  for (let i = 0; a < b; i++){
    a = a + 1
    secuencia.push(a)
  }
  return secuencia
}

console.log(crearSecuencia(2, 4).forEach(function(element){
    console.log( binary(element) )
  }))





