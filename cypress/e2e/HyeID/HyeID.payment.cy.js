/// <reference types= "cypress" />











it ("Should navigate to the HyeID UI login page" , function () {
    cy.pause()
    
    cy.visit("https://development.connectto.com/hyeid-stage/auth/login?returnUrl=%2F")
    cy.get("#email_form").type("goydukekni@gufum.com")
    cy.get("#password_form").type("Dddddddddd1996.")
    cy.get('.login-sign-in-btn-pt > .btn').click()
    cy.get('.payment_a_hot').click()
    cy.get('.btn-next').click()
    cy.get('#your-amount').type("100")
    cy.get('.btn-next').click()
    cy.get('.bank_account').click()
    cy.get('.payment_next_button').click()
    cy.get('#fullName').type("DAVIT HAROYAN")
    cy.get('#creditCardNumber').type("4578890000137")
    cy.get('#year').select("2032")
    cy.get('#mount').select("12")
    cy.get('#cvc-cvv-code').type("222")
    cy.get('.btn-next').click()
    cy.get('#fillAddressFields').click()
    cy.get('.btn-next').click()
    cy.get('.btn-next').click()
    cy.location("pathname").should("equal" , "/hyeid-stage/member/payment")
    cy.contains('You have been charged')
})