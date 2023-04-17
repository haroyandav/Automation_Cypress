/// <reference types = "Cypress" />



describe ('My test suite' , function () {

    beforeEach(function() {
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })


    it('FixturesDemoTest' , function () {

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('#Email').clear().type(this.data.email)
        cy.get('#Password').clear().type(this.data.password)
        cy.get('.button-1').click()
        cy.get('.content-header > h1').contains('Dashboard').should('be.visible')
    })

})
