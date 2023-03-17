class Cuenta {
    constructor(titular,saldo){
    this.titular = titular,
    this.saldo= saldo
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

let alex = new Cuenta("Alex",0);