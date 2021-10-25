// Assignment code here


// Get references to the #generate element
var generateBtn = document.getElementById("generate");


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.getElementById("password");
passwordText.value = password;
}

function generatePassword() {
  var passwordLength = parseInt(window.prompt("Choose a number between 8 and 128"));
  // console.log(typeof passwordLength);
  if (passwordLength<8 || passwordLength>128) {
    window.alert("This password is not valid");
    return;
  }

  var numbers= ("0123456789")
  var LowerCaseCharacters = ("abcdefghijklmnopqrstuvxyz");
  var UppercaseCharacters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var specialCharacters = ("!@#$%^&*()_+");

  var num = confirm ("do you want numbers in your password?");
  var LCaseCharacters = confirm ("do you want LowerCaseCharacters in your password?");
  var UcaseCharacters = confirm ("do you want UppercaseCharacters in your password?");
  var SCharacters = confirm ("do you want specialCharacters in your password?");
  var passCharacter = "";

  if (num) {
    passCharacter += numbers
  }

  if (LCaseCharacters) {
    passCharacter += LowerCaseCharacters 
  }

  if (UcaseCharacters) {
    passCharacter += UppercaseCharacters
  }

  if (SCharacters) {
    passCharacter += specialCharacters
  }

  console.log(passCharacter)


//functions for password generation
  var finalPass = "";
  for (let i=0; i < passwordLength; i++) {
    finalPass += passCharacter.charAt(Math.floor(Math.random() * passCharacter.length))
    console.log(finalPass)
  }

  return finalPass;




















