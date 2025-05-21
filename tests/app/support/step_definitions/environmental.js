import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { locators as EnvLocators } from "../data/environmental/locators.js";

When("I visit {string}", (path) => {
  cy.visit(path);
  cy.get("body").should("be.visible");
  cy.get("form.views-exposed-form", { timeout: 5000 }).should("be.visible");
});

Then("I should see {string} page title", (title) => {
  cy.get("h1", { timeout: 5000 })
    .should("exist")
    .invoke("text")
    .then((text) => {
      expect(text.trim()).to.include(title);
    });
});

When("I enter {string} in the search field", (text) => {
  cy.get(EnvLocators.searchField).should("be.visible").type(text);
});

When("I select {string} from status dropdown", (option) => {
  const statusMap = {
    Complete: "complete",
    "In Progress": "in_progress",
  };

  cy.wait(500);
  cy.get("form.views-exposed-form", { timeout: 5000 }).should("be.visible");

  cy.get("body")
    .then(($body) => {
      if ($body.find('select[name="field_complianc_value"]').length > 0) {
        cy.get('select[name="field_complianc_value"]')
          .should("be.visible")
          .select(statusMap[option]);
      } else if ($body.find("#edit-field-complianc-value").length > 0) {
        cy.get("#edit-field-complianc-value")
          .should("be.visible")
          .select(statusMap[option]);
      } else {
        cy.get("select").then(($selects) => {
          cy.wrap(
            $selects
              .filter(
                (i, el) =>
                  el.options &&
                  Array.from(el.options).some(
                    (opt) => opt.value === statusMap[option]
                  )
              )
              .first()
          )
            .should("be.visible")
            .select(statusMap[option]);
        });
      }
    })
    .then(() => {
      cy.wait(500);
    });
});

When("I select {string} from restoration area dropdown", (area) => {
  cy.get(EnvLocators.restorationAreaDropdown)
    .click()
    .then(() => {
      cy.get(`.dropdown-menu.show .dropdown-item:contains("${area}")`)
        .should("be.visible")
        .click();
    });
});

When("I click the apply button", () => {
  cy.get('input[type="submit"][value="Apply"]', { timeout: 5000 })
    .should("be.visible")
    .first()
    .click({ force: true })
    .then(() => {
      cy.wait(500);
    });
});

When("I clear the search field", () => {
  cy.get(EnvLocators.searchField).should("be.visible").clear();
});

Then("The first result should contain {string}", (text) => {
  cy.get(EnvLocators.firstResultTitle, { timeout: 5000 })
    .should("be.visible")
    .and("contain", text);
});

Then("I verify the first result item", () => {
  cy.get("#Des-Allemands-Boat-Launch > .accordion-button")
    //    .contains("Des-Allemands-Boat-Launch")
    .should("be.visible");
});

Then("I verify projects block is present", () => {
  cy.get(".block-views-blockproject-feed-blocks-block-1", {
    timeout: 5000,
  }).should("exist");
});

When("I click on environmental compliance link", () => {
  cy.contains("environmental compliance", { timeout: 5000 }).click();
  cy.get("body").should("be.visible");
});

Then("I selecct the In Progress in a Status field", () => {
  cy.get(EnvLocators.statusDropdown, { timeout: 5000 })
    .should("be.visible")
    .select("in_progress")
    .then(() => {
      cy.wait(500);
    });
});

Then("I selecct in a Status field {string}", (status) => {
  const statusMap = {
    Complete: "complete",
    "In Progress": "in_progress",
  };

  cy.get(EnvLocators.statusDropdown, { timeout: 20000 })
    .should("be.visible")
    .select(statusMap[status])
    .then(() => {
      cy.wait(500);
    });
});

Then("I selecct the Louisiana in a Restoration Area field", () => {
  cy.get("#edit-field-tig-target-id").select("6");
});
