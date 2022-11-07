/// <reference types="cypress-downloadfile"/>


describe('Download file', () => {
    it('download file', () => {
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
    })
})