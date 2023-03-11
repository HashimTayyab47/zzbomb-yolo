Feature: Use the NEW button

Scenario: create new collection

	Given I am on main dashboard
	When I click on new button
	Then I click on collection
	Then I add name for collection
    Then I create the collection