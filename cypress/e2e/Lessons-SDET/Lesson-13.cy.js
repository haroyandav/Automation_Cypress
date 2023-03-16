/// <reference types = "cypress" />


describe('.go() , back(-1) , forword(1) , reload' , function(){
    
    it('Lesson 13' , function(){

        cy.visit('https://demo.nopcommerce.com/')
          .title().should('equal' , 'nopCommerce demo store')
        
        cy.get('.ico-register').contains('Register').click()
          .title().should('equal' , 'nopCommerce demo store. Register')

        cy.go('back').title().should('equal' , 'nopCommerce demo store')
          .reload().title().should('equal' , 'nopCommerce demo store')
        cy.go('forward').title().should('equal' , 'nopCommerce demo store. Register')
          .reload().title().should('equal' , 'nopCommerce demo store. Register')
    })

})