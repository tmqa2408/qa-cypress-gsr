import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });

Then("I verify that the Recent News block is displayed", () => {
    cy.get(':nth-child(2) > .bs-region--right > .views-element-container').should('be.visible')
})

When("I open View the story archive link", () => {
    cy.get('.view-header > p > a').click();
})

Then("I verify that the Story Archive page is open for Alabama", () => {
    cy.get('#edit-field-tig-target-id').contains('Alabama');
})