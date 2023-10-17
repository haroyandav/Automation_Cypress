it('end to end' , () => {

    cy.visit('https://rahulshettyacademy.com/angularpractice/shop')

    cy.get('[class="btn btn-info"]').eq(0).click()
    cy.get('[class="btn btn-info"]').eq(1).click()
    cy.get('[class="btn btn-info"]').eq(2).click()
    cy.get('[class="btn btn-info"]').eq(3).click()

    cy.get('[class="nav-link btn btn-primary"]').click()

    let sum = 0
    cy.get('tbody tr td:nth-child(4) strong').each(($el, index , $list) => {

        let amount = $el.text()
        let realamount = parseInt(amount.replace(/[^0-9]/g, ''), 10);
        // cy.log(realamount)

        sum = realamount + sum

    }).then((total) => {

        cy.log(sum)
    })

    cy.get('tbody tr:nth-child(5) td> h3 strong').then((total) => {

        let total1 = total.text()
        let total2 = parseInt(total1.replace(/[^0-9]/g, ''), 10)
        expect(Number(sum)).to.eq(Number(total2))
    })

    cy.get(':nth-child(6) > :nth-child(5) > .btn').click()
    cy.get('#country').type('Arme')
    cy.wait(7000)
    cy.get('.suggestions a').click()
    cy.get('[type="checkbox"]').click({force: true})
    cy.get('[value="Purchase"]').click()

    cy.get('.alert').should('include.text' , 'Success!')
})