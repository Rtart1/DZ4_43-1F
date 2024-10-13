const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const counter = document.getElementById("counter");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
  counter.style.color = "rgb(26, 224, 36)";
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.innerHTML = count;
    counter.style.color = "red";
  }
});
