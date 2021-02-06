// CREANDO OBJETOS MEDIANTE FUNCIONES CONSTRUCTORA

function curso (){
    this.titulo = "Curso de javaScritpt"; // definimos propiedades utilizando this
    this.inscribir = function (usuario){ // definimos metodos utilizando this
        console.log(usuario + " se ha inscrito " + this.titulo);
    }
}
// Para generar un objeto basado en la funcion constructora anterior

let cursoJs = new curso(); // Hemos creado el objeto cursoJs basandonos en la funcion anterior

cursoJs.inscribir("camilo"); // ya a partir de este podemos usar sus propiedades y metodos

// sabemos que podemos crear n objetos basados en una clase entonces podemos mejorar nuestra función

function curso2 (titulo){ // definimos como parametro el nombre del titulo
    this.titulo2 = titulo; // ahora cada vez que creemos un objeto basado en esta función se debera definir su titulo
    this.inscribir = function (usuario2){
        console.log(usuario2 + " se ha inscrito al curso de " + titulo);
    }
}

let cursoCss = new curso2("Curso de  CSS");// creamos el objeto y como vemos le enviamos como argumento el nombre del titulo
console.log(cursoCss.titulo2);// y de igual manera podemos ver las propiedades de este
cursoCss.inscribir("camilo arevalo"); // y sus metodos