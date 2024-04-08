let idPersona;

/*****************************/
//Funciones de index.html
function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validar campos
  if (username === '' || password === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  //Enviar datos con fetch
  const name1 = document.getElementById('username').value;
  const password1 = document.getElementById('password').value.trim();

  //Guardar el id del usuario que entra
  fetch('/buscarId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name1, password1})
  })
  .then(response => response.json())
  .then(data => {
    // Hacer algo con los datos recibidos, como asignarlos a variables
    const id = data.id; // Accede directamente a la propiedad 'id'
    idPersona = id;
    localStorage.setItem('idPersona', id);
    console.log(idPersona);
  })
  .catch(error => console.error('Error al obtener datos:', error));

  //Verificar que exista el usuario y dar paso  
  fetch('/buscarUsuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name1, password1 })
  })
    .then(response => {
      if (response.ok) {
        idPersona = localStorage.getItem('idPersona');
        window.location.href = `/home.html?idPersona=${idPersona}`;
      } else {
        alert('Usuario o contraseña equivocados');
      }
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });


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

  //Enviar datos con fetch
  const name1 = document.getElementById('name').value;
  const email1 = document.getElementById('email').value;
  const password1 = document.getElementById('password').value.trim();

  //Buscar usuario o correo repetidos
  fetch('/buscarRepetido', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name1, email1})
  })
    .then(response => {
    if (response.ok) {
      alert('Usuario o Correo electrónico en uso');
    } 
  })
  .catch(error => {
    console.error('Error en la solicitud:', error);
  });

  fetch('/insertarUsuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name1, email1, password1 })
  })
    .then(response => {
      if (response.ok) {
        alert('Datos enviados correctamente');
        window.location.href = '/index.html';
      } else {
        alert('Error al enviar datos');
      }
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
}


/*************************/
//Funciones del home.html

const productos = [
  { nombre: 'Hamburguesa Sencilla', precio: 8 },
  { nombre: 'Hamburguesa Doble', precio: 12 },
  { nombre: 'Hamburguesa con Queso', precio: 10 },
  { nombre: 'Hamburguesa con Bacon', precio: 10 },
  { nombre: 'Pizza Margarita', precio: 12 },
  { nombre: 'Pizza Pepperoni', precio: 15 },
  { nombre: 'Pizza Hawaiana', precio: 14 },
  { nombre: 'Papas Fritas Pequeñas', precio: 4 },
  { nombre: 'Papas Fritas Medianas', precio: 5 },
  { nombre: 'Papas Fritas Grandes', precio: 6 }
];

const promociones = [
  { nombre: 'Combo Hamburguesa + Papas', precio: 12 },
  { nombre: 'Pizza Grande + Bebida', precio: 18 },
  { nombre: 'Combo Familiar (Pizza + Hamburguesa + Papas)', precio: 25 }
];

let pedidos = [];

function mostrarProductos() {
  const contenido = document.getElementById('contenido');
  contenido.innerHTML = '';
  const moduloProductos = document.createElement('div');
  moduloProductos.classList.add('modulo-productos');

  productos.forEach(producto => {
      const itemProducto = document.createElement('div');
      itemProducto.classList.add('producto');
      itemProducto.innerHTML = `
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio}</p>
          <button onclick="agregarAlPedido('${producto.nombre}', ${producto.precio})">Agregar al Pedido</button>
      `;
      moduloProductos.appendChild(itemProducto);
  });

  contenido.appendChild(moduloProductos);
}

function mostrarPromociones() {
  const contenido = document.getElementById('contenido');
  contenido.innerHTML = '';
  const moduloPromociones = document.createElement('div');
  moduloPromociones.classList.add('modulo-promociones');

  promociones.forEach(promocion => {
      const itemPromocion = document.createElement('div');
      itemPromocion.classList.add('promocion');
      itemPromocion.innerHTML = `
          <h3>${promocion.nombre}</h3>
          <p>Precio: $${promocion.precio}</p>
          <button onclick="agregarAlPedido('${promocion.nombre}', ${promocion.precio})">Agregar al Pedido</button>
      `;
      moduloPromociones.appendChild(itemPromocion);
  });

  contenido.appendChild(moduloPromociones);
}

function mostrarPedidos() {
  const contenido = document.getElementById('contenido');
  contenido.innerHTML = '';
  const moduloPedidos = document.createElement('div');
  moduloPedidos.id = 'pedido-lista';

  pedidos.forEach(pedido => {
      const itemPedido = document.createElement('div');
      itemPedido.textContent = `${pedido.nombre} - Precio: $${pedido.precio}`;
      moduloPedidos.appendChild(itemPedido);
  });

  contenido.appendChild(moduloPedidos);
}

function agregarAlPedido(nombre, precio) {
  pedidos.push({ nombre, precio });
  mostrarPedidos();
}


//Funciones del home para BD
const urlParams = new URLSearchParams(window.location.search);
const idPersona1 = urlParams.get('idPersona');

// Construir la URL del fetch con el valor de idPersona
const url = `/home?idPersona=${idPersona1}`;
fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    // Hacer algo con los datos recibidos, como asignarlos a variables
    const name = data.name; // Accede directamente a la propiedad 'id'
    namePersona = name;
    console.log(data);
    document.getElementById('nombre123').innerText = namePersona;

  })
  .catch(error => console.error('Error al obtener datos:', error));
