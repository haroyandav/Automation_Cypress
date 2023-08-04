describe('' , () => {
        

    it('' , () => {
        
        cy.viewport(2000 , 1300)

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("input[type='checkbox']").check(['option1' , 'option2' , 'option3'])
        cy.get("input[type='checkbox']").uncheck(['option1' , 'option2' , 'option3'])

    })

    it.only('Dynamic drop-down' , () => {
        
        cy.viewport(2000 , 1300)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="autocomplete"]').type('Ar')

        cy.get('.ui-menu-item div').each(($el , index , $list) => {

            let textel = $el.text()

            if(textel === 'Western Sahara') {

                cy.get($el).click()
                cy.log(`Index : ${index}`);
                cy.get('[id="autocomplete"]').should('have.value' , 'Western Sahara')
            }
        })
    })
        
})