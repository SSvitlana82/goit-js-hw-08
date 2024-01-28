const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const inputAmount = document.querySelector("input");
const boxesDiv = document.querySelector("#boxes");

inputAmount.addEventListener("input", handleInput);
buttonCreate.addEventListener("click", handleClickCreate);
buttonDestroy.addEventListener("click", handleClickDestroy);

let amount = 0;
const k = 30;

function handleInput() {
  amount = Number(inputAmount.value);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let boxes = "";

  for (let i = 0; i < amount; i++) {
    if (amount >= 1 && amount <= 100) {
      const color = getRandomHexColor();
      boxes += `<div style="background-color: ${color}; width: ${
        k + 10 * i
      }px; height: ${k + 10 * i}px"></div>`;
    }
  }
  return boxes;
}

function handleClickCreate() {
  boxesDiv.innerHTML = "";
  const markup = createBoxes(amount);
  boxesDiv.insertAdjacentHTML("afterbegin", markup);
  inputAmount.value = "";
}

function handleClickDestroy() {
  boxesDiv.innerHTML = "";
}
