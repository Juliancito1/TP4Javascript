//10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
//Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

//Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones a diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

class Aeropuerto{
    #nombreAeropuerto
    #listaAviones
    constructor(nombreAeropuerto,listaAviones)
    {
        this.#nombreAeropuerto=nombreAeropuerto;
        this.#listaAviones=listaAviones
    }
    
    get nombreAeropuerto()
    {
        return this.#nombreAeropuerto
    }

    set nombreAeropuerto(newnombreAeropuerto)
    {
        this.#nombreAeropuerto = newnombreAeropuerto;
    }

    get listaAviones()
    {
        return this.#listaAviones
    }

    set listaAviones(newListaAviones)
    {
        this.#listaAviones=newListaAviones;
    }

    agregarAvion(avion)
    {
        this.#listaAviones.push(avion);
    }

    buscarAvion(nombre)
    {
        const aux = this.#listaAviones.filter(avi => avi.nombre === nombre)
        console.log(aux.length)
        if(aux.length !== 0){
            document.write(`<p>Nombre del Avion: ${aux[0].nombre}</p>`)
            document.write(`<p>La capacidad del Avion es para: ${aux[0].capacidad} pasajeros</p>`)
            document.write(`<p>Destino del avion: ${aux[0].destino}</p>`)
            document.write(`<p>Lista de pasajeros: ${aux[0].listaPasajeros}</p>`)
        }
        else
        {
            document.write("<p>El avion ingresado no existe no existe</p>")
        }
    }

    abordar(nombre,pasajeros)
    {
        const aux = this.#listaAviones.findIndex(avi => avi.nombre == nombre)
        console.log(aux)
        if(aux >= 0)
        {
            if(pasajeros < this.#listaAviones[aux].capacidad && this.#listaAviones[aux].listaPasajeros < this.#listaAviones[aux].capacidad)
            {
                this.#listaAviones[aux].listaPasajeros += pasajeros
                document.write("Pasajeros Abordando")
            }
            else{
                document.write("El Avión esta lleno")
            }
        }
    }
}

let aeropuerto1 = new Aeropuerto("Aeropuerto Internacional",[{nombre: "Boeing 747",capacidad: 426, destino: "New York, Estados Unidos",listaPasajeros: 200}, {nombre: "Boeing 748",capacidad: 400, destino: "Rio de Janeiro, Brasil",listaPasajeros: 250}, {nombre: "Boeing 749",capacidad: 350, destino: "Madrid, España",listaPasajeros: 100}])


