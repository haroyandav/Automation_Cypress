class Login{

    url = 'https://trytestingthis.netlify.app/'
    usernameField = '[id="uname"]'
    passwordField = '[id="pwd"]'
    loginbutton = '[type="submit"]'

    navigateTo() 
    {

        cy.visit(this.url)
    }

    username(data) 
    {
        cy.get(this.usernameField).type(data)
    }

    password(data1) 
    {
        cy.get(this.passwordField).type(data1)
    }

    loginButton() 
    {
        cy.get(this.loginbutton).click()
    }
}

export default Login