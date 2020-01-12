import { cleanString } from "../BackspacesInString";

describe("Clean String", () => {

  describe('Si lee solo un #', () => {
    test("Debería realizar un solo borrado de la tecla backspace dónde esté posicionado el #", () => {
      expect(cleanString("a#")).toEqual("");
      expect(cleanString("ba#")).toEqual("b");
      expect(cleanString("cj#b#")).toEqual("c");
      expect(cleanString("cj#b#c#")).toEqual("c");
    });
  });

  describe('Si lee ## seguido o más', () => {
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


