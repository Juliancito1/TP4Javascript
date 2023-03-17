let auto = {
    marca: "Renault",
    color: "Negro",
    modelo: "Renault 12",
    encendido: false,

    encender(){
        this.encendido=true;
        console.log("El auto está encendido")
    },
    apagar(){
        this.encendido=false;
        console.log("El auto está apagado")
    }
}