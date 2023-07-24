import 'cypress-iframe'

describe('HyeID registration flow', () => {
    it('Registration', () => {
      cy.viewport(2000, 1000);
  
      let mailinatorEmail = `testuser${Math.floor(Math.random() * 1234)}@mailinator.com`;
      let phoneNumber = `${Math.floor(Math.random() * 123456780)}`;
  
      cy.visit('https://development.connectto.com/hyeid-stage/auth/registration');
      cy.get('[id="name_form"]').type('Davit');
      cy.get('[id="surname_form"]').type('Haroyan');
      cy.get('[id="email_form"]').type(mailinatorEmail);
      cy.get('[class="selectable_phone_code_div"]').click();
      cy.get('[class="flags_ul"]').find('[class="flags_current_li ng-star-inserted"]').eq(3).click();
      cy.get('[formcontrolname="phone_form"]').click({ force: true }).type(phoneNumber);
      cy.get('[id="password_form"]').type('Dddddddddd1996.');
      cy.get('[id="conf_pass_form"]').type('Dddddddddd1996.');
      cy.get('.text-center.d-inline-block');
      

    
  })

    it('Mailinator' , () => {
      cy.viewport(2000,1000)

      cy.visit('https://www.mailinator.com/v4/public/inboxes.jsp?msgid=testuser3-1690202437-16549431')
      cy.wait(6000)
      cy.frameLoaded('[id="texthtml_msg_body"]', {log:false})
      cy.wait(6000)
      cy.iframe('[id="texthtml_msg_body"]').then((iframe) => {

        cy.wrap(iframe.contents().find('body'))
      })
  })
})