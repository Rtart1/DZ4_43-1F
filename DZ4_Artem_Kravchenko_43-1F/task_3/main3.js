function colorSubmit() {
  const trafficLight = document.getElementById("traffic_light").value;
  const message = document.getElementById("message");
  const revies_blok = document.getElementById("revies_blok");

  const redLight = document.getElementById("red_light");
  const yellowLight = document.getElementById("yellow_light");
  const greenLight = document.getElementById("green_light");

  redLight.classList.remove("active");
  yellowLight.classList.remove("active");
  greenLight.classList.remove("active");

  message.style.color = "";

  switch (trafficLight) {
    case "red":
      message.textContent = "Stop";
      message.style.color = "#ff1313";
      redLight.classList.add("active");
      break;
    case "yellow":
      message.textContent = "Get ready";
      message.style.color = "#ffe207";
      yellowLight.classList.add("active");
      break;
    case "green":
      message.textContent = "Go";
      message.style.color = "#0dff55";
      greenLight.classList.add("active");
      break;
    default:
      message.textContent = "Error";
  }

  revies_blok.style.display = "none";
}
