/// <reference types= "Cypress" />

class LoginPage 

{

visit()
{
    cy.visit('https://admin-demo.nopcommerce.com/login') 
}

fillUserName(value)
{
/*const EmailField = */         cy.get('[id=Email]').clear()
/*EmailField.clear()*/
/*EmailField.type(value)*/      cy.get('[id=Email]').type(value)
//return this
}

fillPassword(value)
{
/*const PasswordField = */      cy.get('[id=Password]').clear()
/*PasswordField.clear()*/
/*PasswordField.type(value)*/   cy.get('[id=Password]').type(value)
//return this
}

clickLogInButton()
{
/*const buttonLogIn = */        cy.get('[type=submit]').click()
//buttonLogIn.click()
//return this
}
}

export default LoginPage