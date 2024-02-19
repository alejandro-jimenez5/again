
function agregarCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("tienda"));
    let cuenta = 0
    if (!memoria) {
        const nuevoProducto = getNuevoProducto (producto);
        localStorage.setItem("tienda", JSON.stringify([nuevoProducto]))
        cuenta = 1;
    } else {
        const indiceProducto = memoria.findIndex(tienda => tienda.id === producto.id);
        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProducto(producto))
            cuenta = 1;
        } else {
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("tienda", JSON.stringify(nuevaMemoria))
    }
    actualizarCarrito();
    return cuenta;
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("tienda"));
    const indiceProducto = memoria.findIndex(tienda => tienda.id === producto.id);
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1);
    }else{
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("tienda",JSON.stringify(memoria));
    actualizarCarrito();
}


function getNuevoProducto(producto) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cuentaCarrito = document.getElementById("carrito-de-compras")

function actualizarCarrito(){
    const memoria = JSON.parse(localStorage.getItem("tienda"));
    if(memoria && memoria.length>0){
        const cuenta = memoria.reduce((acum,current) => acum+current.cantidad,0);
        cuentaCarrito.innerText = cuenta;
    }else{

        cuentaCarrito.innerText = 0;
    }
    

}

actualizarCarrito();

