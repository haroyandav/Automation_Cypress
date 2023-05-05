it('Want' , function(){

        cy.visit('https://want.am/')
        cy.get('#tygh_main_container > div.tygh-header.clearfix > div > div:nth-child(2) > div > div > ul.ty-menu__items.cm-responsive-menu.menu-desktop > li:nth-child(5) > a')
          .click()
        cy.get('#tygh_main_container > div.tygh-content.clearfix > div > div:nth-child(2) > div > div > div > div.ty-subcategories > div:nth-child(1) > a')
          .click()
})