import allPageActions from "./pageObj"
let actions = new allPageActions()

describe('Practice' , function() {

    it('Letcode.in/test' , function () {

        cy.viewport(2000,1000)
        cy.visit('https://letcode.in/test')

        actions.iputPageActions('CYPRESS' , 'CYPRESS')
    })

    it('Advanced table page' , function() {

        cy.viewport(2000,1000)
        cy.visit('https://letcode.in/advancedtable')
        actions.advancedTablePage()
    })
})