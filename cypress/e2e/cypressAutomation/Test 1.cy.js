describe('' , () => {
    
    it.only('' , () => {
        cy.viewport(1400 , 1300)
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('[type="search"]').type('ca')
        cy.wait(2000)


        cy.get('.products').find('.product').then((items) => {

            let itemlength = items.length

            expect(itemlength).to.eq(4)

        cy.wrap(items).each(($el , index , $list) => {

            let name = $el.find('[class="product-name"]').text()

            if(name === 'Capsicum') {

                cy.wrap($el).contains('ADD TO CART').click()

                cy.log(`This is the index of item: ${index}`)
                
                expect(index).to.eq(2)
            }
          
        })
        
        })

    })

    it('' , () => {
        
        cy.viewport(1900,500)
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('[class="brand greenLogo"]').then((logo) => {

            let name = logo.text()
            cy.log(name)
        })
    })
    
    it('' , () => {

        
    })
        
})