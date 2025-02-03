import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Given("I visit the homepage", () => {
    cy.visit('/');
});

Then("I verified title", () => {
  cy.title().should('include', 'Home');
});

Then("I wait {int} seconds",(int) => {
    let time = int*1000;
    cy.log('The value is '+ time);
    cy.wait(time);
  });

When("I visit the login page", () => {
    cy.visit("/user/login");
});

When("I visit the user registration page", () => {
    cy.visit("/user/register");
});

Then("I verify dashboard page", () => {
  //  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
  cy.contains('Dashboard').should('be.visible');
  })