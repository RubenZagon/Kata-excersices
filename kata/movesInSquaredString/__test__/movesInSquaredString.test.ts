import { vertMirror, horMirror, oper } from '../movesInSquaredString'

describe("Kata-movesInSquaredString", () => {

  describe.only('Función - verMirror', () => {
    test("Debe cambiar el orden de las palabras", () => {
      expect(vertMirror("abcd")).toEqual("dcba")
      expect(vertMirror("efgh")).toEqual("hgfe")
      expect(vertMirror("ijkl")).toEqual("lkji")
      expect(vertMirror("mnop")).toEqual("ponm")
    })

    test.only('Debe cambiar el orden de las palabras en bloques', () => {
      expect(vertMirror("dcba\nhgfe")).toEqual("abcd\nefgh");
      expect(vertMirror("dcba\nhgfe\nlkji\nponm")).toEqual("abcd\nefgh");
    });
  });

  describe('Función - horMirror', () => {
    test("Should ", () => {
      expect(horMirror("aab")).toEqual("aab")
    })
  });

  // xdescribe('Función - oper', () => {
  //   test("Should ", () => {
  //     expect(oper(vertMirror("aab"), "aab")).toEqual()
  //   })
  // });

})