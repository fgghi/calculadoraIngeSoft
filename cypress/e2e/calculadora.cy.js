describe('Calculadora de Cadenas UI', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  function enterNumbersAndCalculate(input) {
    cy.get('#numbers').clear().type(input);
    cy.get('button').click();
  }

  function checkResult(expectedSum) {
    cy.get('#result').should('contain', `Resultado: ${expectedSum}`);
  }

  it('maneja entrada vacía', () => {
    enterNumbersAndCalculate('input#cadena');
    checkResult(0);
  });

  it('suma números con delimitador por defecto', () => {
    enterNumbersAndCalculate('1,2,3');
    checkResult(6);
  });

  it('ignora números mayores a 1000', () => {
    enterNumbersAndCalculate('1,1001');
    checkResult(1);
  });

  it('maneja múltiples delimitadores', () => {
    enterNumbersAndCalculate('//[*][%]\\n*2%3');
    checkResult(5);
  });
});