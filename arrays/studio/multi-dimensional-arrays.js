let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let arrayFood = food.split(",").sort();
console.log(arrayFood);
let arrayEquipment = equipment.split(",").sort();
console.log(arrayEquipment);
let arrayPets = pets.split(",").sort();
console.log(arrayPets);
let arraySleepAids = sleepAids.split(",").sort(); 
console.log(arraySleepAids);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [
    [arrayFood], [arrayEquipment], [arrayPets], [arraySleepAids]
]
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let question = ("Which cabinet would you like to choose? 0, 1, 2, or 3?  ");
let userSelection = input.question(question);


if (userSelection == 0) {
    console.log(`You have chosen ${arrayFood}.`);
}else if (userSelection == 1) {
    console.log(`You have chosen ${arrayEquipment}.`);
}else if (userSelection == 2) {
    console.log(`You have chosen ${arrayPets}.`); 
}else if (userSelection == 3) {
    console.log(`You have chosen ${arraySleepAids}.`);
} else {
    console.log("That is not a cabinet number in this CargoHold.");
}



//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
