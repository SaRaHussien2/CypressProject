/// <reference types="cypress" />

import { loginPage } from "../support/pages/loginPage";
const LoginPage = new loginPage()

describe('try testing this - netlify app', () => {

    beforeEach(() => {
        LoginPage.navigate('https://trytestingthis.netlify.app')
    })

    it.only('login valid username and password ', () => {
        LoginPage.enterUsername('test')
        LoginPage.enterPassword('test')
        LoginPage.clickLogin()
        cy.contains('Login Successful')
      //  cy.contains('here').click()
      cy.clickLink('here')

    })

    it('login invalid username and valid password ', () => {
        LoginPage.enterUsername('testtest')
        LoginPage.enterPassword('test')
        LoginPage.clickLogin()
        cy.on('window:alert', txt => {
            expect(txt).to.be.equal('Wrong Credentials! Try again!')
        })
    })

    it('login valid username and invalid password ', () => {
        LoginPage.enterUsername('test')
        LoginPage.enterPassword('test123')
        LoginPage.clickLogin()
        cy.on('window:alert', txt => {
            expect(txt).to.be.equal('Wrong Credentials! Try again!')
        })
    })

})

