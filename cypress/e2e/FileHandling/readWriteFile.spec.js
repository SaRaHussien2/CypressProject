/// <reference types="cypress" />

describe('read write file tests',()=>{

    beforeEach( ()=> {
        cy.fixture('example.json').as('data')
        // cy.log(data.name)    //can't access the data
        // cy.log(data.email)  //can't access the data
    })

    it('read file using fixture',()=>{
        cy.fixture('example.json').its('name').should('eq','Cypress')
    })

    it('read file ',()=>{
        cy.readFile('./cypress/fixtures/example.json').its('name').should('eq','Cypress')
    })

    it('Write file ',()=>{
        cy.writeFile('sample.txt','Hello, we are learning Cypress')
        cy.writeFile('sample.txt','\nHi, I am SaRa', {flag : 'a+'})
        cy.readFile('sample.txt').should('contain','Cypress')
    })
})