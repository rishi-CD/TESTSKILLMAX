Feature: Login functionality
  As a user
  user want to login to the application
  So that user can access account
   @login
  Scenario: Successful login with valid credentials
    Given user on the login page
    When user enters valid Email-id "standard_user" and password "password"
    And user click the login button
    Then user should be redirected to the dashboard
   @login
  Scenario: Failed login with invalid credentials
    Given user on the login page
    When user enters invalid Email-id "wrong_user" and password "wrong_password"
    And user click the login button
    Then user should see an error message "Incorrect email or password"