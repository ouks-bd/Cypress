/// <reference types="cypress" />
describe("home", () => {
    
context('Assertions', () => {
    beforeEach(() => {
      cy.visit('https://www.daraz.com.bd/#')
    })
   
      it("home accessible", () => {
        cy.visit('https://www.daraz.com.bd/#');
       // cy.get('anonLogin').click
        cy.get('#anonLogin').click()

        cy.get("#text").type("Automation Bro");
       // cy.xpath("//input[@placeholder='Please enter your Phone Number or Email']").type("test")
    
      // cy.get("#a2a0e.login_signup.0.i0.4b002829EiLBdz").type("shoeb");
        // cy.get("#a2a0e.login_signup.0.i5.4b002829EiLBdz").type("Password");
        // cy.get('#a2a0e.login_signup.0.i6.4b002829EiLBdz').click()
        
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