/// <reference types= "cypress" />


describe ('Search and Add to Card' , function()
{   
    it('Valid checking' , function()
        {
            cy.visit('https://demo.nopcommerce.com/')
            cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
            cy.get('#small-search-box-form > button').click()
            cy.get('.product-box-add-to-cart-button').click()
            cy.get('#product_enteredQuantity_4').clear().type('2')
            cy.get('#add-to-cart-button-4').click()
            cy.wait(5000)
            cy.get('#topcartlink > a > span.cart-label').click()
            cy.wait(3000)
            cy.get('#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.unit-price > span').contains('$1,800.00')
            /*cy.contains('2')*/
            cy.get('#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.subtotal > span').contains('$3,600.00')
            
        })          
})   
