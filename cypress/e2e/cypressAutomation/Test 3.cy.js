describe('' , () => {
        


    it('Alert' , () => {
        
        cy.viewport(2000 , 1300)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="alertbtn"]').click()

        cy.on('window:alert' , (text) => {

            expect(text).to.eq('Hello , share this practice page and share your knowledge')
        })
    })

    it('Confirm' , () => {

        cy.viewport(2000 , 1300)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="confirmbtn"]').click()

        cy.on('window:confirm' , (text) => {

            expect(text).to.eq('Hello , Are you sure you want to confirm?')
        })
    })
        
})