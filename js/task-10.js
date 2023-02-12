function getRandomHexColor() {
  /**
   * For some reason random have possibility to generate hex that contains only 5 characters,
   * and when the color have 5 chars browser cannot parse that color, so the div keep white bg.
   * That is why we are check there if the hex have 6 chars in color plus "#", if not, then re-generate color.
   * Uncomment lines below to work properly:
   */
  
  // const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // return randomColor.length === 7 ? randomColor : getRandomHexColor();

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls')
const createBtn = controls.querySelector('button[data-create]');
const destroyBtn = controls.querySelector('button[data-destroy]');
const input = controls.querySelector('input[type="number"]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  let width = 30;
  let height = 30;
  const boxes = [];

  for( let i = 0; i < amount; i++) {
    boxes.push(`<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};"></div>`);
    
    width += 10;
    height += 10;
  }

  destroyBoxes();
  boxesContainer.insertAdjacentHTML('beforeend', boxes.join(''));
} 


function destroyBoxes () {
  boxesContainer.innerHTML = '';
}

