describe("Calculadora de Cadena", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("Debería mostrar 0 para una cadena vacía", () => {
    cy.get("input#cadena").clear();
    cy.get("button").click();
    cy.get("#resultado").should("contain", "Resultado: 0");
  });

  it("Debería sumar números separados por comas", () => {
    cy.get("input#cadena").type("1,2,3");
    cy.get("button").click();
    cy.get("#resultado").should("contain", "Resultado: 6");
  });

  it("Debería ignorar números mayores a 1000", () => {
    cy.get("input#cadena").type("1,1001");
    cy.get("button").click();
    cy.get("#resultado").should("contain", "Resultado: 1");
  });

  it("Debería soportar múltiples delimitadores personalizados", () => {
    cy.get("input#cadena").type("//[*][%]\n1*2%3");
    cy.get("button").click();
    cy.wait(500);
    cy.get("#resultado").should("contain", "Resultado: 6");
  });
});