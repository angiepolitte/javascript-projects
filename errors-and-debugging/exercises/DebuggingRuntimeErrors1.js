//Run this code first and examine the error message.
//Pay close attention to any line numbers mentioned in the message - these will help locate and repair the mistake in the code.
//completed
let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
   console.log('fuelLevel cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}