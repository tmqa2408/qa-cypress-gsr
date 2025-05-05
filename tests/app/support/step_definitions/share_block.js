import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

// Prevent window.open and handle sharing buttons
beforeEach(() => {
  // Stub window.open and other window methods
  // cy.window().then((win) => {
  //   cy.stub(win, "open").returns(null);
  //   cy.stub(win, "location", "assign").returns(null);
  //   win.a2a_config = { ...win.a2a_config, popup: false };
  // });

  // Prevent default behavior for sharing buttons
  cy.document().then((doc) => {
    // Remove target and href attributes from sharing buttons
    const removeAttributes = () => {
      ["a.a2a_button_facebook", "a.a2a_button_x", "a.a2a_button_email"].forEach(
        (selector) => {
          const el = doc.querySelector(selector);
          if (el) {
            el.removeAttribute("target");
            el.removeAttribute("href");
            el.onclick = (e) => {
              e.preventDefault();
              return false;
            };
          }
        }
      );
    };

    // Initial removal
    removeAttributes();

    // Remove on any DOM changes
    new MutationObserver(removeAttributes).observe(doc.body, {
      childList: true,
      subtree: true,
    });

    // Prevent clicks
    doc.addEventListener(
      "click",
      (e) => {
        if (
          e.target.closest(
            ".a2a_button_facebook, .a2a_button_x, .a2a_button_email"
          )
        ) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      },
      true
    );
  });
});

// Helper function to ensure AddToAny is ready
const ensureAddToAnyReady = () => {
  cy.window().then((win) => {
    cy.wrap(win).should("have.property", "a2a");
    if (win.a2a?.init) {
      win.a2a_config = { ...win.a2a_config, popup: false };
      win.a2a.init("page");
    }
  });

  // Wait for sharing buttons
  cy.get(".a2a_kit", { timeout: 30000 }).should("exist");
};

Given("I visit the article page", () => {
  cy.visit(
    "/2025/01/texas-trustees-seek-public-comment-40-million-draft-restoration-plan-coastal-habitat",
    {
      timeout: 30000,
      onBeforeLoad: (win) => {
        win.a2a_config = { popup: false };
      },
    }
  );
});

Then("I verify the story page is open", () => {
  ensureAddToAnyReady();
});

// Email sharing
When("I on the email icon to share", () => {
  cy.get("a.a2a_button_email")
    .should("exist")
    .invoke("removeAttr", "target")
    .invoke("removeAttr", "href")
    .trigger("mouseover");
});

Then("I verify the email is open", () => {
  cy.get(".a2a_s_email").should("exist").should("have.css", "opacity", "1");
});

// Facebook sharing
When("I on the facebook icon to share", () => {
  cy.get("a.a2a_button_facebook")
    .should("exist")
    .invoke("removeAttr", "target")
    .invoke("removeAttr", "href")
    .click({ force: true });
});

Then("I verify the facebook is open", () => {
  cy.get(".a2a_s_facebook").should("exist").should("have.css", "opacity", "1");
});

// X (Twitter) sharing
When("I on the X icon to share", () => {
  cy.get("a.a2a_button_x")
    .should("exist")
    .invoke("removeAttr", "target")
    .invoke("removeAttr", "href")
    .click({ force: true });
});

Then("I verify the X is open", () => {
  cy.get(".a2a_s_x").should("exist").should("have.css", "opacity", "1");
});
