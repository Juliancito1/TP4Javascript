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

class Contacto{
    #nombre
    #telefono
    constructor(nombre,telefono)
    {
        this.#nombre=nombre;
        this.#telefono=telefono;
    }

    get nombre(){
        return this.#nombre
    }

    set nombre(newNombre){
        this.#nombre=newNombre;
    }

    get telefono(){
        return this.#telefono
    }

    set telefono(newtelefono){
        this.#telefono=newtelefono;
    }

    aniadirContacto(contacto){
        let contactos = []
        contactos.push(contacto);
    }
    existeContacto(contacto){
        contactos.includes(contacto)
    }
    listarContactos(){
        document.write(`
        <ul>
        <li>Nombre: ${this.#nombre}</li>
        <li>Telefono: ${this.#telefono}</li>
        </ul>`)
    }
}

let contacto1 = new Contacto("Julian",3814322438)
contacto1.aniadirContacto(contacto1);

