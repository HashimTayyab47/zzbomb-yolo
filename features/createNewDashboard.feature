Feature: Use the NEW button

Scenario: create new dashboard

	Given I am on original dashboard
	When I click on new
	Then I click on dashboard
	Then I add name for dashboard
    Then I create the dashboard