let auto = {
    marca: "Renault",
    color: "Negro",
    modelo: "Renault 12",
    encendido: false,

    encender(){
        auto.encendido=true;
        console.log("El auto está encendido")
    },
    apagar(){
        auto.encendido=false;
        console.log("El auto está apagado")
    }
}