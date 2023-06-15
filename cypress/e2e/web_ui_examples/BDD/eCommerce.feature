Feature: E2E Ecommerce Validation

@smoke
Scenario: Add Items to Cart and verify success message
    
    Given User opens Ecommerce page
    When the User adds items to Cart
    # |products|
    # |iphone X|
    # |Samsung Note 8|
    # |Nokia Edge|
    # |Blackberry|
    And validate the total prices seen in checkout
    And User selects the country
    And User checks the checkbox
    And User clicks on ProceedBtn
    Then the success message should be displayed


@smoke
Scenario: Fill Login Form

    Given User opens Ecommerce page
    When the User fill the form details
    |name|gender|
    |selvamani|Male|
    Then perform the validations
    