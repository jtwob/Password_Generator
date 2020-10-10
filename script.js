// Assignment Code
var generateBtn = document.querySelector("#generate");

let specChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numChars = "0123456789";
let chosenChars = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/**
 * Returns a Password generated to the user's specifications 
 * of type of characters (lower, upper, nums, and special), and length of password.
 * Password is then displayed on screen.
 * @return secure password randomly generated.
 */
function generatePassword() {
  let passGen = "";
  let lower = confirm("Include lower case characters?");
  let upper = confirm("Include upper case characters?");
  let nums = confirm("Include numbers?");
  let special = confirm("Include special characters?");
  if(lower){
    chosenChars+="l";
  }
  if(upper){
    chosenChars+="u";
  }
  if(nums){
    chosenChars+="n";
  }
  if(special){
    chosenChars+="s";
  }
  if(chosenChars.length === 0){
    alert("You have not chosen any characters to include. A password will be generated with only lower case characters.");
    chosenChars+="l";
  }

  let passLength = prompt("How long would you like the password to be? (8-128)");
  while(passLength === false || passLength < 8 || passLength > 128){
    passLength = prompt("Invalid entry: How long would you like the password to be? (8-128)");
  }

  for(let i = 0; i < passLength; i++){
    let charType = chosenChars[Math.floor(Math.random() * chosenChars.length)];
    switch(charType){
      case 'l':
        passGen += lowerChars[Math.floor(Math.random() * lowerChars.length)];
        break;
      case 'u':
        passGen += upperChars[Math.floor(Math.random() * upperChars.length)];
        break;
      case 'n':
        passGen += numChars[Math.floor(Math.random() * numChars.length)];
        break;
      case 's':
        passGen += specChars[Math.floor(Math.random() * specChars.length)];
        break;
      default:
        console.log("No more characters");
    }
  }
  return passGen;
}