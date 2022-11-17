describe('Cypress studio demo', () => {
    it('login test', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://trytestingthis.netlify.app');
        cy.get('#female').check();
        cy.get('#option').select('option 1');
        cy.get('#owc').select(['option 1']);
        cy.get('#owc').select(['option 1', 'option 2']);
        cy.get(':nth-child(35)').click();
        cy.get('[name="option1"]').check();
        cy.get('#favcolor').click();
        cy.get('form > fieldset').click();
        cy.get('[for="ranges"]').click();
        cy.get('#a').click();
        /* ==== End Cypress Studio ==== */
    })
})