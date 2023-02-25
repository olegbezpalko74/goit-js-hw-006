const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault(); 

  const { email, password } = form.elements; 
  const userData = { email: email.value, password: password.value }; 

  if (!userData.email || !userData.password) {
    alert('Please fill in all fields'); 
    return;
  }

  console.log(userData); 
  form.reset(); 
});
