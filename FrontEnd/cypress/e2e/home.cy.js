/* eslint-disable no-undef */

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("logo should be visible", () => {
    cy.get(".logo").should("be.visible");
  });

  it("navbar should be visible", () => {
    cy.get(".nav").should("be.visible");
  });

  it("set the navbar size and dimensions", () => {
    cy.viewport(320, 480);
    // The navbar should collapse since our screen is smaller
    cy.get(".nav").should("not.be.visible");
  });

  it("buttons should be visible", () => {
    cy.get('[href="/profil/12"] > .userBtn').should("be.visible");
    cy.get('[href="/profil/18"] > .userBtn').should("be.visible");
    cy.get('[href="/profil/1"] > .userBtn').should("be.visible");
    cy.get('[href="/profil/2"] > .userBtn').should("be.visible");
  });

  it("the home page should be visible in dimensions 1024, 780", () => {
    cy.viewport(1024, 780);
    cy.get(".App").should("be.visible");
  });
});
