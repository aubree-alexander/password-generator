//global variables
var generateBtn = document.querySelector("#generate");
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialChar = ['!', '?', '%', '#', '@', '*', '^', '$', '&']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var password = ""



var writePassword = function() {
  var availableCharacters = []
  var promptLength = prompt("How long would you like your password to be? Choose a number between 8 and 128.")

  if (promptLength === "" || promptLength === null) {
    alert("Please enter a valid number.")
    return writePassword();
  } else if (promptLength < 8 || promptLength > 128) {
    alert("Please enter a number between 8 and 128.")
    return writePassword()
  }
  

  var promptUpper = confirm("Would you like your password to include uppercase letters? Click 'OK' for yes, and 'Cancel' for no.")
    if (promptUpper) {
      availableCharacters = availableCharacters.concat(upperCase)
    }
  var promptLower = confirm("Would you like your password to include lowercase letters? Click 'OK' for yes, and 'Cancel' for no.")
    if (promptLower) {
      availableCharacters = availableCharacters.concat(lowerCase)
    }
  var promptSpecialChar = confirm("Would you like your password to contain special characters? Click 'OK' for yes, and 'Cancel' for no.")
    if (promptSpecialChar) {
      availableCharacters = availableCharacters.concat(specialChar)
    }
  var promptNumbers = confirm("Would you like your password to contain numbers? Click 'OK' for yes, and 'Cancel' for no.")
    if (promptNumbers) {
      availableCharactrs = availableCharacters.concat(numbers)
    }

  var finalCharacters = promptUpper + promptLower + promptSpecialChar + promptNumbers

  for (i = 0; i < promptLength; i++) {
    var combineCharacters = function() {
      var randomCharacter = [Math.floor(Math.random() * promptLength)]
      var applicableCharacter = availableCharacters[randomCharacter]
      return applicableCharacter
    }
  }
  password = password + combineCharacters()

  return password
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);