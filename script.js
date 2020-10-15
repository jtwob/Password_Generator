// Assignment Code
let generateBtn = document.querySelector("#generate");

// Helper object handling storage of password preferences.
let charsObject = {
  charArr: [" !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789"],
  chosenArr: [],
  includeSpecial: false,
  includeLower: false,
  includeUpper: false,
  includeNums: false,
  passLength: 0
}

// Write password to the #password input
function writePassword() {
  let builder = charsObject;
  let password = generatePassword(builder);
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  builder.chosenArr = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/**
 * Returns a Password generated to the user's specifications 
 * of type of characters (lower, upper, nums, and special), and length of password.
 * Password is then displayed on screen.
 * @return secure password randomly generated.
 */
function generatePassword(builder) {
  let passGen = "";
  builder.includeLower = confirm("Include lower case characters?");
  builder.includeUpper = confirm("Include upper case characters?");
  builder.includeNums = confirm("Include numbers?");
  builder.includeSpecial = confirm("Include special characters?");
  if (builder.includeLower) {
    builder.chosenArr.push('l');
  }
  if (builder.includeUpper) {
    builder.chosenArr.push('u');
  }
  if (builder.includeNums) {
    builder.chosenArr.push('n');
  }
  if (builder.includeSpecial) {
    builder.chosenArr.push('s');
  }
  if (builder.chosenArr.length === 0) {
    alert("You have not chosen any characters to include. A password will be generated with only lower case characters.");
    builder.chosenArr.push('l');
  }

  builder.passLength = prompt("How long would you like the password to be? (8-128)");
  while (builder.passLength === false || builder.passLength < 8 || builder.passLength > 128) {
    passLength = prompt("Invalid entry: How long would you like the password to be? (8-128)");
  }

  for (let i = 0; i < builder.passLength; i++) {
    let charType = builder.chosenArr[Math.floor(Math.random() * builder.chosenArr.length)];
    switch (charType) {
      case 'l':
        passGen += builder.charArr[1][Math.floor(Math.random() * builder.charArr[1].length)];
        break;
      case 'u':
        passGen += builder.charArr[2][Math.floor(Math.random() * builder.charArr[2].length)];
        break;
      case 'n':
        passGen += builder.charArr[3][Math.floor(Math.random() * builder.charArr[3].length)];
        break;
      case 's':
        passGen += builder.charArr[0][Math.floor(Math.random() * builder.charArr[0].length)];
        break;
      default:
        console.log("No more characters");
    }
  }
  return passGen;
}