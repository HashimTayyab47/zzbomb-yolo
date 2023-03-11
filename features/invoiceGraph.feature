Feature: Draw Invoice Graph

Scenario: Draw Invoice graph

	Given I am on the invoice page
    When I click on visualization
    Then I select line graph
    Then on x axis date recieved y axis payment