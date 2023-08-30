describe ('' , () => {

    it ('' , () => {

        cy.viewport(2000 ,1000)
        cy.visit('https://rahulshettyacademy.com/client')
        cy.get('[id="userEmail"]').type('sss@mailinator.com')
        cy.get('[id="userPassword"]').type('123456Tt.')
        cy.get('[id="login"]').click()

        
    })


})