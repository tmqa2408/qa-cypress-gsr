import { Given,Then, When } from "@badeball/cypress-cucumber-preprocessor";

//Given("I visit the homepage", () => {
//  cy.visit("/");
//});

When("I send a GET request to {string}", (path) => {
  cy.request(`${'/'}${path}`).as("response");
});

Then("Verify that the status code is {int}", (statusCode) => {
  cy.get("@response").then((response) => {
    expect(response.status).to.eq(statusCode);
  });
});