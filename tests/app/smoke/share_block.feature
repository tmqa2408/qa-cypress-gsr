Feature: Share Block

  Background:
    Given I visit the article page
    Then I verify the story page is open

  Scenario: Check if user is able to share via email
    When I on the email icon to share
    Then I verify the email is open

  Scenario: Check if user is able to share via facebook  
    When I on the facebook icon to share
    Then I verify the facebook is open

  Scenario: Check if user is able to share via X
    When I on the X icon to share
    Then I verify the X is open
