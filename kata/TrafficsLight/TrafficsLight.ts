interface TrafficLightProperties {
  position: number;
  state: string;
  time: number;
}

export function trafficLights(road: string, n: number): string[] {
  /**
   * VARIABLE GLOBALES
   */

  let sim: string[] = [];

  // Separamos en Array para poder manipular el string
  let roadToArray: string[] = road.split("");

  //Buscamos la posición de los semaforos
  let arrayTrafficLights: TrafficLightProperties[] = [];

  for (let i = 0; i < roadToArray.length; i++) {
    if (roadToArray[i] === "G" || roadToArray[i] === "R") {
      arrayTrafficLights.push({ position: i, state: roadToArray[i], time: 5 });
    }
  }

  // Tiempos de semaforos
  const initialTimeGR: number = 5;
  const initialTimeO: number = 1;

  // indicador de que llegó al final
  let finallyRoad: boolean = false;

  /**
   * PROGRAMA
   */

  // Loop del programa
  for (let cicle = 0; cicle <= n; cicle++) {
    // Cambio luz semaforos

    if (cicle !== 0) {
      arrayTrafficLights.forEach((e, i) => {
        e.time--;

        if (roadToArray[e.position + 1] === "C") {
          roadToArray[e.position] = "G";
        }

        if (e.time === 0) {
          switch (e.state) {
            case "R":
              e.state = "G";
              e.time = initialTimeGR;
              break;
            case "G":
              e.state = "O";
              e.time = initialTimeO;
              break;
            default:
              e.state = "R";
              e.time = initialTimeGR;
          }
        }

        // Pintar los semáforos en la carretera
        if (roadToArray[e.position] !== "C") {
          roadToArray[e.position] = e.state;
        }
      });
    }

    // Avance del coche
    const carPosition = roadToArray.lastIndexOf("C");

    if (roadToArray[carPosition + 1] === undefined) {
      finallyRoad = true;
    }

    if (
      roadToArray[carPosition + 1] !== "R" &&
      cicle !== 0 &&
      finallyRoad === false
    ) {
      // Avance por "." o "G"
      roadToArray[carPosition + 1] = "C";
      roadToArray[carPosition] = ".";
    }

    // Si el último es un semaforo entonces que lo pinte
    if (
      roadToArray[roadToArray.length - 1] !== "C" &&
      roadToArray[roadToArray.length - 1] !== "."
    ) {
      roadToArray[roadToArray.length - 1] =
        arrayTrafficLights[arrayTrafficLights.length - 1].state;
    } else {
      roadToArray[carPosition] = ".";
    }

    // Repinte el semaforo cuando termina de pasar la "C"
    arrayTrafficLights.forEach(e => {
      if (roadToArray[e.position] === ".") {
        roadToArray[e.position] = e.state;
      }
    });

    /*
    // Llega al final del Array
    if (carPosition === roadToArray.length - 1) {
      roadToArray[carPosition] = ".";
    }*/

    //Volvemos a unir el array
    const roadToString: string = roadToArray.join("");


    arrayTrafficLights.forEach((e, i) => {
      console.log(`Semáforo ${i + 1} - [${e.position}, ${e.state}, ${e.time}]`);
    });


    console.log(`
    CICLO ${cicle}

    Coche:
    Anterior elemento ${roadToArray[carPosition - 1]}
    Posicion actual ${carPosition}
    Siguiente elemento ${roadToArray[carPosition + 1]}

    ESTADO ACTUAL:
    ${roadToString}
    `);


    sim.push(roadToString);
  }

  return sim;
}
