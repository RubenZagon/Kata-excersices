import { vertMirror, horMirror, oper } from '../movesInSquaredString'

describe("Kata-movesInSquaredString", () => {

  describe.only('Función - verMirror', () => {
    test("Should ", () => {
      expect(vertMirror("aab")).toEqual()
    })
  });

  describe('Función - horMirror', () => {
    test("Should ", () => {
      expect(horMirror("aab")).toEqual()
    })
  });

  xdescribe('Función - oper', () => {
    test("Should ", () => {
      expect(oper(vertMirror("aab"), "aab")).toEqual()
    })
  });

})