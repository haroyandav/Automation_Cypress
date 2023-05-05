describe('Handle tabs' , function() {

    it('Approach 1' , function(){

        cy.visit('https://the-internet.herokuapp.com/windows')
        
        cy.get('.example >a').invoke('removeAttr' , 'target').click()
        cy.url('').should('be.equal' , 'https://the-internet.herokuapp.com/windows/new')

        cy.go('back').url().should('be.equal' , 'https://the-internet.herokuapp.com/windows')

    })

    it('Approach 2' , ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        

        cy.get('.example >a').then((e) => {

            let url = e.prop('href')

            cy.visit(url)
            
        })

        cy.url('').should('be.equal' , 'https://the-internet.herokuapp.com/windows/new')
        

        cy.go('back').url().should('be.equal' , 'https://the-internet.herokuapp.com/windows')
        
    })
})