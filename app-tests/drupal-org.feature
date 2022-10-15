Feature: Drupal.org
  Scenario: Viewing the homepage
    When I view the homepage
    Then I should see element '.cta-text' that contains 'We stand with Ukraine. 🇺🇦'
