//global variables
var generateBtn = document.querySelector("#generate");
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialChar = ['!', '?', '%', '#', '@', '*', '^', '$', '&', '+', '-', '.', ':', ';']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//included in starter code

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function for password generation

function generatePassword() {
  //length of password
  var passwordLength = askPasswordLength();
  //characters user chooses 
  var characterPreferences = askCharacterPreferences();
  //character arrary based on user's choices
  var passwordCharacters = generatePasswordCharacters(characterPreferences, passwordLength)
  //shuffling the array
  shuffleArray(passwordCharacters)
  return arrayToString(passwordCharacters)
}

//ask user for length of password

function askPasswordLength() {
  var passwordLength = prompt("How long would you like your password to be? Choose a number between 8 and 128.")

  if (passwordLength === "" || passwordLength === null) {
    alert("Please enter a valid number.")
    return askPasswordLength();
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.")
    return askPasswordLength()
  }
  return passwordLength;
}
  

//ask user what characters they want to include

function askCharacterPreferences() {
  var characterPreferences = []

  var upperConfirm = confirm("Would you like your password to include capital letters? Click 'OK' for yes, and 'Cancel' for no.")
    if (upperConfirm) {
      characterPreferences.push(upperCase);
    }

  var lowerConfirm = confirm("Would you like your password to include lowercase letters? Click 'OK' for yes, and 'Cancel for no.")
    if (lowerConfirm) {
      characterPreferences.push(lowerCase);
    }

  var specialCharConfirm = confirm("Would you like your password to include special characters? Click 'OK' for yes, and 'Cancel' for no.")
    if (specialCharConfirm) {
      characterPreferences.push(specialChar);
    }

  var numberConfirm = confirm("Would you lke your password to include numbers? Click 'OK' for yes, and 'Cancel' for no.")
    if (numberConfirm) {
      characterPreferences.push(numbers);
    }

    return characterPreferences;
}
  
function generatePasswordCharacters(charArray, passwordLength) {
  passwordCharacters = []

  while (passwordCharacters.length < passwordLength) {
    for (var i = 0; i < charArray.length; i++) {
      if (passwordCharacters.length >= passwordLength) {
        break;
      } else {
        charTypeArray = charArray[i];
        passwordCharacters.push(charTypeArray[Math.floor(Math.random() * charArray[i].length)]);
      }
    }
  }
  return passwordCharacters;
}

function shuffleArray(array) {
    
    for(var i = 0; i < array.length; i++){
      var value1 = array[i];
      var randomIndex = Math.floor(Math.random()*array.length); //random index in array

      // switch value 1 and value 2
      array[i] = array[randomIndex];
      array[randomIndex] = value1;
    }
}

function arrayToString(array){
  password = "";
  // convert password array into a string
  for (var i = 0; i < array.length; i++) {
    password = password + array[i];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);