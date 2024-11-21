export function calcularCadena(cadena) {
  if (!cadena) return 0; // Caso base
  return parseInt(cadena, 10) || 0; // Devuelve el número o 0 si no es válido
}
