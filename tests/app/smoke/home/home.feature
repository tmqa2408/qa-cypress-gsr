Feature: Homepage 
 
  Background:
    Given I visit the homepage

  Scenario: Viewing the main menu items
    Then I verified title
    When I verified the dropdown menu is visible
    When I click on "Damage Assessment" item

  Scenario: Viewing the footer
    Then I verified the footer is visible
    When I click on "About Us" item
    Then I should be redirected to "AboutUs"
    When I click on "How We Restore" item
    Then I should be redirected to "HowWeRestore"
    When I click on "Restoration Areas" item
    Then I should be redirected to "RestorationAreas"
    When I click on "Data" item
    Then I should be redirected to "Data"
    When I click on "MediaAndPress" item
    Then I should be redirected to "MediaPress"
    When I click on "Home" item
    Then I should be redirected to "Home"

  Scenario: Viewing the Restoration Areas dropdown menu
    When I click on Restoration Areas dropdown menu
    Then I click on "Alabama" item
    Then I should be redirected to "Alabama"
    When I click on Restoration Areas dropdown menu
    Then I click on "Florida" item
    Then I should be redirected to "Florida"
    When I click on Restoration Areas dropdown menu
    Then I click on "Louisiana" item
    Then I should be redirected to "Louisiana"
    When I click on Restoration Areas dropdown menu
    Then I click on "Mississippi" item
    Then I should be redirected to "Mississippi"
    When I click on Restoration Areas dropdown menu
    Then I click on "Texas" item
    Then I should be redirected to "Texas"
    When I click on Restoration Areas dropdown menu
    Then I click on "RegionWide" item
    Then I should be redirected to "RegionWide"
    When I click on Restoration Areas dropdown menu
    Then I click on "OpenOcean" item
    Then I should be redirected to "OpenOcean"