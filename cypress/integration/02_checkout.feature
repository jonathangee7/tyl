Feature: Using the Basket and Checkout

  I want to open the basket and checkout my items
  Background:
    Given I login to the store
    And I add item with name "Sauce Labs Fleece Jacket"
    And I add item with name "Sauce Labs Onesie"
    And I click on basket

  Scenario: Valid checkout details
    When I submit valid checkout details
    Then I am on checkout overview page
    And I can verify the correct item "Sauce Labs Fleece Jacket" was added
    And I can verify the correct item "Sauce Labs Onesie" was added

  Scenario: Invalid checkout details
   When I submit invalid checkout details
   Then I can see an error alert

  Scenario: Validating selection shipping
    When I submit valid checkout details
    And I click finish checkout
    Then I can verify I have selected "Pony Express"
