const carritoCompras= [{nombreProducto:"Monitor Gamer 24", precioUnitario: 155000,cantidadComprada: 1},{nombreProducto:"Mouse Optico RGB", precioUnitario: 25000, cantidadComprada: 2},{nombreProducto:"Teclado Mecanico",precioUnitario:85000, cantidadComprada:1},{nombreProducto:"Memoria Ram 16GB",precioUnitario:65000,cantidadComprada: 2},{nombreProducto:"Disco SSD 1TB",precioUnitario:95000,cantidadComprada:1}];

function visualizarBoleta(carrito){
    console.log("--- Detalle de su compra ---");
    for(let producto of carrito){
        let subtotal = producto.precioUnitario * producto.cantidadComprada;
        console.log('${producto.nombreProducto}x${producto.cantidadComprada}: $${subtotal}!');
    }
}

function calcularTotalCompra(carrito) {
let totalAcumulado = 0; // Ligadura acumuladora
for (let producto of carrito) {
totalAcumulado += producto.precioUnitario * producto.cantidadComprada;
}
return totalAcumulado;
}
const totalFinal = calcularTotalCompra(carritoCompras);
console.log(`Total Final a Pagar: $${totalFinal}`);

