class allPageActions {
    iputPageActions(field1, field2) {

        cy.get('div .card a').then(function (editButton) {

            cy.wrap(editButton).eq(0).click().then(function () {

                cy.get("input[id='fullName']").should('have.attr', 'placeholder', 'Enter first & last name')
                    .and('be.visible')
                    .type(field1)
            })

            cy.get("input[id='join']").should('have.value', 'I am good')
                .and('be.visible')
                .clear()
                .type(field2)

            cy.get('[id="getMe"]').invoke('attr', 'value', field2)
                .should('have.attr', 'value', field2)

            let clearMefield = cy.get('[id="clearMe"]')
            
            clearMefield.clear()

            cy.get('[id="noEdit"]').should('have.attr', 'disabled')

            cy.get('[id="dontwrite"]').invoke('val').then(function (text) {

                let textt = text
                expect(textt).to.eq('This text is readonly')
            })
        })
    }

    advancedTablePage() {

        cy.get('select').select('25').then(function (length) {

            cy.get('tbody td:first-child').then(function (columnsLen) {

                let columns = columnsLen.length

                expect(columns).to.eq(25)
            })
        })
    }
}

export default allPageActions