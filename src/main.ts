import { factory } from "./factory";
import inputHandler from "./inputHandler";

type countConfig = {
  start: number,
  step: number
}

const start_at_control = document.getElementById(
  "start_at",
) as HTMLInputElement;
const step_control = document.getElementById("step") as HTMLInputElement;
const count_button = document.querySelector(
  ".count_button",
) as HTMLButtonElement;

const current_count = document.querySelector(
  ".current_count",
) as HTMLSpanElement;

let countConfig = {
  start: Number(start_at_control.value),
  step: Number(step_control.value),
}

let count = factory(countConfig.start, countConfig.step);

function update_count_and_reset_counter() {
  console.log(countConfig.start)
  if (countConfig.start != undefined && countConfig.step != undefined) {
    count = factory(countConfig.start, countConfig.step);
    current_count.textContent = countConfig.start.toString();
  }
}

start_at_control?.addEventListener("input", (event) => {
  inputHandler(event, (value) => {
    countConfig.start = value;
    update_count_and_reset_counter();
  })
});

step_control?.addEventListener("input", (event) => {
  inputHandler(event, (value) => {
    countConfig.step = value;
    update_count_and_reset_counter();
  })
});

function update_count() {
  current_count.textContent = count().toString();
}

count_button.addEventListener("click", update_count);
