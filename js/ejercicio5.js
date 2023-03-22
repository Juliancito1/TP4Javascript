/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
 */

class Persona{
    constructor(nombre,edad,dni,sexo,peso,altura,anionacimiento)
    {
        this.nombre=nombre;
        this.edad=edad;
        this.dni=dni;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anionacimiento=anionacimiento;
    }
    mostrarGeneracion()
    {
        if(this.anionacimiento>=1930 && this.anionacimiento<=1948)
        {
            document.write(`Usted pertenece a la Generación Silenciosa y su rasgo característico es la Austeridad<br>`);
        }
        else if(this.anionacimiento>=1949 && this.anionacimiento<=1968)
        {
            document.write(`Usted pertenece a la Generación Baby Boom y su rasgo característico es la Ambición<br>`);
        }
        else if(this.anionacimiento>=1969 && this.anionacimiento<=1980)
        {
            document.write(`Usted pertenece a la Generación X y su rasgo característico es la Obsesión por el éxito<br>`);
        }
        else if(this.anionacimiento>=1981 && this.anionacimiento<=1993)
        {
            document.write(`Usted pertenece a la Generación Y (Millennials) y su rasgo característico es la Frustración<br>`);
        }
        else if(this.anionacimiento>=1994 && this.anionacimiento<=2010)
        {
            document.write(`Usted pertenece a la Generación Z y su rasgo característico es la Irreverencia<br>`);
        }
    }
    esMayorDeEdad()
    {
        if(this.edad>=18)
        {
            document.write("Es mayor de Edad<br>")
        }
        else{
            document.write("No es mayor de Edad<br>")
        }
    }
    mostrarDatos()
    {
        document.write(`Nombre: ${this.nombre}`)
        document.write(`<br>Edad: ${this.edad}`)
        document.write(`<br>DNI: ${this.dni}`)
        document.write(`<br>Sexo: ${this.sexo}`)
        document.write(`<br>Peso: ${this.peso} kg`)
        document.write(`<br>Altura: ${this.altura} m`)
        document.write(`<br>Año de Nacimiento: ${this.anionacimiento}<br>`)
    }
    generarDNI()
    {
        this.dni = Math.floor(10000000 + Math.random() * 99999999)
        console.log(this.dni)
    }
}

let persona1= new Persona("Jose",29,10432547,"H",68,1.80,1994);