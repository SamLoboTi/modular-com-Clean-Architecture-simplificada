Feature: Platform health
  Scenario: API reports that the platform is available
    When the client checks the platform health
    Then the API should report Plansvel as available

