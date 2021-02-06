// CREAR OBJETOS A BASE DE UNA CLASE

class curso{ // creamos la calse de la siguiente manera
    constructor(titulo) { // dentro del constructor van los atributos
        this.titulo = titulo;
        this.duracion ="5 dias";
    }
    inscribir(usuario){ // por fuera todos los metodos que esta tenga
        console.log(usuario + " se ha inscrito");
    }
}
// cració del objeto basandonos en la clase

let cursoP = new curso("Curso de html"); // creamos el objeto utilizando new (instanciando)
console.log(cursoP["duracion"]); // podemos llamar sus atributos
console.log(cursoP["titulo"]);
cursoP.inscribir("Malcom");// y sus metodos
