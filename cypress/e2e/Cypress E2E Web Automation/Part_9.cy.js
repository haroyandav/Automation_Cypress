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

    it('Js confirm alert with "OK" button ' , function() {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm' , function(second) {
            expect(second).to.contains('I am a JS Confirm')
        }) //Cypress automaticaly choose OK button

        cy.get('#result').should('have.text' , 'You clicked: Ok')


    })

    it('Js confirm alert with "Cancel" button ' , function() {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('button[onclick="jsConfirm()"]').click()
        
        cy.on('window:confirm' , function(second) {
            expect(second).to.contains('I am a JS Confirm')
        })
        cy.on('window:confirm' , () => false); // With this we can choose Cancel buttton in Alert
        
        cy.get('#result').should('have.text' , 'You clicked: Cancel')


    })

    // 3) Javascript Prompt alert: It will have some text with a text box for user input along with "OK"

    it('Js prompt alert' , function() {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((function(win) {

            cy.stub(win , 'prompt').returns('Davit')

        }))

        cy.get('button[onclick="jsPrompt()"]').click()
        
        cy.get('#result').should('have.text' ,'You entered: Davit')

    })

    // 4) Authenticated alert 

    it('Authenticated alert' , function() {

        cy.visit('https://the-internet.herokuapp.com/basic_auth' , {auth: 
                                                                   {username:"admin" , 
                                                                    password:"admin"
                                                                   }
                                                                   })

        cy.get('.example').should('have.contain' , 'Congratulations')
    })

})