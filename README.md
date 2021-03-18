GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


Variables - 
    - 

5. When the button is clicked on, the user is prompted how many characters they would like the password to be.


6. If the user input is not a number, or less than 8, or greater than 128, tell the user that it must be a number between 8 and 128.
6. Reprompt user to input a number between 8 and 128.
7. If the user inputs a number between 8 and 128, 
    - ask if the user would like to include lowercase letters
    - ask if the user would like to include uppercase letters
    - ask if the user would like to include numbers
    - ask if the user would like to include special characters

8. If the user would like to use all 4, use randomly selected from Array that contains all 4 types

9. If user would like three types, use randomly selected