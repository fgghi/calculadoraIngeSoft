export function calcularCadena(cadena) {
  if (!cadena) return 0; // Caso base: cadena vacía

  // Separar números usando comas como delimitador por defecto
  const numeros = cadena.split(",").map(Number);

  // Sumar los números
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}
