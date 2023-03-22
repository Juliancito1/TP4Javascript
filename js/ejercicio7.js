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
        if(this.#contactos.length < this.#limiteContacto)
        {
        this.#contactos.push(contacto);
        console.log("Contacto agregado")
        }
        else{
            console.log("<p>La agenda esta llena, no se pueden agregar más contactos</p>")
        }
    }
    existeContacto(buscarContacto){
        let aux = this.#contactos.find(cont => cont.nombre.includes(buscarContacto))
        if(aux !== undefined){
            console.log("<p>El contacto existe</p>")
        }
        else
        {
            console.log("<p>El contacto no existe</p>")
        }
    }
    listarContactos(){
        for(let i=0;i<this.#contactos.length;i++)
        {
            console.log(`Mostrando Contacto ${i+1}
        Nombre: ${this.#contactos[i].nombre}
        Telefono: ${this.#contactos[i].telefono}
        `)
        }
    }
    buscarContacto(nombre){
        const aux = this.#contactos.filter(cont => cont.nombre === nombre)
        if(aux.length !== 0){
            console.log(`<p>El telefono del contacto ${aux[0].nombre} es: ${aux[0].telefono}</p>`)
        }
        else
        {
            console.log("<p>El contacto no existe</p>")
        }
    }
    eliminarContacto(nombre){
        const aux = this.#contactos.findIndex(cont => cont.nombre === nombre)
        if(aux){
            this.#contactos.splice(aux,1)
            console.log("Contacto eliminado")
        }
        else
        {
            console.log("<p>El contacto no existe</p>")
        }
    }
    agendaLlena(){
        if(this.#contactos.length > this.#limiteContacto)
        {
            console.log("<p>La agenda esta llena</p>")
        }
        else{
            console.log("<p>La agenda no esta llena</p>")
        }
    }
    huecosLibres(){
        const calculo = this.#limiteContacto - this.#contactos.length
        if(calculo > 0)
        {
            console.log(`<p>La agenda tiene ${calculo} huecos libres</p>`) 
        
        }
        else{
            console.log(`<p>La agenda no tiene huecos libres</p>`) 
        }
    }
}

let agenda1 = new AgendaContactos([{nombre: "Julian", telefono: 38142314},{nombre: "Jose", telefono: 38123456},{nombre: "Roberto", telefono:381452832}])


alert("Bienvenido a su agenda de contactos")

do{
let opcion = parseInt(prompt(`Ingrese el numero (1 al 7) según lo que quiera realizar con su agenda
1-Agregar Contacto a la agenda
2-Verificar si existe un contacto en la agenda segun su nombre
3-Mostrar Contactos
4-Buscar el telefono de un contacto segun su nombre
5-Eliminar un contacto
6-Consultar si la agenda esta llena
7-Consultar cuantos huecos libres tiene la agenda`))


switch(opcion)
{
    
    case 1: 
        agenda1.aniadirContacto({nombre: prompt("Ingrese el nombre del contacto"), telefono: parseInt(prompt("Ingrese el telefono del contacto"))})
    break;
    case 2:
        let nombre = prompt("Ingrese el nombre del contacto")
        agenda1.existeContacto(nombre)
    break;
    case 3:
        agenda1.listarContactos()
    break;
    case 4:
        agenda1.buscarContacto(prompt("Ingrese el nombre del contacto"))
    break;
    case 5:
        agenda1.eliminarContacto(prompt("Ingrese el nombre del contacto a eliminar"))
    break;
    case 6:
        agenda1.agendaLlena()
    break;
    case 7:
        agenda1.huecosLibres()
    break;
    default:
        console.log("No ingreso una opcion correcta")
}}while(confirm("¿Desea seguir modificando su agenda o elegir una opcion valida?"));
