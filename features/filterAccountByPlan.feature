Feature: Filter Account by Plan

Scenario: Filter Account by plan

	Given I am on account list
	When I click on account filters
	Then I can select Business and Premium
	Then I click on apply filter