Feature: Login to Application

    As a valid user
    I Want to login into Application
    
    Scenario: valid Login
    Given I open login page
    When I submit Login
    Then I should see homepage