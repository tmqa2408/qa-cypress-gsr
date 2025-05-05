import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then ("I should see {string} page", (text) => {
    cy.get('h1').contains(text);
});

Then("I fill in Search field with {string}", (text) => {
    cy.get('#edit-combine').type(text);
})

Then("I click on Apply button", () => {
    cy.get('#edit-submit-environmental-compliance').click();
})

Then("First row of the list results should contain {string}", (text) => {
    cy.get('#CAST-Conservation-Program > button').should('contain', text);
})

// Then("I select {string} from status dropdown", (text) => {
//     cy.get('#edit-field-complianc-value').select(text);
// })
