///<reference types="cypress" />

describe('Assertions', () => {
    it('demo', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('get').click()
        cy.get('#query-btn').click()
        cy.get('#query-btn').should('contain', 'Button')
        .should('be.enabled')
        .and('be.visible')
        .and('have.class','query-btn')
    })
})