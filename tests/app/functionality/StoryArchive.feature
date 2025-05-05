Feature: As a user, I want to see the Story Archive page
    Scenario: Verifying it Reset button clears the fields
        Given I visit the homepage
        When I go on "/story-archive"
        Then I should be redirected to "Story Archive"
        Then I select the Louisiana in a Filter by restoration area field
        Then I select the Publication in a Filter by story type field
        Then I fill in the Start field on Filter by date with "2020-01-01"
        Then I fill in the End field on Filter by date with "2025-01-01"
        Then I click Reset-button