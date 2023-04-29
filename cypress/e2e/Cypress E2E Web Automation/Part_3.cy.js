/// <reference types = "Cypress" />



describe.only ('Verify title positive' , function () {

    it ('Test 1' , function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.title().should('eq' , 'OrangeHRM');
        cy.location('pathname').should('eq' , '/web/index.php/auth/login');

    })
});

describe.only ('Verify title negative test' , function () {

    it ('Test 2' , function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.title().should('eq' , 'OrangeHRM123');
        cy.location('pathname').should('eq' , '/web/index.php/auth/login');
    
    })
});
