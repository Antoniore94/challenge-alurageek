const BASE_URL = "https://678d79b9f067bf9e24ea641a.mockapi.io/products";

//GET
async function listarProductos(){
  try{
    const conexion = await fetch(BASE_URL);
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
  } catch (e) {
    throw new Error(`Error al obtener la lista de productos: ${e}`);
  }
}

//POST
async function crearProducto(nombre, precio, imagen) {
  const conexion = await fetch(BASE_URL, {
    method: "POST",
    headers: {"Content-type":"application/json"},
    body:JSON.stringify({
      nombre: nombre,
      precio: precio,
      imagen: imagen
    })
  })
  const conexionConvertida = conexion.json();
  
  if(!conexion.ok){
    throw new Error("Ha ocurrido un error al registrar el producto.");
  }

  return conexionConvertida;
}

//DELETE
async function eliminarProducto(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {"Content-type":"application/json"},
    });
  } catch (e) {
    throw new Error(`Error al obtener la lista de productos: ${e}`);
  }
}


export const conexionAPI = {
  listarProductos, crearProducto, eliminarProducto
}