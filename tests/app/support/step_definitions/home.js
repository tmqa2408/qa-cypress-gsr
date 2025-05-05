import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { locators as HomeLocators } from '../../support/data/home/locators.js';
import { urls } from '../../support/data/urls.js';

before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

// Basic navigation steps
Given("I visit the homepage", () => {
    cy.visit('/', {
        timeout: 5000,
        retryOnNetworkFailure: true
    });
    cy.get('body').should('be.visible');
});

// Verification steps
Then("I verified title", () => {
    cy.title().should('include', 'Home');
});

Then("I wait {int} seconds", (int) => {
    cy.wait(int * 1000);
});

Then("I verified the footer is visible", () => {
    cy.get(HomeLocators.footer)
        .should('be.visible');
});

// Steps to work with the menu
When("I verified the dropdown menu is visible", () => {
    cy.get(HomeLocators.restorationAreasDropdown).should('be.visible');
});

When("I click on {string} dropdown menu", (menu) => {
    if (menu === "HowWeRestore") {
        cy.get(HomeLocators.howWeRestoreDropdown)
            .click()
            .then(() => {
                cy.get('.dropdown-menu.show').should('be.visible');
            });
    } else if (menu === "Restoration Areas") {
        cy.get(HomeLocators.restorationAreasDropdown)
            .click()
            .then(() => {
                cy.get(':nth-child(4) > .dropdown-menu').should('be.visible');
            });
    }
});

// Universal steps
Then("I click on {string} item", (item) => {
    const normalizedItem = item.replace(/[\s&]+/g, '');
    const selector = HomeLocators[`${normalizedItem}_item`];
    
    if (!selector) {
        throw new Error(`Selector for "${item}" not found in locators`);
    }
    
    if (urls[normalizedItem]?.startsWith('http')) {
        cy.get(selector)
            .should('have.attr', 'href')
            .and('include', urls[normalizedItem].replace('https://', ''));
    } else {
        cy.get(selector)
            .click({ force: true });
    }
});

Then("I should be redirected to {string}", (page) => {
    const expectedPath = urls[page.replace(/\s+/g, '')];
    if (!expectedPath) {
        throw new Error(`Path for "${page}" not found in urls configuration`);
    }
    
    if (expectedPath.startsWith('http')) {
        cy.get(HomeLocators[`${page.replace(/\s+/g, '')}_item`])
            .should('have.attr', 'href')
            .and('include', expectedPath.replace('https://', ''));
    } else {
        cy.url({ timeout: 8000 }).should('include', expectedPath);
    }
});

// Steps to check icons
Then("I verify the NOAA image icon is present", () => {
    cy.get('a[href*="noaa.gov"]').should('exist');
});

Then("I verify the RSS image icon is present", () => {
    cy.get('a[href="/rss.xml"]').should('exist');
});

Then("I verify the Contact Us link is present", () => {
    cy.get('.footer a[href*="contact-us"]').should('exist');
});

Then("Verified a block Projects Near You contains View Project Details button", () => {
    // We check the presence of the block and the button
    cy.contains('h2', 'Projects Near You').should('be.visible');
    cy.contains('a', 'View Project Details')
        .should('be.visible')
        .and('have.attr', 'href')
        .and('not.be.empty');
});
