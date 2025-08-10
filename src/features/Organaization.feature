Feature: Organization Creation
  As an admin user
  I want to fill all organization details
  So that I can create a new organization properly

  @positive
  Scenario: Create organization with all valid details
    Given I am logged in and on the organization creation page
    When I fill the organization name as "Rishi"
    And I enter address as "118 palanisamy compount kovalan nager main road"
    And I select country as "India"
    And I select state as "tamil nadu"
    And I select city as "madurai"
    And I enter pin code as "625003"
    And I select assessment level "practice" 
    And I click the "Create" button
    Then I should see success message "Organization created successfully"

  @negative

  Scenario: Attempt to create organization without required fields
    Given I am logged in and on the organization creation page
    When I click the "Create" button without filling required fields
    Then I should see error messages for all mandatory fields