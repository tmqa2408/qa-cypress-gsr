Feature: Permission Tests
Scenario Outline: Check 404 Page
  Given I visit the homepage
  When I go on "<url>"
  # Then I should get a "404" response code
  # And the page title is "Page not found | NOAA Fisheries"
  Then I should see "Page not found"
  # Then I should see "Something fishy is going on..."

  Examples:
  | url |
  | /fdsafacvx |
  | /afsd |
  | /doesntexist |
  | /rwersafdasfa |
  | /dashboard |
