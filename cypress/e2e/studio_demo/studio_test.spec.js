describe('Cypress studio demo', () => {
    it('login test', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://trytestingthis.netlify.app/');
        cy.get('#owc').select(['option 2']);
        cy.get('[name="option2"]').check();
        cy.get('[name="option3"]').check();
        cy.get('#a').click();
        cy.get('form > fieldset').click();
        cy.get('#fname').clear('sa');
        cy.get('#fname').type('sara');
        cy.get('#lname').clear('t');
        cy.get('#lname').type('test');
        cy.get('form > fieldset').click();
        /* ==== End Cypress Studio ==== */
    })
})