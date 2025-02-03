Feature: Checking responce of links

  Scenario: Checking responce of links is 200
    Given I visit the homepage
    When I send a GET request to "<pasth>"
    Then Verify that the status code is 200
    Examples:
      | pasth |
      |/about-us|
      |/co-trustees|
      |/about-us/contact-us|
      |/media|
      |/how-we-restore|
      |/assessment|
      |/planning|
      |/environmental-compliance|
      |/strategic-frameworks|
      |/monitoring-and-adaptive-management|
      |/reviewing-restoration-progress|
      |/restoration-areas|
      |/restoration-areas/alabama|
      |/restoration-areas/florida|
      |/restoration-areas/louisiana|
      |/restoration-areas/mississippi|
      |/restoration-areas/texas|
      |/restoration-areas/regionwide|
      |/restoration-areas/open-ocean|
      |/science-data|
      |/story-archive|