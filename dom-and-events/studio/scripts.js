// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", () => {
  const flightStatus = document.getElementById("flightStatus");
  const background = document.getElementById("shuttleBackground");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");
  let shuttleWidth = 0;
  const rocket = document.getElementById("rocket");
  rocket.style.position = "absolute";
  rocket.style.left = "0px";
  rocket.style.bottom = "0px";

  const takeoff = document.getElementById("takeoff");

  takeoff.addEventListener("click", () => {
    const result = window.confirm("Confirm the shuttle is ready for takeoff");
    if (result) {
      flightStatus.innerHTML = "Shuttle in Flight";
      background.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
      rocket.style.bottom = "10px";
    }
  });

  const land = document.getElementById("landing");
  land.addEventListener("click", () => {
    const result = window.confirm(
      "The shuttle is landing. Landing gear engaged."
    );
    if (result) {
      flightStatus.innerHTML = "The shuttle has landed";
      background.style.backgroundColor = "green";
      shuttleHeight.innerHTML = 0;
      rocket.style.bottom = "0px";
      rocket.style.left = "0px";
    }
  });

  const abort = document.getElementById("missionAbort");
  abort.addEventListener("click", () => {
    const result = window.confirm("Confirm you want to abort the mission");

    if (result) {
      flightStatus.innerHTML = "Mission aborted";
      background.style.backgroundColor = "green";
      shuttleHeight.innerHTML = 0;
      rocket.style.bottom = "0px";
      rocket.style.left = "0px";
    }
  });
  const up = document.getElementById("up");
  up.addEventListener("click", () => {
    if (shuttleHeight.innerHTML < 240000) {
      rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
      shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    }
  });

  const down = document.getElementById("down");
  down.addEventListener("click", () => {
    if (shuttleHeight.innerHTML > 0) {
      rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
      shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    }
  });

  const left = document.getElementById("left");
  left.addEventListener("click", () => {
    if (shuttleWidth > 0) {
      rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
      shuttleWidth = shuttleWidth - 1;
    }
  });

  const right = document.getElementById("right");
  right.addEventListener("click", () => {
    if (shuttleWidth < 55) {
      rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
      shuttleWidth = shuttleWidth + 1;
    }
  });
});

// background blue
//           position change
// document.getElementById("spaceShuttleHeight").innerHTML = 10000;
