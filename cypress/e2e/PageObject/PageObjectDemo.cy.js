/// <reference types= "Cypress" />

import LoginPage from '../PageObject/LoginPage'

describe('Test LoginPage' , function (){

    it('Valid Login test' , function(){

        let lp = new LoginPage
        lp.visit()
        lp.fillUserName('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.clickLogInButton()
        cy.location('pathname' , ).should('equal' , '/admin/')  
    })

})