/// <reference types = "Cypress" />


describe ('MyTestSuite' , function () {

    it ('Table test' , function () {

        cy.visit('https://testautomationpractice.blogspot.com/')
        
        cy.get('table[name=BookTable] tbody td:nth-child(1)').each(($e , index) => {

            var bookname = $e.text()
            if (bookname.includes('Learn JS')) {

                cy.get('table[name=BookTable] tbody td:nth-child(2)').eq(index).then( function (auth) {

                    var author = auth.text()
                    expect (author).to.eq('Animesh')
                })
            }
        })
    })
});