

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls [data-create]');
const destroyBtn = document.querySelector('#controls [data-destroy]');
const boxesContainer = document.querySelector('#boxes');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// функція для створення колекції елементів
function createBoxes(amount) {
  let boxSize = 30;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxSize += 10;
  }

  boxesContainer.append(...boxes);
}

// функція для очищення колекції елементів
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(inputEl.value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);
