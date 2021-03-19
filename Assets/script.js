


// Assignment Code
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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
       
    
      passwordText.value = password; 
    }

function generatePassword() {
    
    
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

    

    if (confirmLowercase === true) {
        userArray = userArray.concat(lowercase);
    };
    
    if (confirmUppercase === true) {
        userArray = userArray.concat(uppercase);
    };

    if (confirmNumbers === true) {
        userArray = userArray.concat(numbers);
    };

    if (confirmSpecial === true) {
        userArray = userArray.concat(special);
    };


    

    for (i=0; i < pwLength; i++) {
        UserPW[i] = userArray[Math.floor(Math.random()* userArray.length)];
    }    
    return UserPW.join('');
}


 








