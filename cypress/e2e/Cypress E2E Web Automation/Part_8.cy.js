describe('Handle dropdowns' , function() {

    it.skip('Drop down with select' , function() {

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country')
          .select('The Democratic Republic Of Congo')
          .should('have.value' , 'The Democratic Republic Of Congo')

})

    
    it ('Drop down without select' , function (){

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Urug{enter}')
        cy.get('#select2-billing_country-container').should('have.text' , 'Uruguay')
    })
})    
