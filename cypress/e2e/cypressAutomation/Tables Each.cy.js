describe('' , () => {
        


    it('Tables , EACH' , () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.viewport(1700, 1200);
        cy.get('[name="courses"] > tbody > tr > th')
          .should('have.length' , 3)
        cy.get('[name="courses"] > tbody >tr > th:first-child')
          .should('have.text' , 'Instructor');
        cy.get('[name="courses"] > tbody >tr > th:nth-child(2)')
          .should('have.text' , 'Course');
        cy.get('[name="courses"] > tbody >tr > th:last-child')
          .should('have.text' , 'Price');

        cy.get('[name="courses"] > tbody >tr >td:nth-child(2)').each(($elem , index) => {

            if($elem.text() === 'Write effective QA Resume that will turn to interview call') {

                /* cy.get('[name="courses"] > tbody >tr:nth-child(11) >td:last-child')
                  .should('have.text' , 0) */

                cy.get('[name="courses"] > tbody >tr >td:nth-child(2)').eq(index).next().then((price) => {

                    expect(price.text()).to.eq('0')
                
                  })
                cy.get('[name="courses"] > tbody >tr >td:nth-child(2)').eq(index).prev().then((instructor) => {

                    expect(instructor.text()).to.eq('Rahul Shetty')
                })
                
            }
        })
    })
        
})