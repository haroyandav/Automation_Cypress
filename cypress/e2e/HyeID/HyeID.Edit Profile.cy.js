/// <reference types= "cypress" />

it("Edit Profile" , function () {

    cy.pause()
    cy.visit("https://development.connectto.com/hyeid-stage/auth/login")
    cy.get("#email_form").type("goydukekni@gufum.com")
    cy.get("#password_form").type("Dddddddddd1996.")
    cy.get('.login-sign-in-btn-pt > .btn').click()
    cy.get('.contact-user-progress-pa > .bold').click()
    cy.get('.data-page-edit-icon > a > img').click()
    cy.get('#armFirstName').type("Դ")
    cy.get('.add_member_justify_margin > .btn').click()
});