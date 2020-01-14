import { vertMirror, horMirror, oper } from '../movesInSquaredString'

describe("Kata-movesInSquaredString", () => {

  describe('Función - verMirror', () => {
    test("Debe cambiar el orden de las palabras", () => {
      expect(vertMirror("abcd")).toEqual("dcba")
      expect(vertMirror("efgh")).toEqual("hgfe")
      expect(vertMirror("ijkl")).toEqual("lkji")
      expect(vertMirror("mnop")).toEqual("ponm")
    })

    test('Debe cambiar el orden de las palabras en bloques', () => {
      expect(vertMirror("dcba\nhgfe")).toEqual("abcd\\nefgh");
      expect(vertMirror("dcba\nhgfe\nlkji\nponm")).toEqual("abcd\\nefgh\\nijkl\\nmnop");
    });
  });

  describe('Función - horMirror', () => {
    test('Debe quitarle la \\n si está en la primera posición', () => {
      expect(horMirror("abcd\nefgh")).toEqual("efgh\\nabcd")
    });
    test("Debe ordenar los bloques de letras", () => {
      expect(horMirror("abcd\nefgh\nijkl\nmnop")).toEqual("mnop\\nijkl\\nefgh\\nabcd")
    })
  });

  // xdescribe('Función - oper', () => {
  //   test("Should ", () => {
  //     expect(oper(vertMirror("aab"), "aab")).toEqual()
  //   })
  // });

})