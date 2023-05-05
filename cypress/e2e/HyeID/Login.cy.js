/// <reference types = "Cypress" />


describe ('Check Login functionality with valid and invalid datas' , function() {

    it ('Check Login with valid datas' , function () {

        cy.loginHyeID('turkikirde@vusra.com' , 'Dddddddddd1996.') // Valid email/password 
        cy.title().should('be.eq' , 'HyeID')

    })

    it ('Check Login with Invalid_Email' , function () {

        cy.loginHyeID('turkikirde123@vusra.com' , 'Dddddddddd1996.') // Invalid email 
        cy.contains('Incorrect username or password').should('be.visible')

    })

    it ('Check Login with Invalid_Password' , function () {

        cy.loginHyeID('turkikirde@vusra.com' , 'Ddddddd54ddd1996.') // Invalid password 
        cy.contains('Incorrect username or password').should('be.visible')
    })
})