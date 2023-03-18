// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

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