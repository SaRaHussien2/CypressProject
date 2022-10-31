/// <reference types="cypress" />

it('Google search 1st Test',() => {
    cy.log('Google 1st Test starts')
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('cypress{enter}')
    cy.log('Google 1st Test ends')
})

it('Google search 2nd Test',() => {
    cy.log('Google 2nd Test starts')
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('cypress{enter}')
    cy.log('Google 2nd Test ends')

})