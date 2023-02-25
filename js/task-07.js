// const fontSizeControl = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');

// fontSizeControl.addEventListener('input', (event) => {
//   const fontSize = event.target.value;
//   text.style.fontSize = `${fontSize}px`;
// });   

const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

inputEl.oninput = () => {
  textEl.style.fontSize = inputEl.value + 'px';
};