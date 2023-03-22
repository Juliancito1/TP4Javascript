//8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona{
    #profesion
    constructor(nombre,edad,profesion)
    {
        this.nombre = nombre;
        this.edad= edad;
        this.#profesion= profesion;
    }

    getNombre()
    {
        return this.nombre
    }
    setNombre(newNombre)
    {
        this.nombre=newNombre;
    }
    getEdad()
    {
        return this.edad
    }
    setEdad(newEdad)
    {
        this.edad=newEdad;
    }

    get profesion()
    {
      return  this.#profesion
    }

    set profesion(newProfesion)
    {
        this.#profesion=newProfesion;
    }

    saludar()
    {
        document.write(`<p>${this.nombre} esta saludando</p>`);
    }
    despedirse()
    {
        document.write(`<p>${this.nombre} se esta despidiendo</p>`);
    }
}

let persona1= new Persona("Pablo",30,"Profesor");
let persona2= new Persona("Miguel",24,"Programador");

persona1.saludar()
persona1.despedirse()
persona2.saludar()
persona2.despedirse()

