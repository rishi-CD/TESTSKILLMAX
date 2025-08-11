Feature: Organization Creation
  As an admin user
  I want to fill all organization details
  So that I can create a new organization properly

  @positive
  Scenario: Create organization with all valid details
    Given user logged in and on the organization creation page
    When user fill the organization name as "Rishi"
    And user enter address as "118 palanisamy compount kovalan nager main road"
    And user select country as "India"
    And user select state as "tamil nadu"
    And user select city as "madurai"
    And user enter pin code as "625003"
    And user select assessment level "practice" 
    And user click the create button
    Then user should see success message "Organization created successfully"

  @negative
  Scenario: Attempt to create organization without required fields
    Given user logged in and on the organization creation page
    When user click the Create button without filling required fields
    Then user should see error messages for all mandatory fields