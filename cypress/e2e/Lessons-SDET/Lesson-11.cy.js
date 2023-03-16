/// <reference types= "cypress" />


describe ('Lesson 11' , function()
{
    beforeEach(function (){
        cy.visit('https://demo.automationtesting.in/Register.html');

    })
    
    it('Check boxes' , function()
    {
        // cy.get('#Skills').select('Android').should('have.value' , 'Android')

        cy.get('#checkbox1').check().should('be.checked').and('have.value' , 'Cricket');
        cy.get('#checkbox2').check().should('be.checked').and('have.value' , 'Movies')
        cy.get('#checkbox3').click().should('be.checked').and('have.value' , 'Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')//.and('have.value' , 'Hockey')
        cy.get('#checkbox2').uncheck().should('not.be.checked')//.and('have.value' , 'Hockey')
        cy.get('#checkbox3').uncheck().should('not.be.checked')//.and('have.value' , 'Hockey')

        cy.get('input[type=checkbox]').check(['Cricket' , 'Movies'])
        
    })

    it('Skills Drop Down' , function()
    {
        cy.get('#Skills').select('C').should('have.value' , 'C')
    })

    it('Languages Multi Select' , function()
    {
        cy.get('#msdd').click({force : true})
        cy.get('.ui-corner-all').contains('Arabic').click({force : true})
        cy.get('.ui-corner-all').contains('Bulgarian').click({force : true})
        //cy.get('.ui-corner-all').contains('Catalan').click()
        //cy.get('.ui-corner-all').contains('Croatian').click()
        //cy.get('.ui-corner-all').contains('Czech').click()
        //cy.get('.ui-corner-all').contains('Danish').click()

    })

    it('Select Countries' , function()
    {
        cy.get('#basicBootstrapForm > div:nth-child(10) > div > span > span.selection > span').click({force : true})
        cy.get('body > span > span > span.select2-search.select2-search--dropdown > input').type('Aus{enter}')
    })

    it('Date Of Birth' , function()
    {
        cy.get('#yearbox').select('1996').should('have.value' , '1996')
        cy.get('#basicBootstrapForm > div:nth-child(11) > div:nth-child(3) > select').select('July').should('have.value' , 'July')
        cy.get('#daybox').select('10').should('have.value' , '10')
    })

    it('Password field' , function()
    {
        cy.get('#firstpassword').type('Dddddddddd1996.')
        cy.get('#secondpassword').type('Dddddddddd1996.')
    })

    it('Gender' , function()
    {
        cy.get('[value=Male]').check().should('be.checked').and('have.value' , 'Male')
        cy.get('[value=FeMale]').check().should('be.checked').and('have.value' , 'FeMale')
        
    })

    it('Phone number field' , function()
    {
        cy.get('[type=tel]').type('+37494780070')
    })

    it('Email field' , function()
    {
        cy.get('[type=email]').type('haroyandav@gmail.com')
    })
})

 