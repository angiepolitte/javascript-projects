//Run this code first and examine the error message.
//Pay close attention to any line numbers mentioned in the message - these will help locate and repair the mistake in the code.
//completed
let launchReady = false;
let fuelLevel = 17000;
let date = "Monday 2019-03-18";
let time	= "10:05:34 AM";
let astronautCount =	7;
let astronautStatus = "ready";
let averageAstronautMassKg	= 80.7;
let crewMassKg	= astronautCount * averageAstronautMassKg;
let fuelMassKg	= 760000;
let shuttleMassKg	= 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevelpercentage = 100; 
let weatherStatus = "clear";
let preparedForLiftOff = true;

if (fuelLevel >= 20000) {
   console.log('fuelLevel cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}
if (astronautCount < 7) {
   console.log("Launch)";

} else if (astronautStatus === "ready") {
   console.log("Launch");

} else if (totalMassKg < maximumMassLimit) {
   console.log("Launch")
} else if (fuelTempCelsius >= -300 || < -150) {
   console.log("launch))
} else if (fuelLevel === 17000) {
   console.log("Launch")
}  else if (weatherStatus === "clear") {
   console.log("Launch")
} else {
   console.log("ABORT")
   }



   