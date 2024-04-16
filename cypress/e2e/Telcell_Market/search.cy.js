describe('Search' , () => {

    it('Search' , () => {
        cy.viewport(2000,1000)

        cy.visit('https://customer.dev.telcellmarket.am')
        
        cy.get('.styles__StyledRightColumn-sc-o0jqe-3 > .sc-aXZVg').click() // Cookies message

        let keyword = 'Phone'

        cy.get('[placeholder="Որոնել"]').type(keyword)

        cy.get('.styled__StyledCardContainer-sc-rshg8w-0').eq(0).then((searchResult) => { //populars
            
            cy.wrap(searchResult).find('li').each((elem) => {

                let result = elem.text()

                expect(result).to.includes(keyword)
      
            })
        cy.get('.styled__StyledCardContainer-sc-rshg8w-0').eq(0).then((populars) => { // populars
            
            cy.wrap(populars).find('li').eq(0).click()
            cy.wait(222)
            
            cy.get('.sc-djTQaJ > a > .sc-dBFDNq > .jKiWmg > .sc-bmzYkS > .sc-cwHptR').then ((productsName) => { // every products name
                
                let nameOfProduct = productsName.text()

                expect(nameOfProduct).to.include(keyword)
            })  

        })
            })
        })
    })