const contenedorTarjetas = document.getElementById("cabecera")
const precioElement = document.getElementById("precio")
const unidadeElement = document.getElementById("unidades")
const carritoVacio = document.getElementById("carrito-vacio")
const totalesElement = document.getElementById("totales")
const reiniciarElement = document.getElementById("reiniciar")
const comprarElement = document.getElementById("comprar")



function productosInicio() {
    contenedorTarjetas.innerHTML = ""
    const productos = JSON.parse(localStorage.getItem("tienda"));
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            const tiendaNueva = document.createElement("div")
            tiendaNueva.classList = "cabecera"
            tiendaNueva.innerHTML = `
    <img class="foto" src="${producto.img}">
    <h2>${producto.name}</h2>
    <p class="price">${producto.price}$</p>
    <div>
    <button class="pepa">-</button>
    <spam class="cantidad">${producto.cantidad}</spam>
    <button class="pepa">+</button>
    </div>
    `;
            contenedorTarjetas.appendChild(tiendaNueva)
            tiendaNueva
                .getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                    const cuentaElemnt = e.target.parentElement.getElementsByTagName("spam")[0];
                    cuentaElemnt.innerText = agregarCarrito(producto);
                    actualizarTotales();
                });
            tiendaNueva
                .getElementsByTagName("button")[0]
                .addEventListener("click", (e) => {
                    restarAlCarrito(producto);
                    productosInicio();
                    actualizarTotales();
                })
        });

    }
}

productosInicio();
actualizarTotales();

function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("tienda"));
    let unidades = 0;
    let price = 0;
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            unidades += producto.cantidad;
            price += producto.price * producto.cantidad;
        })
        unidadeElement.innerText = unidades;
        precioElement.innerText = price;
    }

    revisarElement();
}

function revisarElement(){
    const productos = JSON.parse(localStorage.getItem("tienda"));
    console.log(productos, productos == true)
    carritoVacio.classList.toggle("escondido",productos && productos.length>0);
    totalesElement.classList.toggle("escondido",!(productos && productos.length>0));
}

revisarElement();

reiniciarElement.addEventListener("click", reiniciarCarrito);
function reiniciarCarrito(){
    localStorage.removeItem("tienda");
    actualizarTotales();
    productosInicio();
    actualizarCarrito();

    Swal.fire({
        title: "Se borraron correctamente todos los productos",
        icon: "success"
      });


}

comprarElement.addEventListener("click", comprarProductos);
function comprarProductos(){
    localStorage.removeItem("tienda");
    actualizarTotales();
    productosInicio();
    actualizarCarrito();

    Swal.fire({
        title: "Gracias por tu compra",
        icon: "success"
      });
}
