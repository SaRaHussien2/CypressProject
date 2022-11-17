Feature: test the login functionality

    Scenario Outline: test login with valide and invalid credentials
        Given user is on login page
        When the user enters '<username>' and '<password>'
        And  The user clicks on login button
        Then The user is navigated to the homepage



        Examples:
            | username            | password |
            | admin@yourstore.com | admin    |
            | test@test.com       | test     |