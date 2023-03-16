/// <reference types= "cypress" />

context ('Actions' , function(){

  beforeEach(function(){
  cy.visit('https://example.cypress.io/commands/actions')
  })

it('.type() - type into a DOM element' , function(){
  cy.get('#email1').type('fake@email.com').should('have.value' , 'fake@email.com')
    .type('{leftarrow}')
    .type('{selectall}{backspace}')
    .type('slow.typing@email.com' , {delay: 100})
    .should('have.value' , 'slow.typing@email.com')

  cy.get('#actions > div > div:nth-child(2) > div > form > div:nth-child(2) > textarea')
    .type('Disabled Error Checking' , { force: true })
    .should('have.value', 'Disabled Error Checking')
  })

it('.focus() - focus on a DOM element ' , function(){
  cy.get('#password1').focus()
    .should('have.class', 'focus')
    .prev().should('have.attr' , 'style' , 'color: orange;')
    })

it('.blur() - blur off a DOM element', function() {
        
  cy.get('#fullName1').type('About to blur').blur()
    .should('have.class', 'error')
    .prev()
    .should('have.attr', 'style', 'color: red;')
      })

it('.clear() - clears an input or textarea element', function() {
        
  cy.get('#description').type('Clear this text')
    .should('have.value', 'Clear this text')
    .clear()
    .should('not.have.value')
      })

it('.submit() - submit a form', function() {
        
  cy.get('.action-form > .form-group')
    .find('[type="text"]').type('HALFOFF')
    
  cy.get('.action-form').submit()
          .next().should('contain' , 'Your form has been submitted!' )
      })

it('.click() - click on a DOM element' , function(){
  
  cy.get('#actions > div > div:nth-child(17) > div > button').click()
    
  cy.get('#action-canvas').click('topRight')
  cy.get('#action-canvas').click('center')
  cy.get('#action-canvas').click('bottomLeft')
  cy.get('#action-canvas').click('bottom')
  cy.get('#action-canvas').click('bottomRight')
  cy.get('.action-labels>.label').click({ multiple: true })
  cy.get('.action-opacity>.btn').click({ force: true })
      
      })

it('.dblclick() - double click on a DOM element', () => {
        
  cy.get('#actions > div > div:nth-child(20) > div').dblclick()
  cy.get('.action-input-hidden').should('be.visible')
      
      })

it('.rightclick() - right click a DOM element' , function(){

  cy.get('#actions > div > div:nth-child(23) > div').rightclick()//.should('not.be.visible')
  cy.get('.rightclick-action-input-hidden').should('be.visible')
    
      })

it('.check() - check a checkbox or radio' , function(){
  
  cy.get('#actions > div > div:nth-child(26) > div > div.action-checkboxes > div:nth-child(1) > label > input[type=checkbox]').not('[disabled]')
    .check().should('be.checked')
      
  cy.get('#actions > div > div:nth-child(26) > div > div.action-checkboxes > div.checkbox.disabled > label > input[type=checkbox]').should('be.disabled')
    .check({force: true }).should('be.checked')
      
  cy.get('#actions > div > div:nth-child(26) > div > div.action-checkboxes > div:nth-child(3) > label > input[type=checkbox]').should('not.be.disabled')
    .check().should('be.checked')
      })

it('.select() - select an option' , function(){
  
  cy.get('#actions > div > div:nth-child(32) > div > form > select.form-control.action-select')
          .should('have.value' , '--Select a fruit--')
        
  cy.get('#actions > div > div:nth-child(32) > div > form > select.form-control.action-select')
          .select('apples')
    
  cy.get('#actions > div > div:nth-child(32) > div > form > select.form-control.action-select')
          .should('have.value' , 'fr-apples' )
    
  cy.get('#actions > div > div:nth-child(32) > div > form > select.form-control.action-select-multiple')
    .select(['oranges' , 'bananas' , 'apples'])
    .invoke('val')
    .should('deep.equal' , ['fr-apples' , 'fr-oranges' , 'fr-bananas'])
    })

it('.scrollIntoView() - scroll an element into view' , function(){
    
  cy.get('#scroll-horizontal button').should('not.be.visible')
  cy.get('#scroll-horizontal button').scrollIntoView()
    .should('be.visible')
  
  cy.get('#scroll-vertical > div > button').should('not.be.visible')
  cy.get('#scroll-vertical > div > button').scrollIntoView()
    .should('be.visible')

  cy.get('#scroll-both > div > .btn').should('not.be.visible')
  cy.get('#scroll-both > div > .btn').scrollIntoView( { duration: 4000 } )
    .should('be.visible')
    })

it('cy.scrollTo() - scroll the window or element to a position' , function(){

  cy.scrollTo('bottom')

  cy.get('#scrollable-horizontal').scrollTo('right')

  cy.get('#scrollable-vertical').scrollTo(250, 250 , { duration : 1000 })

  cy.get('#scrollable-both').scrollTo('10%', '90%' , { duration: 1000 })

  cy.get('#scrollable-vertical').scrollTo('center' , { easing: 'linear' } , {duration : 1000} )

  cy.get('#scrollable-both').scrollTo('bottomRight')
    
    })
    
it('.trigger() - trigger an event on a DOM element' , function(){

  cy.get('#actions > div > div:nth-child(41) > div > form > fieldset > input')
    .invoke('val' , '100')
    .wait(1000)
    .trigger('change')
  cy.get('fieldset > p')
    //.siblings('p')
    .contains('100').should('have.text' , '100')
    })
  })