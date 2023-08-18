describe ('Check Login functionality with valid and invalid datas' , function() {

    it ('Check Login with valid datas' , function () {

        cy.loginHyeID('turkikirde@vusra.com' , 'Dddddddddd1996.') // Valid email/password 
        cy.title().should('be.eq' , 'HyeID')

    })

    it ('Check Login with Invalid_Email' , function () {

        cy.loginHyeID('turkikirde123@vusra.com' , 'Dddddddddd1996.') // Invalid email 
        cy.contains('Incorrect username or password').should('be.visible')

    })

    it ('Check Login with Invalid_Password' , function () {

        cy.loginHyeID('turkikirde@vusra.com' , 'Ddddddd54ddd1996.') // Invalid password 
        cy.contains('Incorrect username or password').should('be.visible')
    })

    it ('Check Login with Invalid_Password and Invalid_Email' , function () {

        cy.loginHyeID('turkasikirde@vusra.com' , 'Ddddddd54ddd1996.') // Invalid password and Email
        cy.contains('Incorrect username or password').should('be.visible')
    })

    it.only ('Login with Data Driven Test' , function() {

        cy.fixture('HyeID_UI_login').then((data) => {

            cy.visit('https://development.connectto.com/hyeid-stage/')

            data.forEach((userdata) => {

                cy.get("#email_form").clear().type(userdata.email)
                cy.get("#password_form").clear().type(userdata.password)
                cy.get("button[type='submit']").click()

                if(userdata.email == 'turkikirde@vusra.com' && userdata.password == 'Dddddddddd1996.') {

                    cy.title().should('equal' , userdata.expected)
                    cy.wait(1000)
                    cy.get(".regular.ng-star-inserted").click()
                    cy.wait(1000)
                    cy.get("li[role='menuitem'] a[class='dropdown-item semibold']").click()
                    cy.wait(1000)
                }else{
                    cy.contains(userdata.expected).should('be.visible')
                }
            })
        })
    })
})