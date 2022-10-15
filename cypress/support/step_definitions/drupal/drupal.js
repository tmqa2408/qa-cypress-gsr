import { When } from "@badeball/cypress-cucumber-preprocessor"

When("I view the homepage", () => {
    cy.visit("/");
});

When("I visit the login page", () => {
    cy.visit("/user/login");
});

When("I visit the user registration page", () => {
    cy.visit("/user/register");
});
