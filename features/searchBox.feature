Feature: Use search box

Scenario: Use search box

	Given I am on dashboard
	When I click on search box
	Then I search for analytics event
	Then I click on analytics event