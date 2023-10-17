describe ('Flow' , () => {

    let email = 'sss@mailinator.com'
    let firstitemName;
    let firstitemPrice;
    let seconditemName;
    let seconditemPrice;

    beforeEach('Login and checking' , () => {

        cy.viewport(2000, 1000);
        cy.visit('https://rahulshettyacademy.com/client');
        cy.get('[id="userEmail"]').type(email);
        cy.get('[id="userPassword"]').type('123456Tt.');
        cy.get('[id="login"]').click();

        
        
        cy.get('[class="card-body"]').eq(1).find('b').should('be.visible').invoke('text').then((name) => {

            firstitemName = name
            Cypress.env('firstitemName' , firstitemName)
        })
        cy.get('[class="text-muted"]').eq(1).should('be.visible').invoke('text').then((price) => {

            firstitemPrice = price
            Cypress.env('firstitemPrice' , firstitemPrice)
        })
        cy.get('[class="card-body"]').eq(2).find('b').should('be.visible').invoke('text').then((name1) => {

            seconditemName = name1
            Cypress.env('seconditemName' , seconditemName)
        })
        cy.get('[class="text-muted"]').eq(2).should('be.visible').invoke('text').then((price1) => {

            seconditemPrice = price1
            Cypress.env('seconditemPrice' , seconditemPrice)
        })

        cy.get('[class="btn w-10 rounded"]').eq(1).click()
        cy.get('[class="btn w-10 rounded"]').eq(2).click()

    })

    it('End to End flow' , () => {

        cy.get('[class="btn btn-custom"]').eq(2).click()

        const savedProductName = Cypress.env('firstitemName')
        const savedProductPrice = Cypress.env('firstitemPrice')
        const savedProductName1 = Cypress.env('seconditemName')
        const savedProductPrice1 = Cypress.env('seconditemPrice')

        cy.get('[class="cartSection"]').eq(0).find('h3').invoke('text').then((mycartpageItemName) => {

            expect(savedProductName).to.eq(mycartpageItemName)
        })

        cy.get('[class="prodTotal cartSection"]').eq(0).find('p').invoke('text').then((mycartpageItemPrice) => {

            expect(savedProductPrice).to.eq(mycartpageItemPrice)
        })
        cy.get('[class="cartSection"]').eq(1).find('h3').invoke('text').then((mycartpageItemName1) => {

            expect(savedProductName1).to.eq(mycartpageItemName1)
        })

        cy.get('[class="prodTotal cartSection"]').eq(1).find('p').invoke('text').then((mycartpageItemPrice1) => {

            expect(savedProductPrice1).to.eq(mycartpageItemPrice1)
        })
        
        cy.get('[type="button"]').eq(1).click()
        cy.get('[type="text"]').eq(4).invoke('text').then((emailchecking) => {

            expect(email).to.eq(emailchecking)
        })
        cy.get('[placeholder="Select Country"]').type('Ar')
        cy.get('section > button').each(($elem , index) => {

            let country = $elem.text()
            if(country.includes('Armenia')) {

                cy.wrap($elem).click()
            }
        })
        cy.get('[class="icon icon-arrow-right-circle"]').click({force:true})
        cy.get('td > label').eq(1).invoke('text').then((id) => {

            let result = id.replace(/\|/g, '')
        
        cy.get('td > label').eq(2).invoke('text').then((id2) => {

            let result2 = id2.replace(/\|/g, '')
            
        cy.wait(6000)
        cy.get('[class="btn btn-custom"]').eq(1).click()
        cy.wait(5000)
        
        cy.get('tbody > tr:nth-child(1) > th').invoke('text').then((tableresult2) => {

            let endresult2 = result2.trim()
            expect(endresult2).to.eq(tableresult2)
        cy.get('tbody > tr:nth-child(2) > th').invoke('text').then((tableresult) => {

            let endresult = result.trim()
            expect(endresult).to.eq(tableresult)
        })
        })
            })
        })

    })
});