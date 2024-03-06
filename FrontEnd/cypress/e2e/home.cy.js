/* eslint-disable no-undef */

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.viewport(1024, 768);
  });

  it("logo should be visible", () => {
    cy.get(".logo").should("be.visible");
  });
  it("logo click", () => {
    cy.get(".logo").click();
    cy.url().should("include", "/");
  });
  /**
   * navbar should be visible
   */
  it("navbar should be visible", () => {
    cy.get(".nav").should("be.visible");
    cy.get(".nav > :nth-child(1) > a").should("be.visible");
    cy.get('[href="/profil/18"] > .userBtn').should("be.visible");
    cy.get('[href="/profil/18"] > .userBtn').should("be.visible");
    cy.get(".nav > :nth-child(4) > a").should("be.visible");
  });
  /**
   * navbar btn click
   */
  it("navbar click", () => {
    cy.get(".nav > :nth-child(1) > a").click();
    cy.url().should("include", "/");
    cy.get('[href="/profil/18"] > .userBtn').click();
    cy.url().should("include", "/profil");
    cy.get(".nav > :nth-child(3) > a").click();
    cy.url().should("include", "/settings");
    cy.get(".nav > :nth-child(4) > a").click();
    cy.url().should("include", "/community");
  });
  /**
   * navbar size and dimensions
   */
  it("set the navbar size and dimensions", () => {
    cy.viewport(320, 480);
    // The navbar should collapse since our screen is smaller
    cy.get(".nav").should("not.be.visible");
  });
  /**
   * btn user should be visible
   */
  it("buttons should be visible", () => {
    cy.get('[href="/profil/12"] > .userBtn').should("be.visible");
    cy.get('[href="/profil/18"] > .userBtn').should("be.visible");
    cy.get('[href="/profil/1"] > .userBtn').should("be.visible");
    cy.get('[href="/profil/2"] > .userBtn').should("be.visible");
  });
  /**
   * home page  visible in dimensions 1024, 780
   */
  it("the home page should be visible in dimensions 1024, 780", () => {
    cy.viewport(1024, 780);
    cy.get(".App").should("be.visible");
  });

  /**
   * home page h1 visible
   */
  it("in home page H1 should be visible  ", () => {
    cy.get("h1").should("be.visible");
  });
});
