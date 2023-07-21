describe ('Statuses of User' , () => {


    beforeEach('Login to account' , () => {
        cy.viewport(2000,1000)
        cy.loginHyeID('turkikirde@vusra.com' , 'Dddddddddd1996.')
        
    })

    it('Statuses of User' , () => {
        cy.wait(2000)
        cy.reload()
        cy.get('[class="content-center"]').find('[class="bold"]').should('have.text' , 'Davit Haroyan').and('be.visible')
        cy.reload()
        cy.get('div').find('[class="bold font_size_refer_hy"]').then((statusOfUser) => {

            let status = statusOfUser.text().trim()
            
            if ( status.includes('Approved')) {

                cy.get('app-right-aside').find('[routerlink="/members-map"]').click()
            } else {
                cy.log('The user does not Approved')
            }

            if( status.includes('Pending payment')) {

                cy.get('[class="content-center"]').find('[class="payment_a_hot bold font_size_ru_"]').then((pendingPayment) => {

                    cy.wrap(pendingPayment).should('have.text' , ' GO TO THE PAYMENT ').and('be.visible')
                    cy.wrap(pendingPayment).click()
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
                    cy.wait(6000)
                    cy.get('[class="success-text success_text_checkout"').find('[class="semibold padd_text_payment"]').then((afterpaymentcheck) => {

                        cy.wrap(afterpaymentcheck).should('contain' , 'You have been charged')
                    })

                })
            }

            if ( status.includes('Pending Verification')) {
                
                cy.loginHyeIDadmin('cs_manager@hyeid.org' , 'Test1234')
                cy.get('app-sortable-table-header').find('thead').then((thead) => {

                    cy.wrap(thead).find('th').eq(8).then((email) => {
                        cy.wrap(email).find('input').type('turkikirde@vusra.com')
                    })
                })
                cy.wait(1000)

                cy.get('tbody').find('td').eq(26).then((editactions) => {
                    cy.wrap(editactions).find('[title="Verify"]').click()
                })

                cy.get('[class="card-footer pl-0 bg-white"]').find('[class="fa fa-check-circle-o"]').click()
                cy.get('[class="btn btn-danger"]').click()
            }

            if( status.includes('Pending approval')){

                
                cy.loginHyeIDadmin('cs_manager@hyeid.org' , 'Test1234')
                cy.get('app-sortable-table-header').find('thead').then((thead) => {

                    cy.wrap(thead).find('th').eq(8).then((email) => {
                        cy.wrap(email).find('input').type('turkikirde@vusra.com')
                    })
                })
                cy.wait(1000)

                cy.get('tbody').find('td').eq(26).then((editactions2) => {
                    cy.wrap(editactions2).find('[title="Verify"]').click()
                })

                cy.get('[class="card-footer pl-0 bg-white"]').find('[class="fa fa-thumbs-o-up"]').click()
                cy.get('[class="btn btn-danger"]').click()
            }
        })
        
    })
})