import { conexionAPI } from "./conexionAPI.js";

export default function eventoBorrar(producto, id){
  const deleteIcon = producto.querySelector(".card-container--icon");
  deleteIcon.addEventListener("click", async function () {
    try {
      await conexionAPI.eliminarProducto(id);
      producto.remove();
    } catch (e) {
      alert(e);
    }
  })
}