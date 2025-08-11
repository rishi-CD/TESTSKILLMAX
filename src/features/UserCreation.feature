Feature: User Creation
  As a user 
  wants to create an a new user
@user
  Scenario: creating a user on SkillsMax Ai
  Given user logged in and on the organization User creation page 
  When user choose the create Bulk user and clicks the next button
  And user choose the organization name and uploading the csv file
  And  user verifiy the info and clicks next button and conirm and add the user
  Then user sees the verification messege

@userneg
  Scenario: user try to creates user with same email 
  Given user logged in and on the organization User creation page
  When user choose the create Bulk user and clicks the next button
  And user choose the organization name and uploading the csv file with same email
  Then user should see an error messege