Feature: google.com
  Scenario: visiting the homepage
    When I visit 'https://google.com'
    Then I should see element 'input' with attribute 'aria-label' with value 'Search'
  Scenario: visit the about page
    When I visit 'https://about.google'
    Then I should see 'About Google'
    Then element '.modules-lib__mission-statement__headline' should exist
    Then element '.modules-lib__mission-statement__headline' should contain 'Our mission is to'
