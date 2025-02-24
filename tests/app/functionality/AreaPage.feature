Feature: As a user, I want to see the Alabama Restoration Area page
  Scenario: Viewing the Alabama Restoration Area page
    Given I visit the homepage
    When I go on "/restoration-areas/alabama"
    Then I should see "Alabama Restoration Area" page
    Then I verify that the Recent News block is displayed
    When I open View the story archive link
    Then I verify that the Story Archive page is open for Alabama