/* eslint-disable no-undef */

/**
 * Check if the backend is up or down based on the condition status: 200 and response.body.status
 */


  it("should check if the API is accessible", () => {
    cy.request('http://localhost:5173/profil/18').then((response) => {
      if (response.status === 200 && response.body.status === 'OK') {
        cy.log("API is accessible");
      } else {
        cy.log("API is not accessible");
      }
    });
  });

  