/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro {
    #isbn 
    #titulo
    #autor
    constructor(isbn,titulo,autor,numeropaginas)
    {
        this.#isbn = isbn;
        this.#titulo= titulo;
        this.#autor= autor;
        this.numeropaginas=numeropaginas;
    }

    get isbn()
    {
        return this.#isbn
    }

    set isbn(newISBN)
    {
        if(newISBN)
        {
            document.write("El ISBN Ingresado es inválido")
            return
        }
        this.#isbn= newISBN;
    }

    get titulo()
    {
        return this.#titulo
    }

    set titulo(newTitulo)
    {
        if((newTitulo))
        {
            document.write("El Titulo Ingresado es inválido")
            return
        }
        this.#titulo= newTitulo;
    }

    get autor()
    {
        return this.#autor
    }

    set autor(newAutor)
    {
        if(IsNaN(newAutor))
        {
            document.write("El Autor Ingresado es inválido")
            return
        }
        else{
        this.#autor=newAutor
        }
    }

    getNumPag(){
        return this.numeropaginas;
    }
    setNumPag(newNumeroPagina)
    {
        this.numeropaginas=newNumeroPagina;
    }

    mostrarLibro(){
        document.write(`<p>El libro ${this.#titulo} con ISBN ${this.#isbn} creado por el autor ${this.#autor} tiene ${this.numeropaginas} páginas</p>`)
    }
}

let libro1 = new Libro(9781400034956,"Crónica de una Muerte Anunciada","Gabriel García Márquez",156)
let libro2 = new Libro(9789563004502,"Los Ojos del Perro Siberiano","Antonio Santa Ana",136)

function masPaginas(){
    if(libro1.numeropaginas > libro2.numeropaginas)
    {
    document.write(`El libro ${libro1.titulo} tiene más paginas que el libro ${libro2.titulo}`)
    }
    else{
    document.write(`El libro ${libro2.titulo} tiene más paginas que el libro ${libro1.titulo}`)
    }
}