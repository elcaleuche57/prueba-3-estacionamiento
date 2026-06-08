// === PASO 1 Y 2: DATOS Y RENDERIZACIÓN INICIAL ===
const productos = [
    { id: 1, nombreProducto: "Teclado Mecánico", precioProducto: 45000, stock: 12 },
    { id: 2, nombreProducto: "Monitor 27\" 4K", precioProducto: 320000, stock: 5 },
    { id: 3, nombreProducto: "Mouse Inalámbrico", precioProducto: 18000, stock: 30 },
    { id: 4, nombreProducto: "Auriculares Bluetooth", precioProducto: 75000, stock: 8 },
    { id: 5, nombreProducto: "Webcam HD", precioProducto: 29000, stock: 0 }
];

function mostrarCatalogo() {
    const catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";

    productos.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("card-producto");
        
        if (p.stock === 0) {
            card.classList.add("sin-stock");
        }

        card.innerHTML = `
            <h2>${p.nombreProducto}</h2>
            <p class="precio">$${p.precioProducto.toLocaleString("es-CL")}</p>
            <p>${p.stock > 0 ? "Stock: " + p.stock : "Sin stock"}</p>
            <button class="btn-agregar" data-id="${p.id}" ${p.stock === 0 ? "disabled" : ""}>
                Agregar al carrito
            </button>
        `;
        catalogo.appendChild(card);
    });
}

// === PASO 3: LÓGICA DEL CARRITO ===
let carrito = [];
let totalCarrito = 0;

function agregarAlCarrito(id) {
    const productoBase = productos.find(p => p.id === id);
    const itemEnCarrito = carrito.find(item => item.id === id);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
    } else {
        carrito.push({ ...productoBase, cantidad: 1 });
    }

    actualizarCalculos();
    renderizarCarrito();
}

function actualizarCalculos() {
    totalCarrito = carrito.reduce((acc, item) => acc + (item.precioProducto * item.cantidad), 0);
}

function renderizarCarrito() {
    const listaHtml = document.getElementById("lista-carrito");
    const visorTotalFinal = document.getElementById("total-final");

    if (listaHtml) {
        listaHtml.innerHTML = "";
        carrito.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `${item.nombreProducto} x ${item.cantidad} <span>$${(item.precioProducto * item.cantidad).toLocaleString("es-CL")}</span>`;
            listaHtml.appendChild(li);
        });
    }

    if (visorTotalFinal) visorTotalFinal.innerText = `$${totalCarrito.toLocaleString("es-CL")}`;
}

// === PASO 4: VALIDACIÓN DE FORMULARIO ===
function validarFormularioPago(event) {
    event.preventDefault();

    const nombre = document.querySelector('input[name="nombre"]').value;
    const correo = document.querySelector('input[name="correo"]').value;
    const tarjeta = document.querySelector('input[name="tarjeta"]').value;
    const cvv = document.querySelector('input[name="cvv"]').value;

    const filtroCorreo = /\S+@\S+\.\S+/;
    const filtroTarjeta = /^\d{16}$/;
    const filtroCvv = /^\d{3}$/;

    if (nombre.length < 3) {
        alert("Error: Nombre muy corto.");
        return;
    }
    if (!filtroCorreo.test(correo)) {
        alert("Error: Correo no válido.");
        return;
    }
    if (!filtroTarjeta.test(tarjeta)) {
        alert("Error: La tarjeta debe tener 16 números.");
        return;
    }
    if (!filtroCvv.test(cvv)) {
        alert("Error: El CVV debe tener 3 números.");
        return;
    }

    confirmarCompra(nombre);
}

// === PASO 5: MODULARIZACIÓN Y CIERRE ===
function confirmarCompra(nombreUsuario) {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    alert(`¡Compra exitosa! Gracias, ${nombreUsuario}.`);
    carrito = [];
    actualizarCalculos();
    renderizarCarrito();
    document.getElementById("formulario-pago").reset();
}

function iniciarApp() {
    // ESTO ES LO QUE TE FALTABA: Llamar a la función que dibuja los productos
    mostrarCatalogo();

    document.getElementById("catalogo").addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-agregar")) {
            const id = parseInt(e.target.dataset.id);
            agregarAlCarrito(id);
        }
    });

    const form = document.getElementById("formulario-pago");
    if (form) {
        form.addEventListener("submit", validarFormularioPago);
    }
}

iniciarApp();