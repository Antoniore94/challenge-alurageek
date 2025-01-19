import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-form]");

async function crearProducto(e){
  e.preventDefault();

  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;

  try {
    await conexionAPI.crearProducto(nombre, precio, imagen);
  } catch(e) {
    alert(e);
  }
}

formulario.addEventListener('submit', (e) => {
  crearProducto(e)
})