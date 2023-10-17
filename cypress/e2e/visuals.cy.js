/// <reference types= "cypress" />
import 'cypress-file-upload'


it('file upload' , () => {

    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('[id="file-upload"]').attachFile('pexels-photo-2379004.jpeg')
 })