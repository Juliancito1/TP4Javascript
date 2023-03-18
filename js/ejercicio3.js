//3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo{
    constructor(altura,ancho)
    {
        this.altura=altura;
        this.ancho=ancho;
    }

    cambiarAltura(valor)
    {
        this.altura=valor;
    }
    cambiarAncho(valor)
    {
        this.ancho=valor
    }

    calcularArea()
    {
       return console.log(`El área del rectángulo es: ${this.altura * this.ancho} cm`);
    }

    calcularPerimetro()
    {
        return console.log(`El perímetro del rectángulo es: ${(2 * this.altura) + (2 * this.ancho)} cm`);
    }

    mostrarrectangulo()
    {
        return console.log(`El rectángulo tiene ${this.altura} cm de altura y ${this.ancho} cm de ancho`);
    }
}

let rectangulo1 = new Rectangulo(2,4)
let rectangulo2 = new Rectangulo(5,10)