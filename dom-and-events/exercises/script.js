function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  button.addEventListener("click", (event) => {
    paragraph.innerHTML = "Houston! We have liftoff!";
  });
  missionAbort.addEventListener("mouseover", (event) => {
    let background = event.target;
    background.style.color = "red";
    document.body.style.backgroundColor = "red";
  });
  missionAbort.addEventListener("mouseout", (event) => {
    let background = event.target;
    background.style.color = "white";
    document.body.style.backgroundColor = "white";
  });
  missionAbort.addEventListener("click", (event) => {
    let text = "Are you sure you want to cancel?";
    if (confirm(text) === true) {
      text = "Mission aborted! Space shuttle returning home.";
    } else {
      text = "You pressed cancel.";
    }
    document.getElementById("statusReport").innerHTML = text;
  });
  // Put your code for the exercises here.
}

window.addEventListener("load", init);
