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
    test('Debe borrar tantas veces como # se encuentre', () => {
      expect(cleanString("cjg##")).toEqual("c");
      expect(cleanString("cjg###")).toEqual("");
      expect(cleanString("cjg######")).toEqual("");
    });

    test('Con letras de por medio entre hastags', () => {
      expect(cleanString("abc#d##c")).toEqual("ac");
      expect(cleanString("abc####d##c#")).toEqual("");
      expect(cleanString("abjd####jfk#")).toEqual("jf");
      expect(cleanString("gfh#jds###d#dsd####dasdaskhj###dhkjs####df##s##d##")).toEqual("gdasda");
    })
  });

  xdescribe('Randoms', () => {
    test('Contemplando mayúsculas y números', () => {
      expect(cleanString("gIOuEVAo8#wyIy#")).toEqual("gIOuEVAowyI");
      expect(cleanString("rG1###wknb####")).toEqual("");
      expect(cleanString("b#m#sqRE#vxc##X")).toEqual("sqRvX");
    });
    test('Con espacios de por medio', () => {
      expect(cleanString("d####E#pqfg## #")).toEqual("pqf");
    });
  });
});


