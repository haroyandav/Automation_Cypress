import 'cypress-file-upload';

describe('Edit profile photo' , () => {

    beforeEach('Login' , function() {

        cy.visit('https://development.connectto.com/hyeid-stage/auth/login')
        cy.get("#email_form").type('turkikirde@vusra.com')
        cy.get("#password_form").type('Dddddddddd1996.')            
        cy.get("button[type='submit']").click()
        
});

    it("Edit profile photo" , function() {

        cy.get(".bold.font_size_hy_home.font_size_ru_home.font_size_hy_click_").click()
        cy.get("div[class='data-page-edit-icon'] a img").click()
        cy.get("app-member-form[action='edit']>ul>li:nth-child(4)")
          .click()
        cy.get('input[id="picFile1"]').attachFile('pexels-photo-2379004.jpeg')
        cy.wait(2000)
        cy.get('.modal-choose-take-btn.ml-2.d-flex.a_hover_animation.ng-star-inserted').click()
        cy.wait(5000)
        cy.get("button[type='submit']").click()
        cy.get('p.ng-tns-c15-0').should('have.text' , 'Your profile has been successfully edited.')
    })
    
    it('Edit profile photo """""not a face picture""""" ' , function() {

        cy.get(".bold.font_size_hy_home.font_size_ru_home.font_size_hy_click_").click()
        cy.get("div[class='data-page-edit-icon'] a img").click()
        cy.get("app-member-form[action='edit']>ul>li:nth-child(4)")
          .click()
        cy.get('input[id="picFile1"]').attachFile('hghg.jpg')
        cy.get('.modal-choose-take-btn.ml-2.d-flex.a_hover_animation.ng-star-inserted').click()
        cy.wait(4000)
        cy.get(".error-message.ng-star-inserted").should('have.text' , 'This photo cannot be approved. Please try again')

    })
});

