import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });

When("I go on {string}", (url) => {
    cy.visit(url, {failOnStatusCode: false});
//    cy.screenshot();
});

Then("I should see {string}", (text) => {
    cy.contains(text);
});

Then("I should see 'About Google'", () => {
    cy.contains("About Google");
})
