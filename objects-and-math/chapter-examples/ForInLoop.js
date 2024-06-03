let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};
let numbers = [-2, 3.33, -4.44, 8.88];

let sortedArray = numbers.sort(function(a, b){return a-b});

console.log(sortedArray);
console.log(`Min = ${sortedArray[0]}, Max = ${sortedArray[sortedArray.length-1]}`);


// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.