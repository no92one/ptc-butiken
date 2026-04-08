Feature: Login

    Scenario: User can log in
        Given I am on the login page
        When I log in with email "alice@example.com" and password "Secret123!"
        Then I should be redirected to the profile

    Scenario: Setup is is working 
        Given I am logged in