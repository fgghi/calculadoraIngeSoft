import { calcularCadena } from "./calculadora.js";

test("Soporte para el delimitador `-`", () => {
  expect(calcularCadena("1-2,3")).toBe(6);
});

test("Soporte para delimitadores personalizados", () => {
  expect(calcularCadena("//[;]\n6;3;2")).toBe(11);
});

test("Ignorar números mayores a 1000", () => {
  expect(calcularCadena("2,1001")).toBe(2);
});

test("Delimitadores de cualquier longitud", () => {
  expect(calcularCadena("//[***]\n1***2***3")).toBe(6);
});



