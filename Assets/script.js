// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", 
                "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = String.prototype.toUpperCase.apply(lowercase).split(",");
console.log(uppercase);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var pwLength = prompt("How many characters would you like your password to be?");

    if (pwLength >= 8 && pwLength <= 128) {
        console.log ("Good Length");
    } else {
        console.log ("No Good");
    }


};
