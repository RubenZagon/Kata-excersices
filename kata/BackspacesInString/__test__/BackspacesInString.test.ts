import { cleanString } from "../BackspacesInString";

describe("Clean String", () => {
  test("Con una letra - Si lee un # debe borrar el # con la anterior letra", () => {
    expect(cleanString("a#")).toEqual("");
  });

  test("Con dos letras - Si lee un # debe borrar el # con la anterior letra", () => {
    expect(cleanString("ba#")).toEqual("b");
  });

  test('Si con tres letras y dos #', () => {
    expect(cleanString("cj#b#")).toEqual("c");
  });

  test('Si con cuatro letras y tres #', () => {
    expect(cleanString("cj#b#c#")).toEqual("c");
  });

  test('Con dos hashtags seguidos', () => {
    expect(cleanString("cjg##")).toEqual("c");
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


