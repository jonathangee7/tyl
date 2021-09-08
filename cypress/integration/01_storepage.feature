Feature: Using the Store page

  I want to navigate the store, sort items and add items to basket

  Background:
    Given I login to the store

  Scenario: Sorting Products by price
    When I sort inventory by "Price (high to low)"
    Then I can validate inventory is sorted by 'non-increasing'


  #Note: I decided here to test that adding specific named items is working as this is the general case for adding the costliest and
  # cheapest item (picking first the last item after validating price sort is the trivial solution)
  Scenario Outline: Adding Products
    When I add item with name <name>
    And I click on basket
    Then I can verify the correct item <name> was added

    Examples:
      | name                     |
      | "Sauce Labs Fleece Jacket" |
      | "Sauce Labs Onesie"        |

