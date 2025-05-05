Feature: Test the Environmental Compliance Page

  Background: 
    Given I visit the homepage

  Scenario: Viewing the Environmental Compliance Page
    When I visit "/environmental-compliance"
    Then I should see "Environmental Compliance" page title
    And I wait 2 seconds
    When I enter "CAST" in the search field
    And I select "Complete" from status dropdown
    And I click the apply button
    Then The first result should contain "CAST"
    When I clear the search field
    And I click the apply button
    Then I selecct the Louisiana in a Restoration Area field
    And I click the apply button
    And I select "In Progress" from status dropdown
    And I click the apply button
    Then I verify the first result item

  Scenario Outline: Checking Environmental Compliance from Restoration Areas page
    When I click on "Restoration Areas" dropdown menu
    And I click on "<Region>" item
    Then I should be redirected to "<Region>"
    And I verify projects block is present
    When I click on environmental compliance link
    Then I should see "Environmental Compliance" page title
    Examples:
      | Region      |
      | Alabama     |
      | Florida     |
      | Louisiana   |
      | Mississippi |
      | Texas       |
      | RegionWide  |
      | OpenOcean   |
