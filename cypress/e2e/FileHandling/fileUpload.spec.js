/// <reference types="cypress" />

describe('Upload File Tests', () => {

    // it('upload file', () => {
    //     cy.visit('https://filebin.net/')

    //     // The photo exist in the fixture folder path
    //     cy.get('[id="fileField"]').attachFile('cypress.png')
    // })

    it.only('click on choose file', () => {
        cy.visit('https://trytestingthis.netlify.app/')

        cy.get('#myfile').attachFile('/../fixtures/example.json')
    })
})