export class loginPage{

    // Objects and Locators
    loginPage_username = '#uname'
    loginPage_password = '#pwd'
    loginPage_submitBtn =   '[type="submit"]'


    // Methods and Actions
    navigate(url){
        cy.visit(url)
    }

    enterUsername(username) {
        cy.get(this.loginPage_username).type(username)
    }
    
    enterPassword(password) {
        cy.get(this.loginPage_password).type(password)
    }

    clickLogin() {
        cy.get(this.loginPage_submitBtn).click()
    }
}