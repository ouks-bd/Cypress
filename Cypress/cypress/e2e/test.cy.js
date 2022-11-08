/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
      cy.visit('https://www.daraz.com.bd/#')
    })
    describe("home", () => {
      it("home accessible", () => {
        cy.visit('https://www.daraz.com.bd/#');
       // cy.get('anonLogin').click
        cy.get('#anonLogin').click()
       // cy.get('button[id="anonLogin"]').click()
      //  cy.get('.anonLogin').click()
        //We fill the login FORM
        // cy.get("#username").type("");
        // cy.get("#password").type("");
           
        // cy.get(".btn.btn-primary.btn-lg").click();
        // cy.visit('');
        // cy.visit('');
      });
    });
  
  })