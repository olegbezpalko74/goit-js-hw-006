const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', () => {
  const requiredLength = inputEl.getAttribute('data-length');
  const actualLength = inputEl.value.length;

  if (actualLength === parseInt(requiredLength)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});