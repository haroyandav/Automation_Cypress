/// <reference types= "cypress" />

it("Admin Approve Flow", function (){
    cy.visit("https://development.connectto.com/hyeid-admin-stage/#/account/login")
    cy.pause()
    cy.get('.mb-3 > .form-control').type("cs_manager@hyeid.org")
    cy.get('.mb-4 > .form-control').type("Test1234")
    cy.get('.col-8 > .btn').click()
    cy.get('[style="min-width: 80px;"] > :nth-child(3) > .m-0 > .col-12').type("goydukekni@gufum.com")
    cy.get('a > .btn > .fa').click()
    
})