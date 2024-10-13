const container = document.getElementById("block");
const coordinatesDisplay = document.getElementById("cordinat");

container.addEventListener("mousemove", (event) => {
  const rect = container.getBoundingClientRect();
  const x = Math.floor(event.clientX - rect.left);
  const y = event.clientY - rect.top;

  coordinatesDisplay.innerHTML = `Координаты: (x: ${x}, y: ${y})`;
});
