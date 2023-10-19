// Write your code here
console.log("done");
const bulb1 = document.querySelector("#lightbulb1");
const bulb2 = document.querySelector("#lightbulb2");
const bulb3 = document.querySelector("#lightbulb3");

const output = document.querySelector(".subtitle");

let count = 0;

bulb1.addEventListener("click", function () {
  count += 1;
  bulb1.classList.toggle("active");
  output.innerHTML = `You've clicked the lights ${count} times`;
});

bulb2.addEventListener("click", function () {
  count += 1;
  bulb2.classList.toggle("active");
  output.innerHTML = `You've clicked the lights ${count} times`;
});

bulb3.addEventListener("click", function () {
  count += 1;
  bulb3.classList.toggle("active");
  output.innerHTML = `You've clicked the lights ${count} times`;
});
