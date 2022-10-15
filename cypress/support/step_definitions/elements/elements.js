import {When, Then} from "@badeball/cypress-cucumber-preprocessor";

Then("element {string} should exist", (selector) => {
    cy.get(selector).should("exist");
});

Then("element {string} should contain {string}", (selector, value) => {
    cy.get(selector).should("contain", value);
});

Then("I should see element {string} that contains {string}", (selector, value) => {
    cy.get(selector).should("be.visible").should("contain", value);
})

Then("I should see element {string} with attribute {string} with value {string}", (selector, attribute, value) => {
    cy.get(selector)
    .should('have.attr', attribute, value).should('be.visible');
});
