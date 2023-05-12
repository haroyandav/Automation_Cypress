describe('Handle Tables' , function() {

    beforeEach('Login' , function(){

        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click()
        cy.get('.btn-close').click()
        cy.get(".parent[href='#collapse-5']").click()
        cy.get('#menu-customer>ul>li:first-child').click()
        

    });

    it('Check Number Rows & Columns' , function() {

        cy.get('tbody>tr').should('have.length' , 10)
        cy.get('thead>tr>td').should('have.length' , 7)

    });


    it('Check cell data from specific row and column.' , function() {

        let varEmail = 'gorankrezic90@gmail.com'
        cy.get('tbody tr:nth-child(4)>td:nth-child(3)').should('have.text' , varEmail)

    });

    it('Read all the rows and columns data in the first page' , function() {

        

    })


    it('Pagination' , function() {


    })
});