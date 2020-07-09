/// <reference types="Cypress" />

describe('Visiting the url https://escuela.it/', () => {
  it('should have _EscuelaIT_ on its title', () => {
    cy.visit('https://escuela.it/');
    cy.title().should('include', 'EscuelaIT');
  });
});
