const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const contenedorTarjetas = document.getElementById("productos-container")












function productosInicio(productos) {

      contenedorTarjetas.innerHTML = "";

      if (productos.length === 0) {
            noResults.style.display = "block";
      } else {
            productos.forEach((producto) => {
                  const tiendaNueva = document.createElement("info-product")
                  tiendaNueva.classList = "item"
                  tiendaNueva.innerHTML = `
      <div class="item">
      <img class="foto" src="${producto.img}">
      <div class="info-product">
      <h2>${producto.name}</h2>
      <p class="price">${producto.price}$</p>
      <button class="btn">Añadir al carrito</button>
      </div>
      </div>
      `
                  contenedorTarjetas.append(tiendaNueva);

                  contenedorTarjetas.appendChild(tiendaNueva)
                  tiendaNueva.getElementsByTagName("button")[0].addEventListener("click", () => agregarCarrito(producto))
            });

            noResults.style.display = "none";

      }

}





const handleSearch = () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredProducts = tienda.filter((producto) => producto.name.toLowerCase().startsWith(searchTerm));

      productosInicio(filteredProducts);
};


productosInicio(tienda);

searchInput.addEventListener("input", handleSearch);
