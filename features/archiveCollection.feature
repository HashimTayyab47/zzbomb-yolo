Feature: Add or remove collections

Scenario: Archive a collection

	Given I am on the collection page
    When I log in1
    When I click on 3 dots
	Then I click on archive collection button
    Then I confirm on popup