class Producto {
    constructor(nombre, precio, detalle, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }


    sumarIva() {
    return this.precio * 1.21;
}

    vender(){
    this.disponible = false;
}

    precioSugerido(){
    return this.precio * 1.21 * 1.75;
}

}

var arrayProductos = [];
do {
    var comprobacion = prompt(`Ingrese el nombre del producto o fin para finarlizar`);
    if (comprobacion == "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
        break;
    }else{
        nombreP = comprobacion;
    var precioP = prompt(`Ingrese el precio del producto`);
    var detalleP = prompt(`Ingrese el detalle del producto`);
    var cantidadP = prompt(`Ingrese la cantidad comprada`);
    arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
}

while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin" )

console.log(arrayProductos);

for (var producto of arrayProductos) {
    document.write("<h3> El producto ingresado es: " +producto.nombre + "</h3>");
    document.write("<h3> El detalle del producto es: "+producto.detalle + "</h3>");
    document.write("<h3> Cantidad en stock del producto es: "+ producto.cantidad + "</h3>");
    document.write("<h3> El precio del producto + IVA (unidad) es: "+ producto.sumarIva() + "</h3>");
    document.write("<h3> El precio sugerido de venta es: "+ producto.precioSugerido() + "</h3>");

}
console.log(Producto.nombre);
console.log(Producto.detalle);
console.log(Producto.cantidad);
console.log(Producto.sumarIva());
console.log(Producto.precioSugerido());