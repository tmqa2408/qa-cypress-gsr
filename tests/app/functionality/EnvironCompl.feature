Feature: As a user, I want to see the environmental compliance page
  Scenario: Viewing the Environmental Compliance page
    Given I visit the homepage
    When I go on "/environmental-compliance"
    Then I should see "Environmental Compliance" page
    Then I fill in Search field with "CAST"
    Then I selecct in a Status field "Complete"    
    Then I click on Apply button
    Then First row of the list results should contain "CAST"
