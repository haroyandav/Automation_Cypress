describe('Search' , () => {

    it('Search' , () => {
        cy.viewport(2000,1000)

        cy.visit('https://telcell.market/')
        
        let keyword = 'Apple'

        cy.get('[placeholder="Որոնել"]').type(keyword)

        cy.get('.styled__StyledCardContainer-sc-rshg8w-0').eq(0).then((searchResult) => {

            cy.wrap(searchResult).find('li').each((elem) => {

                let result = elem.text()

                expect(result).to.includes(keyword)
            })
        })
    })
})