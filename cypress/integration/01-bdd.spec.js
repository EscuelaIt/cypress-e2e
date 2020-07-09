/// <reference types="Cypress" />

// FEATURE:     have web site with a title
// As a:        visitor
// I want to:   view the title of a site
// In order to: be more confident

// Scenario:
//  Given: the url https://escuela.it/
//  When: I visit it
//  Then: should have EscuelaIT on its title

describe('Visiting the url https://escuela.it/', () => {
  it('should have _EscuelaIT_ on its title', () => {
    cy.visit('https://escuela.it/');
    cy.title().should('include', 'EscuelaIT');
  });
});

const sutUrl = 'https://escuela.it/';
describe(`GIVEN: the url ${sutUrl}`, () => {
  context(`WHEN: I visit it`, () => {
    before(() => {
      cy.visit(sutUrl);
    });
    const expected = 'EscuelaIT';
    it(`THEN: should have _${expected}_ on its title`, () => {
      cy.title().should('include', expected);
    });
  });
});
