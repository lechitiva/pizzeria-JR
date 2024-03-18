
//Funciones de index.html
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Validar campos
    if (username === '' || password === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
  }
  
  function openCreateAccount() {
    window.open('createAccount.html', '_self');
  }

/** xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

  //Funciones de createAccount.html
  function createAccount() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Validar campos
    if (name === '' || email === '' || password === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
  }
  
