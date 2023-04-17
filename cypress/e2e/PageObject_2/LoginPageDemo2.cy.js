/// <reference types = "Cypress" />

import LoginPage_2 from "../PageObject_2/LoginPage_2";

describe ('LoginPage' , function() {

    it ('LoginPage' , function () {

        var lp = new LoginPage_2

        lp.visit()
        lp.fillEmailField('turkikirde@vusra.com')
        lp.fillPasswordField('Dddddddddd1996.')
        lp.clickLogin()
        cy.location('pathname').should('eq' , '/hyeid-stage/')

    })
})