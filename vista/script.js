function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Validar campos
    if (username === '' || password === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Aquí puedes implementar la lógica de autenticación
    alert('Función de login aún no implementada.');
  }
  
  function openCreateAccount() {
    window.open('create-account.html', '_blank');
  }
  
