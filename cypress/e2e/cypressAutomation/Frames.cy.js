import "cypress-iframe"

it.only('iframe' , () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.frameLoaded('[id="courses-iframe"]')
    cy.iframe().find("a[href*='mentorship']")
    
 }
)