/// <reference types="cypress" />
describe("home", () => {
    
context('Assertions', () => {
    beforeEach(() => {
      cy.visit('https://www.daraz.com.bd/#')
    })
   
      it("home accessible", () => {
        cy.visit('https://www.daraz.com.bd/#');
       
        cy.get('#anonLogin').click()
        cy.get('.mod-login-input-loginName >input ').type("Automation Bro");
        cy.get('.mod-input-password > input').type("test");
        cy.get('.next-btn').click
       
      });
    });
  
  })