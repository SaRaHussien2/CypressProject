/// <reference types="cypress" />

describe('read write file tests', () => {

    // example.json file exist below fixtures folder
    beforeEach(() => {

        cy.fixture('example.json').then((data) => {
            cy.log(data.name)
            cy.log(data.email)
        })
    })
    it('read file using fixture', () => {
        cy.fixture('example.json').its('name').should('eq', 'Cypress')
    })

    it('read file ', () => {
        cy.readFile('./cypress/fixtures/example.json').its('name').should('eq', 'Cypress')
    })

    it.only('Write file ', () => {
        cy.writeFile('sample.txt', 'Hello, we are learning Cypress')
        // { flag: 'a+' } ==>  to append  to the file whatever exists
        cy.writeFile('sample.txt', '\nHi, I am SaRa', { flag: 'a+' })
        cy.readFile('sample.txt').should('contain', 'Cypress')
    })
})