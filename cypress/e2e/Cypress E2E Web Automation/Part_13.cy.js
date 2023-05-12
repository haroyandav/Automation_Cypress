import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe('Mouse Operations' , function() {

    it('Mouse Hover' , function() {

        cy.visit('https://demo.opencart.com')

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
          .should('not.be.visible')

        cy.get('li[class="nav-item dropdown"]:first-child').trigger('mouseover').click()
        
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
          .should('be.visible')

        cy.reload()

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link')
          .should('not.be.visible')

        cy.get('li[class="nav-item dropdown"]:first-child').trigger('mouseover').click()

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link')
        .should('be.visible')
    })

    it('Right Click' , function() {

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu') // right click
        cy.get('.context-menu-icon-copy').should('be.visible')
        cy.get('.context-menu-icon-paste').should('be.visible')
        cy.get('.context-menu-icon-edit').should('be.visible')
        cy.reload()
        cy.get('.context-menu-one.btn.btn-neutral').rightclick() // right click
        cy.get('.context-menu-icon-copy').should('be.visible')
        cy.get('.context-menu-icon-paste').should('be.visible')
        cy.get('.context-menu-icon-edit').should('be.visible')

    })

    it('Double click' , function() {

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded("#iframeResult")

        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick')
        cy.iframe("#iframeResult").find("#field2").should('have.value' , 'Hello World!')
cy.reload
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe("#iframeResult").find("#field2").should('have.value' , 'Hello World!')
    })

    it('Drag and drop using plugin' , function() {

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').drag('#box106' , {force:true})
        cy.get('#box7').drag('#box107' , {force:true})
    })


    it.only('Scrolling page' , function() {

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        cy.get(':nth-child(1) > tbody > :nth-child(9) > :nth-child(1) > img').scrollIntoView({duration:4000})
        cy.get(':nth-child(113) > :nth-child(2)').scrollIntoView({duration:5500})
    })
})
