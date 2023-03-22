//9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.

class Animal{
    constructor(nombre,edad)
    {
        this.nombre=nombre;
        this.edad=edad;
    }
    getNombre()
    {
        return this.nombre;
    }
    setNombre(newNombre)
    {
        this.nombre=newNombre;
    }

    getEdad()
    {
        return this.edad;
    }
    setEdad(newEdad)
    {
        this.edad=newEdad;
    }

    emitirSonido()
    {
        document.write(`${this.nombre} esta emitiendo un sonido`)
    }
}

class Perro extends Animal{
    constructor(nombre,edad)
    {
        super(nombre,edad);
    }
    emitirSonido()
    {
        document.write(`<p>${this.nombre} esta ladrando</p>`);
    }
}
class Gato extends Animal{
    constructor(nombre,edad)
    {
        super(nombre,edad);
    }
    emitirSonido()
    {
        document.write(`<p>${this.nombre} esta maullando</p>`);
    }
}

let perro1= new Perro("Max",3)
let gato1= new Gato("Copito",4)

perro1.emitirSonido()
gato1.emitirSonido()