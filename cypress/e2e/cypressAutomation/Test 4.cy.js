describe('' , () => {
        


    it('Invoke and tabs' , () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.viewport(1700, 1200)

        cy.get('[id="opentab"]').invoke('removeAttr' , 'target').click()
        
        cy.wait(6000)
        cy.url().should('equal' , 'https://www.qaclickacademy.com/')
        cy.go('back')

        cy.url().should('eq' , 'https://rahulshettyacademy.com/AutomationPractice/')

    })
        
})