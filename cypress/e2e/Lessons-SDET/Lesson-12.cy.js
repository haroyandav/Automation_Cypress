/// <reference types= "cypress" />


describe('Handling Alerts' , function()
{
    it('Alert window with "Alert"' , function()
    {
        cy.visit('https://www.followthatpage.com/')
        cy.get('input[type=submit]').click()

        cy.on('window:alert' , function(alert1)
        {
            expect(alert1).to.equal('Invalid information entered.\n - Please enter an email address\nPlease correct these fields.')
        })
    })

    it('Alert window with "Confirm"' , function()
    {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#HTML9 > div.widget-content > button').click()

        cy.on('window:confirm' , function(alert2)
        {
            expect(alert2).to.equal('Press a button!')
        })
}
)}) 