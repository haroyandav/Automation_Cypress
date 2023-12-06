/* describe ('read and write files' , () => {

    beforeEach(() => {

        cy.fixture('example2.json').as('data')
    })

    it('read and write files' , () => {

        cy.fixture('example2.json').its('date').should('eq' , '2023-10-10')
    })

    it('' , () => {

        console.log(this.data.email);
    })
}) */

describe('read and write files', () => {
    
    beforeEach('' , () => {
        cy.fixture('example2.json').as('FixturesData')
    })

    it('read and write files', function () {
        cy.get('@FixturesData').its('date').should('eq', '2023-10-10');
    });

    it('', function () {
        cy.log(this.FixturesData.name);
    });
});