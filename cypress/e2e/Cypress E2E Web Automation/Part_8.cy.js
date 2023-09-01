describe('Handle dropdowns' , function() {

    it ('Drop down with select' , function() {

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country')
          .select('The Democratic Republic Of Congo')
          .should('have.value' , 'The Democratic Republic Of Congo')

    })

    
    it.only ('Drop down without select' , function (){

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Urug{enter}')
        cy.get('#select2-billing_country-container').should('have.text' , 'Uruguay')
    })

    it ('Auto suggest Drop down' , function (){

        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Armenia')
        cy.get('.suggestion-title').should('have.length' , 6)
          .contains('Armenian genocide')
          .click()
        cy.title().should('equal' , 'Armenian genocide - Wikipedia')

    })

    it ('Dynamic Drop down' , function (){

        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('cypress automation')
        cy.wait(2000)
        cy.get('div.wM6W7d>span').should('have.length' , 12)
        cy.get('div.wM6W7d>span').each(($el , index , $list) => {

            if ($el.text() == "cypress automation interview questions") 
            {

                cy.wrap($el).click()
            }
        })

        cy.get('#APjFqb').should('have.value' , 'cypress automation interview questions')
    });
});    