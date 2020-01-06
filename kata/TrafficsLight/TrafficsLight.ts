export function trafficLights(road: string, n: number): string[] {
  //"C...R............G......"
  //"C.R..G.........G......"
  let sim: string[] = [];

  // Separamos en Array para poder manipular el string
  let roadToArray: string[] = road.split("");

  //Buscamos la posición de los semaforos
  const foundSemaforos: number[] = [];

  for (let i = 0; i < roadToArray.length; i++) {
    if (roadToArray[i] === "G" || roadToArray[i] === "R") {
      foundSemaforos.push(i);
    }
  }

  console.log("SEMAFOROS ENCONTRADOS = ", foundSemaforos);

  let times: number = 1;
  let stateOnR: boolean = false;

  const initialTimeO: number = 1;
  const initialTimeGR = 4;
  //Duración de los semaforos
  let timeGreen: number = initialTimeGR;
  let timeRed: number = initialTimeGR;
  let timeOrange: number = initialTimeO;

  for (let cicle = 0; cicle < n; cicle++) {
    //Buscamos constantemente la posición del coche
    let CarPosition: number = roadToArray.indexOf("C");

    // Avance de coche
    if (roadToArray[CarPosition + 1] !== "R") {
      roadToArray[CarPosition + 1] = "C";
      if (stateOnR === false) {
        roadToArray[CarPosition] = ".";
      }
    }

    // que repinte semaforo verde
    if (
      roadToArray[CarPosition + 1] === "R" ||
      roadToArray[CarPosition + 1] === "G"
    ) {
      console.log("ME HE CHOCADO en el ciclo = ", cicle);
      stateOnR = true;
    }

    if (stateOnR == true && roadToArray[CarPosition + 1] !== "R") {
      console.log("--times = ", times, " ++ ciclo = ", cicle);
      roadToArray[CarPosition + 1] = ".";
      if (times === 0) {
        console.log(`
        El coche está en ${CarPosition}
        El semaforo estaba en ${foundSemaforos[0 || 1]}
        
        IMPRIMO SEMAFORO - times = ${times}
        `);
        roadToArray[CarPosition + 1] = "C";
        roadToArray[CarPosition] = "G";
        roadToArray[CarPosition - 1] = ".";
        stateOnR = false;
      }
      times--;
    }

    // Cambio de luces de tráfico
    console.log(`
    CICLO ${cicle}

    timeGreen ${timeGreen}
    timeOrange ${timeOrange}
    timeRed ${timeRed}
    `);

    //  Orange
    if (roadToArray.indexOf("O") !== -1) {
      timeOrange--;
      if (timeOrange === 0) {
        roadToArray.forEach((element, index) => {
          if (cicle !== 0 && element === "O") {
            roadToArray[index] = "R";
          }
        });
      }
    } else {
      if (cicle !== 0) {
        timeOrange = initialTimeO;
      }
    }

    // Green
    if (roadToArray.indexOf("G") !== -1) {
      timeGreen--;
      if (timeGreen === 0) {
        roadToArray.forEach((element, index) => {
          if (cicle !== 0 && element === "G") {
            roadToArray[index] = "O";
          }
        });
      }
    } else {
      if (cicle !== 0) {
        timeGreen = initialTimeGR;
      }
    }

    // Red
    if (roadToArray.indexOf("R") !== -1) {
      timeRed--;
      if (timeRed === 0) {
        roadToArray.forEach((element, index) => {
          if (cicle !== 0 && element === "R") {
            roadToArray[index] = "G";
            timeGreen = initialTimeGR - 1;
          }
        });
      }
    } else {
      if (cicle !== 0) {
        timeRed = initialTimeGR;
      }
    }

    // Volvemos a unir el array
    const roadToString: string = roadToArray.join("");
    sim.push(roadToString);
  }

  sim.forEach((element, index) => {
    console.log(element, " //", index);
    sim.push(element);
  });

  return sim;
}
