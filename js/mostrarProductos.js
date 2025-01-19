import eventoBorrar from "./borrarProducto.js";
import { conexionAPI } from "./conexionAPI.js";

const productContainer = document.querySelector("[data-product]");

function crearCard(nombre, precio, imagen, id) {
  const producto = document.createElement("div");
  producto.className = "card";
  producto.innerHTML = `
    <img src="${imagen}" />
    <div class="card-container--info">
      <p>${nombre}</p>
      <div class="card-container--value">
        <p>$ ${precio}</p>
        <img class="card-container--icon" src="./assets/papelera.svg" />
      </div>
    </div>
  `
  eventoBorrar(producto, id);

  return producto;
};

async function listarProductos() {
  try{
    const listaAPI = await conexionAPI.listarProductos();
    listaAPI.forEach(producto => {
      productContainer.appendChild(
        crearCard(producto.nombre, producto.precio, producto.imagen, producto.id)
      )
    });
  } catch {
    productContainer.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión.</h2>`
  }
}

listarProductos();