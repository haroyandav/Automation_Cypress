
describe("Iterate over elements", () => {

    it.skip("Log information of all hair care products", () => {
        cy.visit("https://automationteststore.com/index.php?rt=product/category&path=52");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($elem, index, $list) => {

            cy.log('Index' + ' : ' + index + ' : ' + $elem.text())
        })
    });

    it("Add specific product to basket", () => {
        cy.visit("https://automationteststore.com/index.php?rt=product/category&path=52");

        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($elem, index, $list) => {

            if ($elem.text().includes('Curls to straight Shampoo')) {

                /*const productPrice = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
                cy.log(productPrice); */

                const productName = $elem.text()

                cy.get('a.productcart').eq(index).click()

                cy.get('.dropdown-toggle').eq(2).click()

                cy.get('.table-bordered>tbody:nth-child(1)>tr>td:nth-child(2)').invoke('text')

                    .then((text) => {

                        const actualProductName = text.trim()

                        expect(actualProductName).to.eq(productName)
                    })

            }
        })
    });
});