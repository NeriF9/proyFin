


// Función para abrir el carrito en la misma pestaña
function abrirCarrito() {
    // Redirige la ventana actual a la página del carrito
    window.location.href = 'carrito.html';
}


document.addEventListener('DOMContentLoaded', function () {
    const todosButton = document.getElementById('todosButton');
    const controladorButton = document.getElementById('controladorButton');
    const temporizadorButton = document.getElementById('temporizadorButton');
    const dosificadorButton = document.getElementById('dosificadorButton');
    const botonCarrito = document.getElementById('botonCarrito');
    const contenedorProductos = document.getElementById('productos');
    const itemsCarrito = document.getElementById('itemsCarrito');
    const precioTotal = document.getElementById('precioTotal');



    // Nuevo event listener para abrir el carrito en otra ventana
    botonCarrito.addEventListener('click', function () {
        abrirCarrito();
    });




    // Función para cargar productos desde localStorage
    function cargarProductos(key) {
        const productos = localStorage.getItem(key);
        return productos ? JSON.parse(productos) : null;
    }

    // Función para guardar productos en localStorage
    function guardarProductosEnLocalStorage(key, productos) {
        localStorage.setItem(key, JSON.stringify(productos));
    }

    // Definir una estructura de productos para cada sección
    const productosTodos = cargarProductos('productosTodos') || [
        { id: 1, nombre: 'NG-2', precio: 200, imagen: '/img-Cont-Temp/ng-2.jpg' },
        { id: 2, nombre: 'NL-2', precio: 200, imagen: '/img-Cont-Temp/nl2_folleto_1.jpg' },
        { id: 3, nombre: 'NW-2', precio: 200, imagen: '/img-Cont-Temp/nw2_folleto_1.jpg' },
        { id: 4, nombre: 'TG-2', precio: 200, imagen: '/img-Temporizador/tg2_folleto_1.jpg' },
        { id: 5, nombre: 'TL-2', precio: 200, imagen: '/img-Temporizador/tl2_folleto_1.jpg' },
        { id: 6, nombre: 'TW-2', precio: 200, imagen: '/img-Temporizador/tw2_folleto_1.jpg' },
        { id: 7, nombre: 'LF-19', precio: 2000, imagen: '/img-Caudalimetro/lf19_folleto1.jpg' },
        { id: 8, nombre: 'CR-D', precio: 1500, imagen: '/img-Caudalimetro/crd2_folleto1.jpg' },
    ];

    const productosControlador = cargarProductos('productosControlador') || [
        { id: 1, nombre: 'NG-2', precio: 200, imagen: '/img-Cont-Temp/ng-2.jpg' },
        { id: 2, nombre: 'NL-2', precio: 200, imagen: '/img-Cont-Temp/nl2_folleto_1.jpg' },
        { id: 3, nombre: 'NW-2', precio: 200, imagen: '/img-Cont-Temp/nw2_folleto_1.jpg' },
    ];

    const productosTemporizador = cargarProductos('productosTemporizador') || [
        { id: 4, nombre: 'TG-2', precio: 200, imagen: '/img-Temporizador/tg2_folleto_1.jpg' },
        { id: 5, nombre: 'TL-2', precio: 200, imagen: '/img-Temporizador/tl2_folleto_1.jpg' },
        { id: 6, nombre: 'TW-2', precio: 200, imagen: '/img-Temporizador/tw2_folleto_1.jpg' },
    ];

    const productosDosificador = cargarProductos('productosDosificador') || [
        { id: 7, nombre: 'LF-19', precio: 2000, imagen: '/img-Caudalimetro/lf19_folleto1.jpg' },
        { id: 8, nombre: 'CR-D', precio: 1500, imagen: '/img-Caudalimetro/crd2_folleto1.jpg' },
    ];

    // Función para mostrar productos en la sección correspondiente
    function mostrarProductos(productos, key) {
        contenedorProductos.innerHTML = '';

        productos.forEach(producto => {
            const elementoProducto = document.createElement('div');
            elementoProducto.classList.add('producto');
            elementoProducto.innerHTML = `
                <img src="./recursos${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio}, '${key}')">Añadir al carrito</button>
            `;
            contenedorProductos.appendChild(elementoProducto);
        });
    }

    // Función para agregar productos al carrito
    window.agregarAlCarrito = function (id, nombre, precio, key) {
        const itemCarrito = document.createElement('li');
        itemCarrito.innerHTML = `${nombre} - $${precio}`;
        itemsCarrito.appendChild(itemCarrito);

        actualizarPrecioTotal();
        guardarCarritoEnLocalStorage();


        const productosEnCarrito = cargarProductos('carrito') || [];
        productosEnCarrito.push({ id, nombre, precio });
        guardarProductosEnLocalStorage('carrito', productosEnCarrito);
    };

    // Función para actualizar el precio total
    function actualizarPrecioTotal() {
        const items = itemsCarrito.children;
        let total = 0;

        for (let i = 0; i < items.length; i++) {
            const precio = parseFloat(items[i].innerText.split('$')[1]);
            total += precio;
        }

        precioTotal.innerText = `Total: $${total.toFixed(2)}`;
    }

    // Función para guardar el estado del carrito en localStorage
    function guardarCarritoEnLocalStorage() {
        const productosCarrito = Array.from(itemsCarrito.children).map(item => item.innerText);
        localStorage.setItem('carrito', JSON.stringify(productosCarrito));
    }



    // Event listeners para los botones del navbar
    todosButton.addEventListener('click', function () {
        mostrarProductos(productosTodos, 'productosTodos');
    });

    controladorButton.addEventListener('click', function () {
        mostrarProductos(productosControlador, 'productosControlador');
    });

    temporizadorButton.addEventListener('click', function () {
        mostrarProductos(productosTemporizador, 'productosTemporizador');
    });

    dosificadorButton.addEventListener('click', function () {
        mostrarProductos(productosDosificador, 'productosDosificador');
    });

    // Nueva llamada para mostrar todos los productos al cargar la página
    mostrarProductos(productosTodos, 'productosTodos');

});




