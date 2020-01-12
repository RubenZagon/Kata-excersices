import { trafficLights } from "../TrafficsLight";

const result = [
  "C...R............G......",
  ".C..R............G......",
  "..C.R............G......",
  "...CR............G......",
  "...CR............G......",
  "....C............O......",
  "....GC...........R......",
  "....G.C..........R......",
  "....G..C.........R......",
  "....G...C........R......",
  "....O....C.......R......"
];

describe("Traffic Lights", () => {
  describe('Movimintos básicos del coche 🚘', () => {
    test('Avance', () => {
      expect(trafficLights("C..", 2)).toEqual(["C..", ".C.", "..C"]);
    });
    test('Recorre toda la carretera y no vuelve aparecer', () => {
      expect(trafficLights("C..", 4)).toEqual(["C..", ".C.", "..C", "...", "..."]);
    });

    test('Debería PARAR si se encuentra con un semáforo en rojo 🈲', () => {
      expect(trafficLights("C..R.", 4)).toEqual(["C..R.", ".C.R.", "..CR.", "..CR.", "..CR."]);
    });

    test('Debería AVANZAR si se encuentra con un semáforo en verde 🈯', () => {
      expect(trafficLights("C..G.", 4)).toEqual(["C..G.", ".C.G.", "..CG.", "...C.", "...GC"]);
    });

    test('Debería PARAR si se encuentra con un semáforo en ámbar 🈶', () => {
      const result: string[] = [
        "C....G..", // 0
        ".C...G..", // 1
        "..C..G..", // 2
        "...C.G..", // 3
        "....CG..", // 4
        "....CO..", // 5
        "....CR..", // 6
        "....CR.."  // 7
      ];

      expect(trafficLights("C....G..", 7)).toEqual(result);
    });

  });

  describe('Comportamiento Semáforos 🈲  🈶  🈯', () => {
    test('Debe cambiar de ROJO a VERDE  🈲  -> 🈯  ', () => {
      const result: string[] = [
        "........R..", // 0
        "C.......R..", // 1
        ".C......R..", // 2
        "..C.....R..", // 3
        "...C....R..", // 4
        "....C...G..", // 5
        ".....C..G..", // 6
        "......C.G.."  // 7
      ];

      expect(trafficLights("........R..", 7)).toEqual(result);
    });

    test('Debe cambiar de VERDE a NARANJA y este a ROJO  🈯  5 ->  🈶  1 ->  🈲  5 ', () => {
      const result: string[] = [
        "........G..", // 0
        "C.......G..", // 1
        ".C......G..", // 2
        "..C.....G..", // 3
        "...C....G..", // 4
        "....C...O..", // 5
        ".....C..R..", // 6
        "......C.R.."  // 7
      ];

      expect(trafficLights("........G..", 7)).toEqual(result);
    });

    test('Debe pasar el coche por encima del semáforo ', () => {
      const result: string[] = [
        "..G......", // 0
        "C.G......", // 1
        ".CG......", // 2
        "..C......", // 3
        "..GC.....", // 4
        "..O.C....", // 5
        "..R..C...", // 6
        "..R...C.."  // 7
      ];

      expect(trafficLights("..G......", 7)).toEqual(result);
    });

    test('Estando al final se vuelve a repintar el semáforo', () => {
      const result: string[] = [
        "..G", // 0
        "C.G", // 1
        ".CG", // 2
        "..C", // 3
        "..G", // 4
        "..O", // 5
        "..R", // 6
        "..R"  // 7
      ];

      expect(trafficLights("..G", 7)).toEqual(result);

      const resultTwoTrafficLight: string[] = [
        "..G.G", // 0
        "C.G.G", // 1
        ".CG.G", // 2
        "..C.G", // 3
        "..GCG", // 4
        "..OCO", // 5
        "..RCR", // 6
        "..RCR"  // 7
      ];

      expect(trafficLights("..G.G", 7)).toEqual(resultTwoTrafficLight);

      const resultThreeTrafficLight: string[] = [
        "G.G.G", // 0
        "C.G.G", // 1
        "GCG.G", // 2
        "G.C.G", // 3
        "G.GCG", // 4
        "O.OCO", // 5
        "R.RCR", // 6
        "R.RCR"  // 7
      ];

      expect(trafficLights("G.G.G", 7)).toEqual(resultThreeTrafficLight);
    });
  });


});