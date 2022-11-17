import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('user is on login page', () => {
    cy.visit('https://admin-demo.nopcommerce.com/login')
})

When('the user enters {string} and {string}', (username, password) => {
    cy.get('#Email').clear().type(username)
    cy.get('#Password').clear().type(password)

})

When('The user clicks on login button', () => {
    cy.get('.button-1').click()
})

Then('The user is navigated to the homepage', () => {
    cy.contains('Logout').click()
})