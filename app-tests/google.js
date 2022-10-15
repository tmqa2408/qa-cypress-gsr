import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit {string}", (url) => {
    cy.visit(url);
});

Then("I should see a search bar", () => {
    cy.get("input").should(
        'have.attr',
        'aria-label',
        'Search'
    );
});

Then("I should see 'About Google'", () => {
    cy.contains("About Google");
})
