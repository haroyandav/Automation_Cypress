/// <reference types= "cypress" />

describe('FirstTest', function ()
{
    it('Verify Title of the Page' , function(){
        
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('equal' , 'nopCommerce demo store')
    })


    it('Verify Title of the Page---Positive' , function(){
        
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('equal' , 'nopCommerce demo store')
    })


    it('Verify Title of the Page---Negative' , function(){
        
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('equal' , 'nopCommerce demo sSStore')
    })
}) 