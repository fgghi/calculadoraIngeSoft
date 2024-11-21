import { calcularCadena } from "../src/calculadora";

test("Para una cadena vacía, retorna 0", () => {
  expect(calcularCadena("")).toBe(0);
});

test("Para una cadena con un solo número, retorna el número mismo", () => {
  expect(calcularCadena("2")).toBe(2);
});

test("Para una cadena con dos números separados por coma, retorna la suma", () => {
  expect(calcularCadena("1,2")).toBe(3);
});
