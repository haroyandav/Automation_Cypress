describe("HyeID blog posts" , () => {

    beforeEach('Login to system' , () => {
        cy.viewport(2000,1000)
        cy.loginHyeID('turkikirde@vusra.com' , 'Dddddddddd1996.')
    })

    it('Contacts' , () => {

        cy.get('.scroll-result').scrollTo('center').find('.connection_line').then((element) => {

            let length1 = element.length
            cy.log(`${length1}`);
            cy.log(typeof length1);

        
        cy.get('[class="dropdown-item semibold connection1_icon_a p-0"]').click()
            
            cy.wait(1000)
        
        cy.get('.scroll-result').scrollTo('center').wait(2000).find('.connection_line').then((element2) => {
                
            let length2 = element2.length
            cy.log(`${length2}`);
            cy.log(typeof length2);

            expect(length1).to.eq(length2)
            
            })
            
        })

    })

})