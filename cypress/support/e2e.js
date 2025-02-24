import '@shelex/cypress-allure-plugin';
import "allure-cypress";

before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });