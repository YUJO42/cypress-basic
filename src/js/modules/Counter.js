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

  const UPPER_LIMIT = 12;
  const LOWER_LIMIT = 8;

  const isNoMoreThan = (value, upperLimit) => {
    if (!upperLimit) {
      upperLimit = UPPER_LIMIT;
    }
    return value >= upperLimit;
  };

  const isNoLessThan = (value, lowerLimit) => {
    if (!lowerLimit) {
      lowerLimit = LOWER_LIMIT;
    }
    return value <= lowerLimit;
  };

  const applyDiff = (elem, diff, limitCondition, limit) => {
    if (limitCondition(elem.value, limit)) {
      return;
    }
    elem.value = +elem.value + diff;
  };

  const handleCounter = () => {
    const $plusButton = document.querySelector('.plus-button');
    const $minusButton = document.querySelector('.minus-button');
    const $countDisplay = document.querySelector('.count-display');

    $plusButton.addEventListener('click', (e) => {
      applyDiff($countDisplay, +1, isNoMoreThan, UPPER_LIMIT);
    });
    $minusButton.addEventListener('click', (e) => {
      applyDiff($countDisplay, -1, isNoLessThan, LOWER_LIMIT);
    });
  };

  const init = () => {
    render();
    handleCounter();
  };

  init();
}
