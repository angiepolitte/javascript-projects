const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.

let lettersToMove = input.question("How many letters do you want to move?  ");
//Hint - define another variable to hold the new string or reassign the new string to str.
strPigLatin = str.slice(lettersToMove,10) + str.slice(0, lettersToMove);


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`What was once ${str} is now ${strPigLatin}!`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.



 
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
 
if(lettersToMove > 10) {
  console.log(`No, no, no. That's more letters than ${str}!`) 
 } else {
  console.log(`You did it!  You made the word ${strPigLatin}!`)
 }