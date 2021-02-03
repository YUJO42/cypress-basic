export default function Counter({ $app }) {
  const render = () => {
    $app.innerHTML = `
       <div class="container">
          <h1>ui counter</h1>
          <div class="counter">
            <a href="#" class="minus-button"><span>-</span></a>
            <input name="count" type="text" class="count-display" value="10" />
            <a href="#" class="plus-button"><span>+</span></a>
          </div>
        </div>`;
  };

  const initEvent = () => {
    const $plusButton = document.querySelector(".plus-button");
    const $minusButton = document.querySelector(".minus-button");
    const $countDisplay = document.querySelector(".count-display");

    const increaseValue = () => {
      if ($countDisplay.value >= 12) {
        return;
      }
      $countDisplay.value = String(Number($countDisplay.value) + 1);
    };

    const decreaseValue = () => {
      if ($countDisplay.value <= 8) {
        return;
      }
      $countDisplay.value = String(Number($countDisplay.value) - 1);
    };

    $plusButton.addEventListener("click", increaseValue);
    $minusButton.addEventListener("click", decreaseValue);
  };

  const init = () => {
    render();
    initEvent();
  };

  init();
}
