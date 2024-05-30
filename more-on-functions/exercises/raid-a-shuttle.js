//fuel
let fuelLevel = 200000;

function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

let nonSuspiciousFunction = function(a) {
  if (checkFuel(a) === 'green') {
     return a - 100001;
  }
  else if (checkFuel(a) === 'yellow') {
     return a - 50001;
  }
  else {
     return a;
  }
};

let nonSuspiciousFunctionValue = nonSuspiciousFunction(7500);
console.log(nonSuspiciousFunctionValue);

//cargo
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}
console.log("Hold status: " + holdStatus(cargoHold));


let swipedItemsArray = [];

let innocentVariable = function(arr) {
  swipedItemsArray = arr.slice(3, 5);
  cargoHold.splice(3,2, "ipod shuffle", "Fake gold");
  return swipedItemsArray;
};
let stolenItems = innocentVariable(cargoHold);

console.log(stolenItems);
console.log(cargoHold);

//IRS
let irs = function(nonSuspiciousFunctionValue, cargoHold) {
  return `Raided ${nonSuspiciousFunction(nonSuspiciousFunctionValue)} kg of fuel from the tanks, and stole ${stolenItems[0]} and ${stolenItems[1]} from the cargo hold.`
}
console.log(irs(nonSuspiciousFunctionValue,stolenItems));



