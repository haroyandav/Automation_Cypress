/// <reference types = "Cypress" />

describe('Assertions demo' , ()=> {


    it('Implicit asserions' , ()=> {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include' , 'orangehrm')
                .and('eq' , 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                .and('contain' , 'orangehrm')
                .and('not.include' , 'greenhrm')
        
        cy.get('.orangehrm-login-branding > img')
          .should('be.visible')
          .and('exist')

        cy.get('input[name="username"]').type('Admin')
          .should('have.value' , 'Admin')
    })

    it('Explicit assertions' , function() {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        
        cy.get('.oxd-userdropdown-name').then(function(elem) {
            let expName = "Paul Collings"
            let actName = elem.text()
//The 1 and 2 are the same
            expect(expName).to.equal(actName) //1

            assert.equal(expName,actName) //2 


        })


    })



}) 



