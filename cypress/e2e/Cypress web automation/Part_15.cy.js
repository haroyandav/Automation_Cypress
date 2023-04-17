/// <reference types = "Cypress" />


describe ('MyTestSuite' , function () 
{
    before(function (){
        cy.log('********* This is SETUP block. ******** ')
    })
    
    after(function () {
        cy.log('******* This is TEAR DOWN block **********')
    })

    beforeEach(function() {
        cy.log('******** This is LOGIN block **********')
    })

    afterEach(function () {
        cy.log('********** This is LOGOUT block **********')
    })


    it ('Searching' , function (){

        cy.log('************ This is searching test. ************')

    })

    it ('Advanced Searching' , function (){

        cy.log('************ This is Advanced searching test. ************')

    })

    it ('Listing Products' , function (){

        cy.log('************ This is listing products test. ************')

    })
})