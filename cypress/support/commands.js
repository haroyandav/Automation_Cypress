// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

/// <reference types = "Cypress" />
/// <reference types = "cypress-xpath" />

// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })




Cypress.Commands.add("login", (email, password) => { 

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]').clear().type(email)
        cy.get('input[name=Password]').clear().type(password)
        cy.get('.button-1').click()

})

Cypress.Commands.add("loginHyeID", (email, password) => { 
        
        // HyeID credentials

        cy.visit('https://development.connectto.com/hyeid-stage/auth/login?returnUrl=%2F')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        cy.get('[type=submit]').click()

})

Cypress.Commands.add('getIframe' , (iframe) => {

        cy.get(iframe)
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap)
})