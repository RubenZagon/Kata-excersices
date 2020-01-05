export function trafficLights(road: string, n: number): string[] {
  //"C...R............G......"
  //"C.R..G.........G......"
  let sim: string[] = []

  // Separamos en Array para poder manipular el string
  let roadToArray: string[] = road.split("");

  let times = 2;

  for (let cicle = 0; cicle < n; cicle++) {

    const AmbarPosition: number = roadToArray.indexOf("O");
    const RedPosition: number = roadToArray.indexOf("R");
    const GreenPosition: number = roadToArray.indexOf("G");

    let CarPosition: number = roadToArray.indexOf("C");

    if (roadToArray[CarPosition + 1] === "R") {

    }
    // Avance de coche
    if (roadToArray[CarPosition + 1] !== "R") {
      roadToArray[CarPosition + 1] = "C";
      roadToArray[CarPosition] = ".";
    }

    let stateOnR = false;
    // que repinte semaforo verde
    if (roadToArray[CarPosition + 1] === "R") {
      console.log("ME HE CHOCADO");
      stateOnR = true;
    }

    if (stateOnR === true) {
      if (times === 0) {
        console.log('ESTO ESTA ACTIVO - times = ', times);
        roadToArray[CarPosition - 1] = "G";
        stateOnR = false;
      }
      times--
    }

    // Cambio de luces de tráfico
    if (cicle % 3 === 0 && cicle !== 0) {
      roadToArray[RedPosition] = "G";
      roadToArray[GreenPosition] = "O";
    }

    if (cicle % 1 === 0 && cicle !== 0) {
      roadToArray[AmbarPosition] = "R";
    }


    // Volvemos a unir el array
    const roadToString: string = roadToArray.join("");

    sim.push(roadToString);

  }

  sim.forEach((element, index) => {
    console.log(element, " //", index);
  });

  return [''];
}
