/// <reference types= "cypress" />

describe ('UI Elements' , function () 
{
    it ('Verift inputbox and radio buttons' , function()
    {
        cy.visit('http://newtours.demoaut.com/') //Chka nman kayq 
        cy.url().should('include' , 'newtours')
        
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type('mercury')
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type('mercury')
        
        cy.get('input[name=login]').should('be.visible').click()

        cy.title().should('eq' , 'Find a Flight: Mercury Tours:')

        //Radio Buttons
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked')

        cy.get('[name=findFlights]').should('be.visible').click()
        cy.title().should('eq' , 'Select a Flight: Mercury Tours:')
    })
}) 

