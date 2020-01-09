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
  xtest("Should work for example test", () => {
    expect(trafficLights("C...R............G......", 20)).toEqual([""]);
  });

  xtest("No lights", () => {
    expect(trafficLights("C....", 10)).toEqual([""]);
  });

  xtest("Car falls off the end", () => {
    expect(trafficLights("C.G...", 10)).toEqual([""]);
  });

  test("Red", () => {
    expect(trafficLights("C.R...G...G.", 20)).toEqual([""]);
  });
});
