Feature: Add or remove collections

Scenario: Archive a collection

	Given I am on the collection page
    When I click on 3 dots
	Then I click on archive button
    Then I confirm on popup