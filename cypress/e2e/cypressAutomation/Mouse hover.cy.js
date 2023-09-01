describe('' , () => {
        


    it('Mouse over' , () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.viewport(1700, 1200);

        cy.get('[id="mousehover"]').trigger('mouseover')
        cy.contains('Reload').click()
        
        
        
})

})