describe('fixture' , () => {

    beforeEach(() => {
        
        cy.fixture('example2').then((data) =>{
            globalThis.user=data
        })
    });


    it('fixture' , () => {

        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        cy.get('[minlength="2"]').type(globalThis.user.name);
        cy.get('[name="email"]').type(globalThis.user.email);
        cy.get('[placeholder="Password"]').type(globalThis.user.password);
        cy.get('[id="exampleFormControlSelect1"]').select(globalThis.user.gender);
        cy.get('input[name="bday"]').type(globalThis.user.date);
    });

    it('fixture' , () => {

        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        cy.get('[minlength="2"]').type(globalThis.user.name);
        cy.get('[name="email"]').type(globalThis.user.email);
        cy.get('[placeholder="Password"]').type(globalThis.user.password);
        cy.get('[id="exampleFormControlSelect1"]').select(globalThis.user.gender);
        cy.get('input[name="bday"]').type(globalThis.user.date);
    });

    it('fixture' , () => {

        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        cy.get('[minlength="2"]').type(globalThis.user.name);
        cy.get('[name="email"]').type(globalThis.user.email);
        cy.get('[placeholder="Password"]').type(globalThis.user.password);
        cy.get('[id="exampleFormControlSelect1"]').select(globalThis.user.gender);
        cy.get('input[name="bday"]').type(globalThis.user.date);
    });
});