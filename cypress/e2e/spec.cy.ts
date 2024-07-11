describe("TeamSync Application", () => {
  it("should have page title", async () => {
    cy.visit("https://teamsync-stark.webflow.io/");
    cy.title().should("eq", "TeamSync");
  });

  it('should have a "Try TeamSync" button', async () => {
    cy.visit("https://teamsync-stark.webflow.io/");
    cy.contains("button", "Try TeamSync").should("exist");
  });

  it("should meet accessibility requirements", () => {
    cy.visit("https://teamsync-stark.webflow.io/");
    cy.starkScan({
      wcagVersion: "2.2",
      conformanceLevel: "AA",
      sendResults: true,
      name: "TeamSync Site",
      token: Cypress.env("starkProjectToken"),
    }).then((results) => {
      expect(
        results.failed,
        "Less than 50 overall accessibility issues at WCAG 2.2 AA"
      ).to.be.lessThan(50);
      expect(
        results.resultsByCriteria["1.4"]?.failed || 0,
        "Less than 15 failures for contrast issues"
      ).to.be.lessThan(15);
    });
  });
});
