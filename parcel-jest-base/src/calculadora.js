export function calcularCadena(cadena) {
  if (!cadena) return 0; 

  let delimitadores = [",", "-"];

  if (cadena.startsWith("//")) {
    const delimitadorDefinido = cadena.match(/\/\/(\[.*?\])+\n/);
    if (delimitadorDefinido) {
      const personalizados = delimitadorDefinido[0]
        .match(/\[.*?\]/g) 
        .map(d => d.slice(1, -1));
      delimitadores = delimitadores.concat(personalizados);
      cadena = cadena.slice(cadena.indexOf("\n") + 1);
    }
  }

  const regex = new RegExp(delimitadores.map(escapeRegExp).join("|"), "g");

  return cadena
    .split(regex)
    .map(Number)
    .filter(num => num <= 1000)
    .reduce((acc, curr) => acc + curr, 0);
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
