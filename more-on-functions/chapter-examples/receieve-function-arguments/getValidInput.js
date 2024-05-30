const input = require('readline-sync');

function getValidInput(prompt, isValid) {

  let userInput = input.question(prompt);

  while (!isValid(userInput)) {
    console.log("Invalid input. Try again." + "\n");
    userInput = input.question(prompt);
  }

  return userInput;
}
// TODO 1: write a validator 
// that ensures input starts with "a"

let firstLetterA = function (input) {
  return input.startsWith("a");
  };
// // TODO 2: write a validator 
// // that ensures input is a vowel
let vowelCheck = function(input) {
  const vowels = ["a", "e",  "i", "o", "u", "y"];
  return vowels.includes(input);
}

// // Be sure to test your code!
console.log(getValidInput('Enter the first letter of the alphabet:', firstLetterA));
console.log(getValidInput('Enter a vowel:', vowelCheck));





// let fileLogger = function(msg) {
//   let msg = "Hodwy, folks";
// }
// function logError(msg, logger) {
//   let errorMsg = "ERROR: " + msg;
//   logger(errorMsg);
// }
// logError("Something Broke!", fileLogger);