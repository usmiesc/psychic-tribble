// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){("button!")
var letters ="abcdefghijklmnopqrstuvwxyz"
var capletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number ="0123456789"
var special="!@#$%^&*()'"

var chars = ""

var passwordLength = prompt("how many characters would you like your password to be?(Must be between 8 to 124 characters.)");
console.log (passwordLength)
if (passwordLength <8 || passwordLength >128){
alert("Entered wrong password")
}
var confirmUppercase = confirm("Do you want to add upper case?")
console.log (confirmUppercase)
if (confirmUppercase == true){
  chars += capletters
  console.log(chars)
}
var confirmSpecialchar = confirm("Would you like to add Special Characters?")
console.log (confirmSpecialchar)
if (confirmSpecialchar == true){
  chars += special
  console.log(chars)
}

var confirmNumber = confirm("Would you like to add numbers?")
console.log(confirmNumber)
if (confirmNumber == true){
  chars += number
  console.log(chars)
}
var confirmLowerCase = confirm("Would you like to add lower case letters?")
console.log(confirmLowerCase)
if (confirmLowerCase == true){
  chars += letters
  console.log(chars)
}
 var password = "";
 for (var i = 0; i <= passwordLength; i++){
   var random =Math.floor(Math.random() * chars.length);
   //console.log(random)
   console.log(chars[random])
   password += chars[random]
   //generated passowrd goes here
 }return (password)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
