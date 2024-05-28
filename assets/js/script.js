//1. Implementar el Patrón Módulo mediante IIFE, en donde:
//Se cree una función privada que reciba la url del video y el id de la etiqueta iframe, 
//para así poder mostrar los videos en el documento HTML. 
// Dato:puedes utilizar la instrucción “setAttribute” para manipular el DOM.
const patronModulo = (() => {
    const addPrivateMovie = (url, id) => {
        let element = document.getElementById(id)
        element.setAttribute('src', url)}

//Se retorne una función pública que reciba los parámetros (url, id), y realice el llamado a la 
//función interna (privada) para insertar los elementos recibidos.
return {
    addPublicMovie: (url, id) => {
        addPrivateMovie(url, id)
}}})()


//2. Establecer una clase padre denominada Multimedia para:
//Recibir la propiedad url, ejemplo: “https://www.youtube.com/embed/5PSNL1qE6VY”, la cual será el 
// atributo src que necesite la etiqueta iframe para poder mostrar el video
class Multimedia {
    //Proteger el atributo de la clase implementado closures (una f(x) dentro de otra)
    constructor(url) {
        this._url = url
    }
    get url() {
        return this._url
    }
    //Agregar un método denominado “setInicio”, que retorne el siguiente mensaje:
    //“Este método es para realizar un cambio en la URL del video”.
    setInicio() {
        return 'Éste método es para realizar un cambio en la URL del video'
    }
}

//3. Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia para:
//Recibir la propiedad id, la cual será el elemento del DOM que se necesita para
//poder agregar la URL en la etiqueta iframe que corresponda.
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this._id = id
    }
    get id() {
        return this._id
    }
//Crear un método denominado “playMultimedia”, que permita hacer el llamado
//a la función pública de la IIFE, enviando los atributos url y id
    playMultimedia() {
    patronModulo.addPublicMovie(this.url, this._id)
    }
//Agregar un método denominado “setInicio”, que reciba y agregue un tiempo
//de inicio a la URL de la etiqueta iframe. Se puede utilizar el método
//“setAttribute” para modificar la URL agregando al final de la misma lo
//siguiente: “?start=${tiempo}”. Esto permitirá que cualquiera de los videos que
//implemente el método inicie en el tiempo pasado como argumento al método al ser invocado
    setInicio(tiempo) {
        this.id.setAtribute('src', `${this.url}?start=${tiempo}`)
    }
}

//4. Instanciar la clase hija pasando como argumento la URL y el id para cada etiqueta
//iframe, por lo que se deben crear tres instancias, una para música, otra para película
//y otra para serie, con sus respectivas URL.

let movie = new Reproductor('https://www.youtube.com/embed/Ebz6J33jGZA', 'peliculas');

let serie = new Reproductor('https://www.youtube.com/embed/jDbk6bpgD2A?start=91', 'series');

let music = new Reproductor('https://www.youtube.com/embed/GTRgjeQ_nxw', 'musica');

//5. Invocar al método “playMultimedia” para cada instancia creada.
movie.playMultimedia()
serie.playMultimedia()
music.playMultimedia()

// 6. Utiliza el método “setInicio” para modificar el tiempo de inicio en alguna de las instancias creadas.
movie.setInicio(10)
serie.setInicio(15)
music.setInicio(10)