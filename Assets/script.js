


// GLOBAL Variables
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", 
                "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
                    "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", 
                    "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", "<", ",", ".", ">",
                    "/", "?"]
var userArray = [];
var UserPW = [];

// Add Event Listener to Generate Button
generateBtn.addEventListener("click", writePassword);


//###############Whole Write Password function
//###############Whole Write Password function
//###############Whole Write Password function

function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
       
    
      passwordText.value = password; 
    }

// Function that Generates Password 
function generatePassword() {
    
    // Initial prompt for user to select password length, requiring them to choose a password between 8 - 128 characters
    var pwLength = prompt("How many characters would you like your password to be?");
    var UserPW = [];

    if (pwLength >= 8 && pwLength <= 128) {
        var confirmLowercase = confirm("Click OK to confirm including LOWERCASE letters");
        var confirmUppercase = confirm("Click OK to confirm including UPPERCASE letters");
        var confirmNumbers = confirm("Click OK to confirm including NUMBERS");
        var confirmSpecial = confirm("Click OK to confirm including SPECIAL CHARACTERS");
        if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecial) {
            window.alert("You must select at least one category!");
            generatePassword();
        }

    } else if (pwLength !== null) {
        window.alert("You must enter a number between 8 and 128");
        generatePassword();

    } else {
        return;
    };

    // Establishing variables to be used to randomly add 1 item from each of the 4 types of characters if 
    // the user wishes for that type to be included
    var lowerrandomIndex = (Math.floor(Math.random()*26));
    var upperrandomIndex = (Math.floor(Math.random()*26));
    var numberrandomIndex = (Math.floor(Math.random()*10));
    var specialrandomIndex = (Math.floor(Math.random()*30));

    // If "true", random item from that array is added to user password and concatinating the arrays of 
    // each type of character the user chose into one larger array called "userArray"
    if (confirmLowercase === true) {
        userArray = userArray.concat(lowercase);
        UserPW.push(lowercase[lowerrandomIndex]);
        console.log(UserPW);
    };
    
    if (confirmUppercase === true) {
        userArray = userArray.concat(uppercase);
        UserPW.push(uppercase[upperrandomIndex]);
        console.log(UserPW);
    };

    if (confirmNumbers === true) {
        userArray = userArray.concat(numbers);
        UserPW.push(numbers[numberrandomIndex]);
        console.log(UserPW);
    };

    if (confirmSpecial === true) {
        userArray = userArray.concat(special);
        UserPW.push(special[specialrandomIndex]);
        console.log(UserPW);
    };


    // Grabbing random number item from "userArray" and adding it to the final "UserPW" array and returning 
    // the final "UserPW" array to the function.

    for (i=UserPW.length; i < pwLength; i++) {
        UserPW[i] = userArray[Math.floor(Math.random()* userArray.length)];
    }    
    return UserPW.join('');
}


 








