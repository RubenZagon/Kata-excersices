// 1011001 -> 1001101

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function binary(a) {
  let binary = [],
      actualCociente,dividendo = a, actualResto,
      anteriorCociente, anteriorResto
  
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





