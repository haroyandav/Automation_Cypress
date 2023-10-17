describe ('Creation status post' , () => {

    
    it('Creation status post' , () => {
        cy.viewport(2000,1000)
        function generateRandomText(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:"<>?-=[];,./';
            let randomText = '';
        
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                randomText += characters[randomIndex];
            }
        
            return randomText;
        }
        
        const randomText = generateRandomText(100);
        

        cy.loginHyeID('turkikirde@vusra.com' , 'Dddddddddd1996.')
        cy.get('[id="open-custom-dialog11"]').click()
        cy.get('[class="angular-editor-textarea"]').eq(0).click().type(randomText,{force:true})
        cy.get('[class="post_btn semibold"]').eq(0).click()
        cy.get('[class="ng-tns-c16-0"]').should('include.text' , 'successfully added.')
        cy.wait(6000)
        cy.get('[class="post-body mb-3 ng-star-inserted"]').each(($el , index , $list) => {

            let bodyText = $el.text()
            
            if(bodyText.includes(randomText)) {

                expect(index).to.eq(0)

            }
            
        }).then(() => {
        cy.get('[data-toggle="modal"]').eq(0).click({force:true})
        cy.get('[class="edit_btn btn p-0 m-0"]').eq(1).click({force:true})
        cy.get('[class="delete_btn"]').eq(2).click()
        cy.get('[class="ng-tns-c16-0"]').should('include.text' , 'successfully deleted')
            
        })
    })
})