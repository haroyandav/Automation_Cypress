/// <reference types = "Cypress" />

class LoginPage_2

{
    visit() 
    {
        cy.visit('https://development.connectto.com/hyeid-stage/auth/login')
    }

    fillEmailField(value)
    {
        cy.get('input[name=email]').type(value)
    }

    fillPasswordField(value)
    {
        cy.get('input[name=password]').type(value)
    }

    clickLogin()
    {
        cy.get('[type=submit]').click()
    }
}

export default LoginPage_2