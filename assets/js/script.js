// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

confirmLength = "";
confirmLowerCase;
confirmUpperCase;
confirmNumericCharacter;
confirmSpecialCharacter;

function generatePassword() {
  var confirmLength = (prompt("Input the length of your password. Has to be at least 8 characters, but no more than 128 characters."));

  while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Please enter a valid number.");
    var confirmLength = (prompt("Input the length of your password. Has to be at least 8 characters, but no more than 128 characters."));
  }

var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters.");
var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters.");
var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters.");
var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters.");

  while(confirmLowerCase === false && confirmUpperCase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false) {
  alert("You must choose at least one character class.")
var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters.");
var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters.");
var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters.");
var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters.");
  }

var passwordCharacters = []

  if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(lowerCase)
  }

  if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(upperCase)
  }

  if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(numeric)
  }

  if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialCharacter)
  }


var randomPassword = ""

  for (var i=0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
document.querySelector("#generate").addEventListener("click", writePassword);
