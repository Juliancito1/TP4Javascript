/* Con el siguiente array de objetos, crear una funcion que permita dibujar una tabla con las columnas Producto - categoria - precio. Realizar las siguientes tareas:

Mostrar la tabla completa

filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.

Buscar un producto serum y mostrarlo por pantalla,

Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto no existe en el array. */

let listaProductos = [
    {
      nombreProducto: "Hidratante facial",
      precio: 3500,
      categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
      nombreProducto: "Protector solar factor 50",
      precio: 3300,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar toque seco factor 50",
      precio: 4100,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar con color factor 50",
      precio: 3850.5,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Gel de limpieza facial",
      precio: 1740.99,
      categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
      nombreProducto: "Exfoliante de azúcar cherry",
      precio: 1200,
      categoria: "Labios",
    },
    {
      nombreProducto: "Pads de hidrogel para contorno de ojos",
      precio: 2800,
      categoria: "Ojos",
    },
    {
      nombreProducto: "Mascarilla facial",
      precio: 3250.99,
      categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
      nombreProducto: "Protector solar en barra",
      precio: 3800,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Mascara de hidratación y reparación",
      precio: 1200,
      categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
  ];

function mostrarTabla(){
document.write(
    `<table border><tbody>
    <td>Nombre</td>
    <td>Precio</td>
    <td>Categoria</td>`)
for(let i = 0;i<listaProductos.length;i++)
{
    document.write("<tr>")
    document.write(`<td>${listaProductos[i].nombreProducto}</td>`)
    document.write(`<td>${listaProductos[i].precio}</td>`)
    document.write(`<td>${listaProductos[i].categoria}</td>`)
    document.write("</tr>")
}
document.write("</tr>")
document.write("</tbody></table>")
}

let protectoresSolares = listaProductos.filter(producto => producto.nombreProducto.includes("Protector"));

function filtrarTabla(){
document.write(
    `<table border><tbody>
    <td>Nombre</td>
    <td>Precio</td>
    <td>Categoria</td>`)
for(let i = 0;i<protectoresSolares.length;i++)
{
    document.write("<tr>")
    document.write(`<td>${protectoresSolares[i].nombreProducto}</td>`)
    document.write(`<td>${protectoresSolares[i].precio}</td>`)
    document.write(`<td>${protectoresSolares[i].categoria}</td>`)
    document.write("</tr>")
}
document.write("</tr>")
document.write("</tbody></table>")
}

let buscar = listaProductos.find(producto => producto.nombreProducto.includes('Sérum'));

function buscarProducto()
{
  if(buscar)
  {
  document.write(
    `<table border><tbody>
    <td>Nombre</td>
    <td>Precio</td>
    <td>Categoria</td>`)
    document.write("<tr>")
  document.write(`<td>${buscar.nombreProducto}</td>`)
  document.write(`<td>${buscar.precio}</td>`)
  document.write(`<td>${buscar.categoria}</td>`)
document.write("</tr>")
document.write("</tbody></table>")
  }
  else{
    document.write("El producto buscado no existe")
  }
}


