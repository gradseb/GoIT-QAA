Feature: Product Search and Purchase on morele.net

  Scenario: Successful product search and purchase
    Given the user is on the morele.net homepage
    When the user enters "Laptop Lenovo Legion 5" in the search bar
    Then the user should see a list of search results for "Laptop Lenovo Legion 5"

    When the user selects a laptop from the search results
    And the user clicks the "Add to Cart" button
    Then the product should be added to the cart
    And the cart should display the correct product details

    When the user clicks on the cart icon
    And the user clicks the "Proceed to Checkout" button
    Then the user should be redirected to the login or checkout page

    When the user logs in or continues as a guest
    And the user enters valid shipping information
    And the user enters valid payment information
    And the user reviews the order summary
    And the user clicks the "Place Order" button
    Then the order should be successfully placed
    And the user should see an order confirmation message with order details

  Scenario: Validation of purchased product
    Given the user has placed an order for a Laptop Lenovo Legion 5
    When the user navigates to the order history page
    Then the order history should display the recently purchased Laptop Lenovo Legion 5
    And the order details should match the purchase information
