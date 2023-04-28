describe('Check UI elements' , function() {

    it.only('Checking Radio Buttons' , function() {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('#female').click().should('be.visible').and('be.checked')
        cy.get('#male').check().should('be.visible').and('be.checked')
        cy.get('#female').should('not.be.checked')
        cy.get('#other').click({force:true}).should('be.checked')
        
    })

    it('Checking check boxes' , () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get(".form-check-input[type='checkbox']").should('be.visible')
        cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')
    })
})