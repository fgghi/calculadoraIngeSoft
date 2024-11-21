export function calcularCadena(cadena) {
  if (!cadena) return 0;
  
  if (cadena.startsWith("//")) {
    let parteNumeros = cadena;
    let delimitadores = [];
    
    const delimitadoresMatch = cadena.match(/\[(.*?)\]/g);
    if (delimitadoresMatch) {
      delimitadores = delimitadoresMatch
        .map(d => d.slice(1, -1))
        .map(d => d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'));
      
      const ultimoDelimitador = cadena.lastIndexOf(']');
      const siguienteCaracter = cadena.indexOf('\n', ultimoDelimitador);
      if (siguienteCaracter !== -1) {
        parteNumeros = cadena.slice(siguienteCaracter + 1);
      } else {
        parteNumeros = cadena.slice(ultimoDelimitador + 1);
      }
    }
    
    if (delimitadores.length > 0) {
      const regex = new RegExp(delimitadores.join('|'));
      const numeros = parteNumeros.split(regex);
      
      return numeros
        .filter(n => n.length > 0)
        .map(n => parseInt(n.trim(), 10))
        .filter(n => !isNaN(n) && n <= 1000)
        .reduce((sum, n) => sum + n, 0);
    }
  }
  
  return cadena
    .split(/[,\-]/)
    .filter(n => n.length > 0)
    .map(n => parseInt(n.trim(), 10))
    .filter(n => !isNaN(n) && n <= 1000)
    .reduce((sum, n) => sum + n, 0);
}