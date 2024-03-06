/* eslint-disable no-undef */

context("profil page view", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/profil/1");
    cy.viewport(1024, 768);
  });
  /**
   * Verifies that the logo is visible on the page.
   */
  it("logo should be visible", () => {
    cy.get(".logo").should("be.visible");
  });
  /**
   * Verifies that the user name is visible on the page.
   */
  it("user name should be visible", () => {
    cy.get(".user-name").should("be.visible");
  });
  /**
   * Verifies that the activity section is visible on the page.
   */
  it("activity should be visible", () => {
    cy.get(".Activity").should("be.visible");
  });
  /**
   *Verifies that the Nutrition section is visible on the page.
   */
  it("Nutrition should be visible", () => {
    cy.get(".SectionNutrition").should("be.visible");
  });
});
it("should check if the API is accessible", () => {
  cy.request("http://localhost:5173/profil/18").then((response) => {
    cy.visit("http://localhost:5173/profil/18");
    if (response.status === 200 && response.body.status === "OK") {
      cy.get(".user-name").should("be.visible");
    } else {
      cy.get(".errBackend").should("be.visible");
    }
  });
});

/**
 * Send a request to the specified URL using cy.request()
 */

it("should intercept and test network request", () => {
  cy.request("http://localhost:5173/profil/1").should((response) => {
    expect(response.status).to.eq(200);
  });
});
