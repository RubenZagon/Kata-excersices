interface TrafficLightProperties {
  position: number;
  state: string;
  time: number;
}

export function trafficLights(road: string, n: number): string[] {
  /**
   * VARIABLE GLOBALES en la función
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

  // indicador de que llegó al final el coche
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

    if (finallyRoad) {
      roadToArray[carPosition] = ".";
    }

    if (
      roadToArray[carPosition + 1] !== "R" && roadToArray[carPosition + 1] !== "O" &&
      cicle !== 0 &&
      finallyRoad === false
    ) {
      // Avance por "." o "G"
      roadToArray[carPosition + 1] = "C";
      roadToArray[carPosition] = ".";
    }


    // Repinte el semaforo cuando termina de pasar la "C"
    arrayTrafficLights.forEach(e => {
      if (roadToArray[e.position] === ".") {
        roadToArray[e.position] = e.state;
      }
    });

    //Volvemos a unir el array
    const roadToString: string = roadToArray.join("");



    /*  ===  LOGS de depuración ==== 
    
    arrayTrafficLights.forEach((e, i) => {
      console.log(`Semáforo ${i + 1} - [${e.position}, ${e.state}, ${e.time}]`);
    });


    console.log(`
    CICLO ${cicle}
    
    Coche:
    Anterior elemento ${roadToArray[carPosition - 1]}
    Posicion actual ${carPosition}
    Siguiente elemento ${roadToArray[carPosition + 1]}
    Finaliza carretera ${finallyRoad}
    
    ESTADO ACTUAL:
    ${roadToString}
    `);
*/

    sim.push(roadToString);
  }

  return sim;
}



/**
 * Otra opción más optimizada por B1ts
 *
 *
 *

class TrafficUnit {
  display: string;
  iteration = 0;
  colors = 'RGO';
  intervals = [5, 5, 1];
  constructor(type: string) {
    this.display = type;
  }
  iterate(): void {
    if (this.display === '.') return;  // No need to do anything with road pieces
    this.iteration++;
    if (this.iteration === this.intervals[this.colors.indexOf(this.display)]) {
      this.iteration = 0;
      this.display = this.display === 'R' ? 'G' : this.display === 'G' ? 'O' : 'R';
    }
  }
}

export function trafficLights(road: string, n: number) {
  const result = [road];
  const traffic = [...road].map(u => new TrafficUnit(u === 'C' ? '.' : u));
  let carPos = 0;
  for (let i = 0; i < n; i++) {
    for (let unit of traffic) unit.iterate();
    carPos += carPos >= road.length - 1 || ".G".includes(traffic[carPos + 1].display) ? 1 : 0;
    result.push(traffic.map((u, i) => i === carPos ? 'C' : u.display).join(''));
  }
  return result;
}


 *
 */
