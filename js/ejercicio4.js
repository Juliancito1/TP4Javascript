/*  4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados. */

class Producto {
    constructor(codigo,nombre,precio)
    {
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio
    }

    imprimeDatos() {
        document.write(`
        <table border>
          <tbody>
            <tr>
              <th>Codigo</th>
              <th>Nombre del producto</th>
              <th>Precio</th>
            </tr>
            <tr>
              <td>${this.codigo}</td>
              <td>${this.nombre}</td>
              <td>$${this.precio}</td>
            </tr>
          </tbody></table>
        `);
      }
}

let producto1 = new Producto(23456,"Gaseosa Secco 3L",340);
let producto2 = new Producto(12543,"Galletas Diversion",200);
let producto3 = new Producto(45623,"Yogur 1 litro",300);
let arreglo = [];
arreglo.push(producto1,producto2,producto3);

for(let i = 0; i < arreglo.length;i++)
{
    arreglo[i].imprimeDatos()
}
