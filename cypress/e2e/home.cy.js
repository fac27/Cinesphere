describe("Landing page", () => {
  it("should navigate to the films page", () => {
    cy.visit("http://localhost:3000/");
    // Find a link with an href attribute containing "films" and click it
    cy.get(".films__container").click();
    // The new url should include "/films"
    cy.url().should("include", "/films");
  });

  it("should navigate to the cinemas page", () => {
    cy.visit("http://localhost:3000/");
    // Find a link with an href attribute containing "films" and click it
    cy.get(".cinemas__container").click();
    // The new url should include "/cinemas"
    cy.url().should("include", "/cinemas", { timeout: 5000 });
    // The new page should contain an h1 with "Films page"
    cy.get(".cinemas__searchbar");
  });
});
