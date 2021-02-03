import Counter from "./modules/Counter.js";

export default function App() {
  new Counter({ $app: document.querySelector("#app") });
}

App();

const $plusButton = document.querySelector(".plus-button");
const $minusButton = document.querySelector(".minus-button");
const $countDisplay = document.querySelector(".count-display");

const increaseValue = () => {
  if ($countDisplay.value >= 12) {
    return;
  }
  $countDisplay.value = Number($countDisplay.value) + 1;
};

const decreaseValue = () => {
  if ($countDisplay.value <= 8) {
    return;
  }
  $countDisplay.value = Number($countDisplay.value) - 1;
};

$plusButton.addEventListener("click", increaseValue);
$minusButton.addEventListener("click", decreaseValue);
