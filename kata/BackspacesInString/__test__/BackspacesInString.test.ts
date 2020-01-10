import { cleanString } from "../BackspacesInString";

describe("Clean String", () => {

  describe('Lee solo un #', () => {
    test("Con una letra - Si lee un # debe borrar el # con la anterior letra", () => {
      expect(cleanString("a#")).toEqual("");
    });

    test("Con dos letras - Si lee un # debe borrar el # con la anterior letra", () => {
      expect(cleanString("ba#")).toEqual("b");
    });

    test('Con tres letras y dos #', () => {
      expect(cleanString("cj#b#")).toEqual("c");
    });

    test('Con cuatro letras y tres #', () => {
      expect(cleanString("cj#b#c#")).toEqual("c");
    });
  });

  describe('Contador ##', () => {
    test('Con dos hashtags seguidos, debe borrar tantas veces como # se encuentre', () => {
      expect(cleanString("cjg##")).toEqual("c");
    });
  });

  xdescribe("FINALLY TeST", () => {
    test("TEst 1", () => {
      expect(cleanString("abc#d##c")).toEqual("ac");
    });
    test("TEst 2", () => {
      expect(cleanString("abc####d##c#")).toEqual("");
    });
  })
});


