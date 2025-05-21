import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I verified if the Site Improve row is visible", () => {
  cy.get('script[src*="page.js"]')
    .should("have.attr", "src")
    .and("include", "https://static.addtoany.com/menu/page.js");
});
