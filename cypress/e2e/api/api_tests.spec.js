/// <reference types="cypress" /> 


describe('Test the Get method of Api request', () => {
    Cypress.config('baseUrl', 'https://reqres.in/api')

    it('Get 1', () => {
        cy.request('GET', '/users?page=2').then((response) => {
            expect(response.status).to.equal(200),
                expect(response).to.have.property('status', 200),
                expect(response.body).not.to.be.null,
                expect(response.body).to.have.property('page', 2),
                expect(response.body.data).to.have.length(6)
        })
    })


    // Using Alias
    it('Get 2', () => {
        cy.request('GET', '/users?page=2').as('user_list')

        cy.get('@user_list')
            .should((response) => {
                expect(response.status).to.equal(200),
                    expect(response).to.have.property('status', 200),
                    expect(response.body).not.to.be.null,
                    expect(response.body).to.have.property('page', 2),
                    expect(response.body.data).to.have.length(6)
            })
    })

    // Using Object and Put the Headers
    it('Get 3', () => {
        cy.request({
            'method': 'GET',
            'url': '/users?page=2',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            expect(response.status).to.equal(200),
                expect(response).to.have.property('status', 200),
                expect(response.body).not.to.be.null,
                expect(response.body).to.have.property('page', 2),
                expect(response.body.data).to.have.length(6)
        })
    })


})

describe('Test the POST method of Api request', () => {

    //this part is always common in all the API URLs  
    // Cypress.config('baseUrl', 'https://reqres.in/api')
    it('POST 1', () => {
        cy.request({
            'method': 'POST',
            'url': '/users',
            body: {
                "name": "SaRa",
                "job": "Tester"
            }
        }).then((response) => {
            expect(response).to.have.property('status', 201)
            expect(response.status).to.equal(201)
            expect(response.body).not.to.be.null
            expect(response.body).to.have.property('name', 'SaRa')
        })
    })
    // Store the body separately into a variable 
    it('POST 2', () => {
        const reqBody = {
            "name": "SaRa",
            "job": "Tester"
        }
        cy.request('POST', '/users', reqBody)
            .then((response) => {
                expect(response).to.have.property('status', 201)
                expect(response.status).to.equal(201)
                expect(response.body).not.to.be.null
                expect(response.body).to.have.property('name', 'SaRa')
            })
    })
})

describe('Put and Delete', () => {

    it('PUT', () => {
        cy.request({
            'method': 'PUT',
            'url': '/users/2',
            body: {
                "name": "Yara",
                "job": "Student"
            }
        }).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.status).to.equal(200)
            expect(response.body).not.to.be.null
            expect(response.body).to.have.property('name', 'Yara')
        })
    })

    it('Delete', () => {
        cy.request('Delete', '/users/2').then((response) => {
            expect(response).to.have.property('status', 204)
            expect(response.status).to.equal(204)
            expect(response.body).not.to.be.null
            expect(response.body).not.to.have.property('name', 'Yara')
        })
    })
})