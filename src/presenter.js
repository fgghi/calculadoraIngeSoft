import { calculateSum } from './calculadora.js';

function initializeCalculator() {
  const calculatorForm = document.getElementById("calculatorForm");
  const resultDisplay = document.getElementById("result");
  
  calculatorForm.addEventListener("submit", handleCalculation);
  
  function handleCalculation(event) {
    event.preventDefault();
    const input = calculatorForm.numbers.value;
    
    try {
      const sum = calculateSum(input);
      displayResult(sum);
    } catch (error) {
      displayError(error.message);
    }
  }
  
  function displayResult(sum) {
    resultDisplay.textContent = `Resultado: ${sum}`;
  }
  
  function displayError(message) {
    resultDisplay.textContent = `Error: ${message}`;
  }
}

document.addEventListener('DOMContentLoaded', initializeCalculator);