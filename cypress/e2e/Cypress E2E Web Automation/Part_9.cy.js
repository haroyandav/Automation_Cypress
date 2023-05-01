describe('Alerts' , function() {

    // 1) Javascript Alert: It will have some text and an "OK" button.

    it('JS alert' , function() {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert' , function(first) {
            expect(first).to.contains('I am a JS Alert')
        })

        cy.get('#result').should('have.text' , 'You successfully clicked an alert')
    })

    // 2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons.

    it('Js confirm alert' , function() {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')


    })
})