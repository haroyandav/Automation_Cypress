/// <reference types = "Cypress" />

describe('Custom Suite' , function () {

    it ('Login Test' , function () {

        //Tvyalner@ vercnum e commands.js - ic
        cy.login('admin@yourstore.com' , 'admin') // Valid email/password
        cy.title().should('be.eq' , 'Dashboard / nopCommerce administration')
    })

    it ('Add customer' , function () {
        
        //Tvyalner@ vercnum e commands.js - ic
        cy.login('admin@yourstore.com' , 'admin123') //Invalid password
        cy.title().should('be.eq' , 'Your store. Login')
    })

    it ('Edit customer' , function () {
        
        //Tvyalner@ vercnum e commands.js - ic
        cy.login('admin@yourstore.com123' , 'admin')  //Invalid email
        cy.title().should('be.eq' , 'Your store. Login')
    })
})