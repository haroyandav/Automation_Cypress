/// <reference types= "cypress" />


/*describe('Filter ToDo list' , function(){
        beforeEach (function(){
                cy.visit('http://todomvc-app-for-testing.surge.sh/')
                //cy.pause()

                cy.get('.new-todo').type('JS{enter}')
                cy.get('.new-todo').type('JAVA{enter}')
                cy.get('.new-todo').type('PYTON1{enter}')
                cy.get('.new-todo').type('PYTON2{enter}')
                cy.get('.new-todo').type('PYTON3{enter}')
                cy.get('.new-todo').type('PYTON4{enter}')
                
                cy.get('.todo-list li:nth-child(2) .toggle').click()
                cy.get(':nth-child(3) > .view > .toggle').click()
                //cy.get(':nth-child(1) > .view > .toggle').click()
        })

        it('Should filter only "Completed" ToDo list ' , function(){
                cy.get(':nth-child(3) > a').click()
                cy.get('label').should('have.length' , 2)
                cy.get(':nth-child(1) > .view > .toggle').should('be.checked')
                cy.get(':nth-child(2) > .view > .toggle').should('be.checked')
                
        })
        it('Should filter only "Active" ToDo list' , function(){
                cy.get(':nth-child(2) > a').click()
                cy.get('label').should('have.length' , 4)
                cy.get('.toggle').should('not.be.checked')
        })
        it('Should filter only "All" ToDo list' , function(){
                cy.get('.selected').click()
                cy.get('label').should('have.length' , 6)
                cy.get(':nth-child(2) > .view > .toggle').should('be.checked')
                cy.get(':nth-child(3) > .view > .toggle').should('be.checked')
                cy.get(':nth-child(1) > .view > .toggle').should('not.be.checked')
                cy.get(':nth-child(4) > .view > .toggle').should('not.be.checked')
                cy.get(':nth-child(5) > .view > .toggle').should('not.be.checked')
                cy.get(':nth-child(6) > .view > .toggle').should('not.be.checked')
                cy.contains('4 items left')
                
        })
        it('Should Clear completed' , function(){
                cy.contains('Clear completed').click()
                cy.get('label').should('have.length' , 4)
                cy.get('.toggle').should('not.be.checked')
        })
})*/









/*describe("ToDo actions" , function ()
{
        it("Should add a new todo to the list" , function (){
        cy.pause()
        
        cy.visit ("http://todomvc-app-for-testing.surge.sh/");
        
        cy.get(".new-todo" , {timeout: 6000}).type("Clean room{enter}")
        cy.get("label").should("have.text" , "Clean room")
        cy.get(".toggle").should("not.be.checked")
})

        it("Should mark a todo as complated" , function(){
        cy.pause()

        cy.get(".toggle").click()
        cy.get("label").should("have.css" , "text-decoration-line" , "line-through")
})

        it("Should clear complated todos" , function(){
        cy.pause()

        cy.contains("completed").click()
        cy.get(".todo-list").should('not.have.descendants')
})  
})*/









/*it ("Should open ToDo" , function (){
        cy.pause();

        cy.visit ("http://todomvc-app-for-testing.surge.sh/");
        cy.get('.new-todo').type("Cypress{enter}");
        cy.get('.new-todo').type("Davit Haroyan{enter}");
        cy.contains("2 items left");
        cy.get(':nth-child(1) > .view > .toggle').click();
        cy.contains("1 item left");
        cy.contains("Clear completed");
        cy.get(':nth-child(1) > .view > label').should("have.text" , "Davit Haroyan");
        cy.get(':nth-child(2) > .view > label').should("have.text" , "Cypress");
        cy.get('.new-todo').type("Դավիթ Հարոյան{enter}");
        cy.get(':nth-child(1) > .view > label').should("have.text" , "Դավիթ Հարոյան");
        cy.get('.completed > .view > .toggle').click();
        cy.contains("3 items left");
        cy.get(':nth-child(1) > .view > .toggle').click();
        cy.get(':nth-child(2) > .view > .toggle').click();
        cy.get(':nth-child(3) > .view > .toggle').click();
        cy.get('.new-todo').type("       {enter}"); // space 
        cy.contains("No items left");
        cy.get(':nth-child(1) > .view > .toggle').click();
        cy.get(':nth-child(2) > .view > .toggle').click();
        cy.get('.clear-completed').click();
        cy.contains("2 items left");
})*/