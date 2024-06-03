let superChimpOne = {
   callSign: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 3,
   move: function() {return Math.floor(Math.random()*11)}
};

let salamander = {
   callSign: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 4,
   move: function() {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   callSign: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 7,
   move: function() {return Math.floor(Math.random()*11)}
};

let puppyDog = {
   callSign: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 6,
   move: function() {return Math.floor(Math.random()*11)}
};

let waterBear = {
   callSign: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 8,
   move: function() {return Math.floor(Math.random()*11)}
};
let animalCrew = [superChimpOne, salamander, superChimpTwo, puppyDog, waterBear];

let fitnessTest = function(animalCrew) {
   let results = [], numSteps, turns;
   for (let i = 0; i < animalCrew.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += animalCrew[i].move();
       turns++;
       }
       results.push(`${animalCrew[i].callSign} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
  console.log(fitnessTest(animalCrew));


// function crewReports(animal) {
//    console.log(`${animal.callSign} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`);
// }
//console.log(crewReports(waterBear));


// After you have created the other object literals, add the astronautID property to each one.

// for (i = 0; i < 5; i++) {
//    let numID = Math.ceil(Math.random()*10);
//    console.log(num);
// }

// Add a move method to each animal object


// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
