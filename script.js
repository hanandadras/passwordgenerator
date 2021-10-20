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
  console.log("click for password");
  return "This would be the password"
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
