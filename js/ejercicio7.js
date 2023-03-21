/* 7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades. */

class AgendaContactos{
    #contactos
    #limiteContacto
    constructor(contactos)
    {
        this.#contactos = contactos;
        this.#limiteContacto=10;
    }

    get contactos(){
        return this.#contactos
    }

    set contactos(newContacto){
        this.#contactos=newContacto;
    }

    get limiteContacto(){
        return this.#limiteContacto
    }

    aniadirContacto(contacto){
        this.#contactos.push(contacto);
    }
    existeContacto(contacto){
        const aux = this.#contactos.filter(cont => cont.nombre === contacto.nombre)
        console.log(aux.length)
        if(aux.length !== 0){
            document.write("El contacto existe")
        }
        else
        {
            document.write("El contacto no existe")
        }
    }
    listarContactos(){
        for(let i=0;i<this.#contactos.length;i++)
        {
        document.write(`
        <ul>
        <li>Nombre: ${this.#contactos[i].nombre}</li>
        <li>Telefono: ${this.#contactos[i].telefono}</li>
        </ul>`)
        }
    }
    buscarContacto(nombre){
        const aux = this.#contactos.filter(cont => cont.nombre === nombre)
        console.log(aux.length)
        if(aux.length !== 0){
            document.write(`El telefono es: ${aux[0].telefono}`)
        }
        else
        {
            document.write("El contacto no existe")
        }
    }
    //eliminarContacto(Contacto c){}
    //agendaLlena(){}
    //huecosLibres(){}
}

let contacto1 = new AgendaContactos([{nombre: "Julian", telefono: 38142314},{nombre: "Jose", telefono: 38123456}])
