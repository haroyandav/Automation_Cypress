describe('My test Suite' , function() {

    it('Fixtures demo test' , function() {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.fixture('orangehrm').then((data) => {

            cy.get("input[placeholder='Username']").type(data.email);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click()


            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
              .should('have.text' , data.expected)

            cy.get('.oxd-userdropdown-tab > .oxd-icon').click() // Logout
                
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click() // Logout
        })
    })

    it('DATA DRIVEN TEST' , function() {

        cy.fixture('orangehrm2').then((data) => {

            cy.visit('https://opensource-demo.orangehrmlive.com/')

            data.forEach((userdata) => {

                cy.get("input[placeholder='Username']").type(userdata.email);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get("button[type='submit']").click()

                if(userdata.email == 'Admin' && userdata.password == 'admin123'){

                cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                  .should('have.text' , userdata.expected)
                
                  cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click()
                
                  cy.get('ul>li>a[href="/web/index.php/auth/logout"]').click()
                
                }else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                      .should('have.text' , userdata.expected)
                }
                
            })
        })

    })

})