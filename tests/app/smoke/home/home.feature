Feature: Homepage 
 
  Background:
    Given I visit the homepage

  Scenario: Viewing the main menu items
    Then I verified title
    When I verified the dropdown menu is visible
    When I click on "HowWeRestore" dropdown menu
    When I click on "DamageAssessment" item
    Then I should be redirected to "DamageAssessment"

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
    When I click on "Restoration Areas" dropdown menu
    Then I click on "Alabama" item
    Then I should be redirected to "Alabama"
    When I click on "Restoration Areas" dropdown menu
    Then I click on "Florida" item
    Then I should be redirected to "Florida"
    When I click on "Restoration Areas" dropdown menu
    Then I click on "Louisiana" item
    Then I should be redirected to "Louisiana"
    When I click on "Restoration Areas" dropdown menu
    Then I click on "Mississippi" item
    Then I should be redirected to "Mississippi"
    When I click on "Restoration Areas" dropdown menu
    Then I click on "Texas" item
    Then I should be redirected to "Texas"
    When I click on "Restoration Areas" dropdown menu
    Then I click on "RegionWide" item
    Then I should be redirected to "RegionWide"
    When I click on "Restoration Areas" dropdown menu
    Then I click on "OpenOcean" item
    Then I should be redirected to "OpenOcean"

  Scenario: Checking the footer NOAA Offices block
    When I click on "OfficeOfResponseAndRestoration" item
    Then I should be redirected to "OfficeOfResponseAndRestoration"
    When I visit the homepage
    When I click on "OfficeOfHabitatConservation" item
    Then I should be redirected to "OfficeOfHabitatConservation"

  Scenario Outline: Checking Important Links Block
    When I click on "<Name>" item
    Then I should be redirected to "<Name>"
    Examples:
      | Name                  |
      | PrivacyInformation   |
      | CopyrightInformation |
      | Disclaimer           |
      | ContactUs            |
      | DocumentAccessibility|

  Scenario: Checking Stay Connected Block
    Then I verify the NOAA image icon is present
    Then I verify the RSS image icon is present
    Then I verify the Contact Us link is present

  Scenario Outline: Checking Restoration Areas Block
    When I click on "Restoration Areas" dropdown menu
    When I click on "<Region>" item
    Then I should be redirected to "<Region>"
    Examples:
      | Region      |
      | Alabama     |
      | Florida     |
      | Louisiana   |
      | Mississippi |
      | Texas       |
      | RegionWide  |
      | OpenOcean   |

  Scenario Outline: Checking How We Restore Menu
    When I click on "HowWeRestore" dropdown menu
    When I click on "<Name>" item
    Then I should be redirected to "<Name>"
    When I visit the homepage
    When I wait 2 seconds
    Examples:
      | Name                            |
      | DamageAssessment               |
      | Planning                       |
      | EnvironmentalCompliance        |
      | StrategicFrameworks            |
      | MonitoringAndAdaptiveManagement|
      | ReviewingRestorationProgress   |

  Scenario: Checking main header menu elements
    When I click on "AboutUs" item
    Then I should be redirected to "AboutUs"
    When I click on "HowWeRestore" item
    Then I should be redirected to "HowWeRestore"
    When I click on "RestorationAreas" item
    Then I should be redirected to "RestorationAreas"
    When I click on "StoryArchive" item
    Then I should be redirected to "StoryArchive"
    When I click on "Data" item
    Then I should be redirected to "Data"