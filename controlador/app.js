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
