export function trafficLights(road: string, n: number): string[] {
  //"C...R............G......"

  for (let cicle = 0; cicle <= n; cicle++) {

    const roadToArray: string[] = road.split("");

    let CarPosition: number = roadToArray.indexOf("C");
    const RedPosition: number = roadToArray.indexOf("R");
    const AmbarPosition: number = roadToArray.indexOf("O");
    const GreenPosition: number = roadToArray.indexOf("G");


    if (cicle === 5) {
      roadToArray[RedPosition] = "G";
    }

    if (cicle === 6) {
      roadToArray[GreenPosition] = "O";
    }

    if (cicle === 7) {
      roadToArray[AmbarPosition] = "R";
    }

    const roadToString: string = roadToArray.join("");

    console.log('CICLO ====> ', cicle);
    console.log(roadToString);
    // console.log(`
    // Red = ${RedPosition}
    // Ambar = ${AmbarPosition}
    // Green = ${GreenPosition}
    // ` );

  }

  return [''];
}

type TrafficsLightsOptions = "G" | "O" | "R"

function handleTrafficsLight(cicle: number, cicleToChange: number, roadToArray: [], positionLight: number, lightToChange: TrafficsLightsOptions) {

}