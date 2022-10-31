/// <reference types="cypress" />

describe("describe block", () => {
  it("hello", () => {
    cy.visit("https://google.com");
    cy.get(".gLFyf",{timeout:1000}).type("iti {enter}");
  });
});
