import 'cypress-iframe'
import 'cypress-file-upload';

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

cy.contains('noreply@hyeid.org').click()

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
      cy.wait(6000)
    }

      })
      /* cy.visit('https://development.connectto.com/hyeid-stage')
      cy.get('input[name=email]').type(mailinatorEmail)
      cy.get('input[name=password]').type('Dddddddddd1996.')
      cy.get('[type=submit]').click() */
      cy.loginHyeID(mailinatorEmail , 'Dddddddddd1996.')
      cy.wait(3000)
      if(cy.get('[class="btn bold a_hover_animation ng-star-inserted"]').contains(' Apply for HyeID Card ')){

        /*cy.get('[class="btn bold a_hover_animation ng-star-inserted"]').click()
        cy.get('[id="armFirstName"]').click({force:true}).type('Դավիթ')
        cy.get('[id="armLastName"]').click({force:true}).type('Հարոյան')
        cy.get('[class="btn bold font_size_ru save-btn"]').click()
        cy.get('[formcontrolname="dobD"]').select('10').should('have.value' , '10: 10')
        cy.get('[formcontrolname="dobM"]').select('July').should('have.value' , '6')
        cy.get('[formcontrolname="dobY"]').select('1996').should('have.value' , '1996')
        cy.get('[id="male"]').click()
        cy.get('[class="btn bold font_size_ru save-btn"]').click()
        cy.get('[formcontrolname="countryId"]').select('Armenia').should('have.value' , 'ARM')
        cy.get('[formcontrolname="stateId"]').select('Yerevan').should('have.value' , '21: 359')
        cy.get('[formcontrolname="cityId"]').select('Yerevan').should('have.value' , '7: 841')
        cy.get('[id="address"]').click({force:true}).type('aaaaaaaa67')
        cy.get('[id="zipCode"]').click({force:true}).type('0039')
        cy.get('[class="btn bold font_size_ru save-btn"]').click()
        cy.contains(' Skip for now ').click()
        cy.contains(' Skip for now ').click()
        cy.contains(' FINISH ').click()
        cy.contains('Congratulations! You have become a HyeID member.').should('be.visible')
        cy.get('[class="bold cursor_pointer"]').should('contain' , ' GO TO THE PAYMENT ')
        cy.get('[class="amount ng-star-inserted"]').should('contain' , '֏600.00')*/

        cy.applyHyeID()
      }
    })
  })
})