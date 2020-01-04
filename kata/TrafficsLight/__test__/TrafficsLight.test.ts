import { trafficLights } from "../TrafficsLight";

describe('Traffic Lights', () => {
  test('Should be 1 when input is 0', () => {
    expect(trafficLights("C...R............G......", 7)).toBe(1);
  });
});
