describe ('My first test' , () => {


    it ('API' , () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method : 'Get' ,
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        } , {
            statusCode: 200 ,
            body: 
            [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "230252"
                }
            ]
        }).as('virtualLibrary')

        cy.get('[class="btn btn-primary"]').click()
        cy.wait('@virtualLibrary').then(({request,response}) => {

            cy.get('tr').should('have.length' , response.body.length + 1)
        })
        cy.get('p').should('have.text' , 'Oops only 1 Book available')
    })
})