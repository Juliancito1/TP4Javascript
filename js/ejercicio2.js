let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar(dinero){
        this.saldo = this.saldo + dinero;
    },
    extraer(dinero)
    {
        if(this.saldo>0)
        {
         this.saldo = this.saldo - dinero;
        }
        else{
           console.log("La cuenta no tiene dinero para extraer");
        }
    },
    informar(){
        console.log(`Hola ${this.titular}`)
        console.log(`Su cuenta tiene $${this.saldo}`)
    }
}