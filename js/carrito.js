document.addEventListener('DOMContentLoaded', function () {
    const itemsCarrito = document.getElementById('itemsCarrito');
    const precioTotal = document.getElementById('precioTotal');
    const productosCarrito = document.getElementById('productosCarrito');

    // Función para cargar productos desde localStorage
    function cargarProductos() {
        const productos = localStorage.getItem('carrito');
        return productos ? JSON.parse(productos) : [];
    }

    // Función para mostrar productos en el carrito
    function mostrarCarrito() {
        itemsCarrito.innerHTML = '';
        productosCarrito.innerHTML = '';

        const productosEnCarrito = cargarProductos();

        productosEnCarrito.forEach(producto => {
            const itemCarrito = document.createElement('li');
            const productoInfo = producto;

            const productoEnCarrito = document.createElement('div');
            productoEnCarrito.classList.add('producto-en-carrito');

            if (productoInfo.imagen) {
                const imagenProducto = document.createElement('img');
                imagenProducto.src = `../recursos${productoInfo.imagen}`;
                imagenProducto.alt = productoInfo.nombre;

                const nombreProducto = document.createElement('span');
                nombreProducto.textContent = productoInfo.nombre;

                productoEnCarrito.appendChild(imagenProducto);
                productoEnCarrito.appendChild(nombreProducto);

                itemCarrito.appendChild(productoEnCarrito);
                itemsCarrito.appendChild(itemCarrito);
            } else {
                console.log('Advertencia: La propiedad "imagen" está indefinida para el producto:', productoInfo);
            }
        });

        actualizarPrecioTotal();
    }

    // Función para actualizar el precio total
    function actualizarPrecioTotal() {
        const productosEnCarrito = cargarProductos();
        let total = 0;

        productosEnCarrito.forEach(producto => {
            total += producto.precio;
        });

        precioTotal.innerText = `Total: $${total.toFixed(2)}`;
    }

    // Cargar y mostrar productos en el carrito al cargar la página
    mostrarCarrito();

    // Event listener para redirigir al hacer clic en el logo del carrito
    const logoCarrito = document.querySelector('.logo');
    logoCarrito.addEventListener('click', function () {
        // Redirige a la página principal (index.html)
        window.location.href = 'index.html';
    });

    // Event listener para cerrar la ventana del carrito al hacer clic en el botón "Cerrar"
    const cerrarModal = document.getElementById('cerrarModal');
    cerrarModal.addEventListener('click', function () {
        // Redirige a la página principal (index.html)
        window.location.href = 'index.html';
    });
});




// document.addEventListener('DOMContentLoaded', function () {
//     const itemsCarrito = document.getElementById('itemsCarrito');
//     const precioTotal = document.getElementById('precioTotal');
//     const productosCarrito = document.getElementById('productosCarrito');

//     // Función para cargar productos desde sessionStorage
//     function cargarProductos(key) {
//         const productos = sessionStorage.getItem(key);
//         return productos ? JSON.parse(productos) : null;
//     }

//     // Función para mostrar productos en el carrito
//     function mostrarCarrito() {
//         itemsCarrito.innerHTML = '';
//         productosCarrito.innerHTML = '';

//         const productosEnCarrito = cargarProductos('carrito') || [];

//         productosEnCarrito.forEach(producto => {
//             const itemCarrito = document.createElement('li');
//             const productoInfo = producto;

//             const productoEnCarrito = document.createElement('div');
//             productoEnCarrito.classList.add('producto-en-carrito');

//             if (productoInfo.imagen) {
//                 const imagenProducto = document.createElement('img');
//                 imagenProducto.src = `../recursos${productoInfo.imagen}`;
//                 imagenProducto.alt = productoInfo.nombre;

//                 const nombreProducto = document.createElement('span');
//                 nombreProducto.textContent = productoInfo.nombre;

//                 productoEnCarrito.appendChild(imagenProducto);
//                 productoEnCarrito.appendChild(nombreProducto);

//                 itemCarrito.appendChild(productoEnCarrito);
//                 itemsCarrito.appendChild(itemCarrito);
//             } else {
//                 console.log('Advertencia: La propiedad "imagen" está indefinida para el producto:', productoInfo);
//             }
//         });

//         actualizarPrecioTotal();
//     }

//     // Función para actualizar el precio total
//     function actualizarPrecioTotal() {
//         const items = itemsCarrito.children;
//         let total = 0;

//         for (let i = 0; i < items.length; i++) {
//             const precio = parseFloat(items[i].innerText.split('$')[1]);
//             total += precio;
//         }

//         precioTotal.innerText = `Total: $${total.toFixed(2)}`;
//     }

//     // Cargar y mostrar productos en el carrito al cargar la página
//     mostrarCarrito();

//     // Event listener para redirigir al hacer clic en el logo del carrito
//     const logoCarrito = document.querySelector('.logo');
//     logoCarrito.addEventListener('click', function () {
//         // Redirige a la página principal (index.html)
//         window.location.href = 'index.html';
//     });

//     // Event listener para cerrar la ventana del carrito al hacer clic en el botón "Cerrar"
//     const cerrarModal = document.getElementById('cerrarModal');
//     cerrarModal.addEventListener('click', function () {
//         // Redirige a la página principal (index.html)
//         window.location.href = 'index.html';
//     });
// });







