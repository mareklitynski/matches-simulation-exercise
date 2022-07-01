describe("the simulation", () => {
  const sumOfVals = (els) => {
    const numbers = Cypress._.map(els, (el) => Number(el.textContent));
    return Cypress._.sum(numbers);
  };

  it("runs the simulation", () => {
    cy.visit("/");
    cy.contains("Start").click().contains("Finish");
    cy.wrap(Array.from({ length: 10 })).each((_, result) => {
      cy.get(".goals").should((els) => {
        expect(sumOfVals(els)).to.eq(result);
      });
    });
    cy.contains("Restart");
  });

  it("restarts the simulation", () => {
    cy.visit("/");
    cy.contains("Start").click();
    cy.get(".goals").should((els) => {
      expect(sumOfVals(els)).to.eq(1);
    });
    cy.contains("Finish").click();
    cy.contains("Restart").click();
    cy.get(".goals").should((els) => {
      expect(sumOfVals(els)).to.eq(1);
    });
  });
});
