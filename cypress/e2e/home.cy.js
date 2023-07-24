describe("Landing page", () => {
  it("should navigate to the films page", () => {
    cy.visit("http://localhost:3000/");
    // Find a link with an href attribute containing "films" and click it
    cy.get('a[href*="films"]').eq(0).click();
    // The new url should include "/films"
    cy.url().should("include", "/films");
    // The new page should contain an h1 with "Films page"
    cy.get("h1").contains("Films Page");
  });

  it("should navigate to the cinemas page", () => {
    cy.visit("http://localhost:3000/");
    // Find a link with an href attribute containing "films" and click it
    cy.get('a[href*="cinemas"]').eq(0).click();
    // The new url should include "/films"
    cy.url().should("include", "/cinemas");
    // The new page should contain an h1 with "Films page"
    cy.get("h1").contains("Cinemas Page");
  });
});
