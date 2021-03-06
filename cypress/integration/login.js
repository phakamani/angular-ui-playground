const { createYield } = require('typescript');

describe("Login page", () => {
  beforeEach(() => {
    // visit login page
    cy.visit('/');

    // assert if page contains "Login page"
    cy.contains('login');

    // user should click the submit button
    cy.get('[href="/login"]').click();

    // user should click the submit button
    cy.get('[href="/login"]').click();

    cy.contains('Login page');

  })

  it("should check for username and password mismatch", () => {
    // user should enter userName
    cy.get('[formControlName="userName"]').type("wrongUser");

    // user should enter password
    cy.get('[formControlName="password"]').type("password");

    // user should click the submit button
    cy.get('[type="submit"]').click();

    // Assert
    cy.contains('No matching user name and password found')
  })

  it("should login successfully", () => {
    // user should enter userName
    cy.get('[formControlName="userName"]').type("userName");

    // user should enter password
    cy.get('[formControlName="password"]').type("password");

    // user should click the submit button
    cy.get('[type="submit"]').click();

    cy.contains('login successful')
  })
})
