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
/// <reference types = "cypress-iframe" />

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

        cy.visit('https://development.connectto.com/hyeid-stage')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)
        cy.get('[type=submit]').click()

})

Cypress.Commands.add("loginHyeIDadmin", (email, password) => { 
        
        // HyeID credentials

        cy.visit('https://development.connectto.com/hyeid-admin-stage')
        cy.get('[placeholder="Email"]').type(email)
        cy.get('[placeholder="Password"]').type(password)
        cy.get('[type="submit"]').click()

})

Cypress.Commands.add('getIframe' , (iframe) => {

        cy.get(iframe)
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap)
})

Cypress.Commands.add('clicklink' , (label) => {

        cy.get('a').contains(label).click()
})

Cypress.Commands.add("applyHyeID", () => { 
        
        cy.get('[class="btn bold a_hover_animation ng-star-inserted"]').click()
        cy.get('[id="armFirstName"]').click({force:true}).type('Դավիթ')
        cy.get('[id="armLastName"]').click({force:true}).type('Հարոյան')
        cy.get('[class="btn bold font_size_ru save-btn"]').click()
        cy.get('[formcontrolname="dobD"]').select('10').should('have.value' , '10: 10')
        cy.get('[formcontrolname="dobM"]').select('July').should('have.value' , '6')
        cy.get('[formcontrolname="dobY"]').select('1996').should('have.value' , '1996')
        cy.get('[id="male"]').click()
        cy.get('[class="btn bold font_size_ru save-btn"]').click()
        cy.get('[formcontrolname="countryId"]').select('Armenia').should('have.value' , 'ARM')
        cy.get('[formcontrolname="stateId"]').select('Yerevan').should('have.value' , '21: 359')
        cy.get('[formcontrolname="cityId"]').select('Yerevan').should('have.value' , '7: 841')
        cy.get('[id="address"]').click({force:true}).type('aaaaaaaa67')
        cy.get('[id="zipCode"]').click({force:true}).type('0039')
        cy.get('[class="btn bold font_size_ru save-btn"]').click()
        cy.contains(' Skip for now ').click()
        cy.contains(' Skip for now ').click()
        cy.contains(' FINISH ').click()
        cy.contains('Congratulations! You have become a HyeID member.').should('be.visible')
        cy.get('[class="bold cursor_pointer"]').should('contain' , ' GO TO THE PAYMENT ')
        cy.get('[class="amount ng-star-inserted"]').should('contain' , '֏600.00')
})

Cypress.Commands.add('loginAndCaptureProductInfo', () => {
        cy.viewport(2000, 1000);
        cy.visit('https://rahulshettyacademy.com/client');
        cy.get('[id="userEmail"]').type('sss@mailinator.com');
        cy.get('[id="userPassword"]').type('123456Tt.');
        cy.get('[id="login"]').click();
      
        cy.get('[class="card-body"]').eq(1).find('b').should('be.visible').invoke('text').then((name1) => {
          
            cy.wrap(name1).as('productName');

        });
});

Cypress.Commands.add('inputPage' , () => {

        cy.get('div .card a').then(function(editButton) {

                cy.wrap(editButton).eq(0).click().then(function () {
    
                    cy.get("input[id='fullName']").should('have.attr' , 'placeholder' , 'Enter first & last name')
                      .and('be.visible')
                      .type('Davit')
                })
            })
})