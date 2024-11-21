import { calcularCadena } from './calculadora.js';

const form = document.getElementById("cadenaForm");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
  event.preventDefault()

  const cadena = form.cadena.value;
  try {
    const suma = calcularCadena(cadena);
    resultado.textContent = `Resultado: ${suma}`; 
  } catch (error) {
    resultado.textContent = `Error: ${error.message}`;
  }
});


