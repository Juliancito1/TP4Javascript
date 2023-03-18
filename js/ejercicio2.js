/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta. */

class Cuenta {
    constructor(titular){
    this.titular = titular,
    this.saldo= 0
    }

    ingresar(dinero){
        this.saldo += dinero;
    }
    extraer(dinero)
    {
        if(this.saldo>0)
        {
         this.saldo -= dinero;
        }
        else{
           console.log("La cuenta no tiene dinero para extraer");
        }
    }
    informar(){
        console.log(`Hola ${this.titular}`)
        console.log(`Su cuenta tiene $${this.saldo}`)
    }
}

let alex = new Cuenta("Alex");