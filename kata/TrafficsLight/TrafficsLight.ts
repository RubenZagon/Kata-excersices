export function trafficLights(road: string, n: number): string[] {
  /**
   * VARIABLE GLOBALES
   */

  let sim: string[] = [];

  // Separamos en Array para poder manipular el string
  let roadToArray: string[] = road.split("");

  //Buscamos la posición de los semaforos
  const foundTrafficLights: number[] = [];
  let greenPosition;

  for (let i = 0; i < roadToArray.length; i++) {
    if (roadToArray[i] === "G" || roadToArray[i] === "R") {
      foundTrafficLights.push(i);
    }
  }

  // Tiempos de semaforos
  const initialTimeGR: number = 5;
  const initialTimeO: number = 1;

  let timeGreen = initialTimeGR,
    timeOrange = initialTimeO,
    timeRed = initialTimeGR;
  let durationToReprint = 2;

  /**
   * PROGRAMA
   */

  // Loop del programa
  for (let cicle = 0; cicle < n; cicle++) {
    // Cambio luz semaforos
    if (cicle !== 0) {
      roadToArray.forEach((element, position) => {
        // Cambio a Red
        if (element === "O") {
          timeOrange--;
          if (timeOrange === 0) {
            roadToArray[position] = "R";
            timeOrange = initialTimeO;
          }
        }

        // Cambio a Orange
        if (element === "G") {
          timeGreen--;
          if (timeGreen === 0) {
            roadToArray[position] = "O";
            timeGreen = initialTimeGR;
          }
        }

        // Cambio a Green
        if (element === "R") {
          timeRed--;
          if (timeRed === 0) {
            roadToArray[position] = "G";
            timeRed = initialTimeGR;
          }
        }
      });
    }

    // Avance del coche
    const carPosition = roadToArray.lastIndexOf("C");
    if (roadToArray[carPosition + 1] !== "R" && cicle !== 0) {
      // Avance por "."
      if (roadToArray[carPosition + 1] === ".") {
        roadToArray[carPosition + 1] = "C";
        roadToArray[carPosition] = ".";
      }
      // Se pone en verde "G"
      if (roadToArray[carPosition + 1] === "G") {
        roadToArray[carPosition + 1] = "C";
        roadToArray[carPosition] = ".";
      }
    }

    if (roadToArray.lastIndexOf("G") === -1) {
      durationToReprint--;
      if (durationToReprint === 0) {
        roadToArray[carPosition] = "G";
      }
    }
    greenPosition = roadToArray.lastIndexOf("G");

    //Volvemos a unir el array
    const roadToString: string = roadToArray.join("");

    /*
    console.log(`
    CICLO ${cicle}

    Semáforos:
      Tiempos: 
        Green ${timeGreen}
        Orange ${timeOrange}
        Red ${timeRed}
      Posicion  [${foundTrafficLights}]
      posición del verde ${greenPosition}

    Coche:
    Posicion actual ${carPosition}
    Siguiente elemento ${roadToArray[carPosition + 1]}

    ESTADO ACTUAL:
    ${roadToString}
    `);
    */

    sim.push(roadToString);
  }

  return sim;
}

/**
 * - Si la siguiente posición es un ".", entonces "C" avanza una posición en el Array, si no, no avanza.
 * - Si la siguiente es una "G", sustituyela por una "C"
 * - Encontrar las posiciones de los semáforos, donde van a estar siempre
 * - Rojo y Verde deben durar 5 iteraciones en el FOR, luego cambiar. Y Orange 1 tiempo de iteración
 */
