Feature: Filter products by price

Scenario: Filter product by price

	Given I am on product list
	When I click on filters
	Then I can set price between 50 and 100
	Then I click on apply