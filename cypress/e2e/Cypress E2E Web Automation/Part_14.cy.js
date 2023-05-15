import 'cypress-file-upload';
/// <reference types = "cypress-xpath" />

describe('File Uploads' , () => {

    it('Single File Upload' , function() {

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload', {includeShadowDom: true}).attachFile('51KomX7KPZL._AC_SY741_.jpeg')
        cy.get('#file-submit', {includeShadowDom: true}).click()
        cy.get('#uploaded-files', {includeShadowDom: true}).should('include.text' , '51KomX7KPZL._AC_SY741_.jpeg')
    });

    it('File Upload - Rename' , function() {

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload', {includeShadowDom: true}).attachFile({filePath : '51KomX7KPZL._AC_SY741_.jpeg' , fileName : 'myFile=?.png'})
        cy.get('#file-submit', {includeShadowDom: true}).click()
        cy.get('#uploaded-files', {includeShadowDom: true}).should('include.text' , 'myFile=?.png')
    })

    it('File Upload - Drag and drop' , function() {

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload', {includeShadowDom: true}).attachFile('51KomX7KPZL._AC_SY741_.jpeg' , {subjectType : 'drag-n-drop'})
        cy.get('#drag-drop-upload', {includeShadowDom: true}).contains('51KomX7KPZL._AC_SY741_.jpeg')

    })

    it('Attach multiple files' , function() {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload', {includeShadowDom: true}).attachFile(['51KomX7KPZL._AC_SY741_.jpeg' , 
                                             'pexels-photo-2379004.jpeg' , 
                                             'image_2022_06_15T10_59_08_230Z.png' , 
                                             'hghg.jpg' , 
                                             'fabio-oyXis2kALVg-unsplash.jpg' , 
                                             '64e1a0932027e743aaf12b7f91aa5ab0_original.jpg'])
        
        cy.get('#fileList > li', {includeShadowDom: true}).should('have.length' , 6)
    })

    it('File upload - Shadow Dom' , function() {

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')

        cy.get('.smart-browse-input' , {includeShadowDom: true}).attachFile('hghg.jpg')
        cy.get('.smart-item-name' , {includeShadowDom: true}).should('have.text' , 'hghg.jpg')
        cy.get('smart-button[class="smart-upload-all-button success smart-element smart-button"]' , {includeShadowDom: true})
          .should('be.visible')
        cy.get('smart-button[class="smart-cancel-all-button error smart-element smart-button"]' , {includeShadowDom: true})
          .should('be.visible')
        cy.get('smart-button[class="smart-pause-all-button primary smart-element smart-button"]' , {includeShadowDom: true})
          .should('be.visible')
        
    })

    it("HyeID blog post's photo upload" , function() {

        cy.visit('https://development.connectto.com/hyeid-stage/auth/login')
        cy.get("#email_form").type('turkikirde@vusra.com')
        cy.get("#password_form").type('Dddddddddd1996.')
        cy.get("button[type='submit']").click()
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
})