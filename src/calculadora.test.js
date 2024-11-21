import { calculateSum } from './calculadora.js';

describe('Calculadora de Cadenas', () => {
  test('maneja delimitador guión', () => {
    expect(calculateSum("1-2,3")).toBe(6);
  });

  test('maneja delimitador personalizado', () => {
    expect(calculateSum("//[;]\n6;3;2")).toBe(11);
  });

  test('ignora números mayores a 1000', () => {
    expect(calculateSum("2,1001")).toBe(2);
  });

  test('maneja delimitadores de cualquier longitud', () => {
    expect(calculateSum("//[***]\n1***2***3")).toBe(6);
  });
});