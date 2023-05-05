

import 'cypress-iframe'


describe('Handling frames' , function(){


    it('Approach 1' , function() {

        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        let iframe = cy.get('#mce_0_ifr')
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap)

        iframe.clear().type('Welcome{selectall}')

        cy.get('[aria-label="Bold"]').click()

    })

    it('Approach 2 - by using custom commands' , function() {

        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        cy.getIframe('#mce_0_ifr').clear().type('Welcome{selectall}')

        cy.get('[aria-label="Bold"]').click()

    })

    it('Approach 3 - by using cypress iframe plugin' , function() {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr')

        cy.iframe('#mce_0_ifr').clear().type('Welcome{selectall}')
        cy.get('[aria-label="Bold"]').click()
        

    })
})