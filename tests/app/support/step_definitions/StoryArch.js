import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { locators as StoryArchLocators } from '../data/storyarch/locators.js';

Then("I select the Louisiana in a Filter by restoration area field", () => {
    cy.get(StoryArchLocators.FilterByRestorationArea).select('Louisiana')
})
Then("I select the Publication in a Filter by story type field", () => {
    cy.get(StoryArchLocators.FilterByStoryType).select('Publication')
})
Then("I fill in the Start field on Filter by date with {string}", (text) => {
    cy.get(StoryArchLocators.StartOnFilterByDate).type(text)
})
Then("I fill in the End field on Filter by date with {string}", (text) => {
    cy.get(StoryArchLocators.EndOnFilterByDate).type(text)
})
Then("I click Apply-button", () => {
    cy.get(StoryArchLocators.ApplyButton).click()
})
Then("I click Reset-button", () => {
    cy.get(StoryArchLocators.ResetButton).click({force: true});
})
Then("Verify if the First of Results contains {string}", (text) => {
    cy.contains(StoryArchLocators.FirstOfResults, text);
});