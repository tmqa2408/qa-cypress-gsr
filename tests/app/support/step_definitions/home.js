import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { locators as HomeLocators } from '../../support/data/home/locators.js';
import { urls } from '../../support/data/urls.js';

before(() => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Given("I visit the homepage", () => {
    cy.visit('/', {
        timeout: 120000, // увеличиваем тайм-аут до 2 минут
        retryOnNetworkFailure: true
    });
    // Ждем, пока страница полностью загрузится
    cy.get('body').should('be.visible');
});

Then("I verified title", () => {
  cy.title().should('include', 'Home');
});

Then("I wait {int} seconds",(int) => {
    cy.wait(int * 1000);
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
  });

When("I verified the dropdown menu is visible", () => {
    cy.get(HomeLocators.restorationAreasDropdown).should('be.visible');
});

Then("I click on Damage Assessment", () => {
    // Сначала открываем выпадающее меню
    cy.get('body > div:nth-child(2) > header:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > button:nth-child(2)').click();
    
    // Ждем, пока меню станет видимым и кликаем по элементу
    cy.get(HomeLocators.DamageAssessment_item)
        .should('be.visible')
        .click();
});

// Viewing the footer

Then("I verified the footer is visible", () => {
  cy.get(HomeLocators.footer).should('be.visible');
});

When("I click on Abour Us", () => {
  cy.get(HomeLocators.footerAboutUs).click();
});

Then("I should be redirected to About Us page", () => {
cy.url().should('include', '/about-us');
});

Then("I click on How We Ressore", () => {
  cy.get(HomeLocators.footerHowWeRestore).click();
});

Then("I should be redirected to How We Ressore page", () => {
  cy.url().should('include', '/how-we-restore');
});

When("I click on Restoration Areas", () => {
  cy.get(HomeLocators.footerRestorationAreas).click();
}); 

Then("I should be redirected to Restoration Areas page", () => {
    cy.url().should('include', '/restoration-areas');
});

When("I click on Data", () => {
  cy.get(HomeLocators.footerData).click();
}); 

Then("I should be redirected to Data page", () => {
    cy.url().should('include', '/science-data');
});

When("I click on Media & Press", () => {
  cy.get(HomeLocators.footerMediaPress).click();
}); 

Then("I should be redirected to Media & Press page", () => {  
    cy.url().should('include', '/media');
});

When("I click on Home", () => {
  cy.get(HomeLocators.footerHome).click();
}); 

Then("I should be redirected to Home page", () => {
    cy.url().should('include', '/');
});
  
// steps definitions for restoration areas dropdown menu

When("I click on Restoration Areas dropdown menu", () => {
    cy.get(HomeLocators.restorationAreasDropdown).click();
});

// Добавим новый селектор для кнопки меню Damage Assessment
const damageAssessmentButton = 'body > div:nth-child(2) > header:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > button:nth-child(2)';

Then("I click on {string} item", (item) => {
    // Заменяем пробелы и специальные символы на пустоту
    const normalizedItem = item.replace(/[\s&]+/g, '');
    const selector = HomeLocators[`${normalizedItem}_item`];
    
    if (!selector) {
        throw new Error(`Selector for "${item}" not found in locators. Tried key: "${normalizedItem}_item"`);
    }
    
    // Специальная обработка для выпадающих меню
    if (item === "Damage Assessment") {
        cy.get(HomeLocators.damageAssessmentDropdown).click();
        cy.wait(500);
    }
    
    // Добавляем проверку видимости перед кликом
    cy.get(selector)
        .should('be.visible')
        .click();
});

Then("I should be redirected to {string}", (page) => {
    const expectedPath = urls[page.replace(/\s+/g, '')];
    if (!expectedPath) {
        throw new Error(`Path for "${page}" not found in urls configuration.`);
    }
    cy.url().should('include', expectedPath);
});
