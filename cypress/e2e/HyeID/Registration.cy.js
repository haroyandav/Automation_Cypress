import 'cypress-iframe'

describe('HyeID registration flow', () => {
    it('Registration', () => {
      cy.viewport(2000, 1000);
  
      let mailinatorEmail = `testuser${Math.floor(Math.random() * 123456789)}@mailinator.com`;
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
      cy.get('.text-center.d-inline-block').click()
      
      
      
  
cy.visit(`https://www.mailinator.com/v4/public/inboxes.jsp?to=${mailinatorEmail}`);
cy.wait(20000)
cy.contains('HyeID account verification').click()

cy.wait(2000);

cy.get('iframe[name="html_msg_body"]').then((iframe) => {
  const iframeContent = iframe.contents().find('body')
  cy.wrap(iframeContent).each(($elem) => {

    let emailcontent = $elem.text()
    if(emailcontent.includes('Your verification code is')) {

      let verificationCode = emailcontent.split('Your verification code is ')[1]
      cy.log(verificationCode)

      cy.visit(`https://development.connectto.com/hyeid-stage/auth/verify-account?email=${mailinatorEmail}`)
      cy.get('[id="verifyToken"]').click().type(verificationCode)
      cy.get('[type="submit"]').click()
      cy.wait(1000)
      cy.contains('Your account has been successfully verified').should('be.visible')
    }
  
      })
    
    })
    
  })

})