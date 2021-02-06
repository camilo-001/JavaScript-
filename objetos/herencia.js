
class bienVenida { // ESTA SERÍA NUESTRA CLASE PADRE
    constructor(nombreCurso) {
        this.titulo = nombreCurso;
    }
    bienvendia() {
        console.log("Bienvenido seas al curso " + this.titulo);
    }
    advertencia(){
        console.log("No puede transferir el curso de "+ this.titulo+" a otras personas")
    }
}

class curso extends bienVenida { // ESTA NUESTRA CLASE HIJA QUE HEREDA DEL PADRE (extends)
    constructor(nombre,duracion,dia) { // heredando nombre del constructor del padre
        super(nombre); // al utilizar super hacemos ver que heredamos del constructor del padre, aunque el parametro no se llama igual que el del padre
        this.tiempo = duracion;
        this.fecha = dia;
    }
    info(){
        console.log("la duración del curso es de: "+ this.tiempo+" y empieza el día: "+this.fecha);
        super.advertencia(); // podemos utilizar super para utilizar también metodos del padre dentro del metodo del hijo
    }
}

let curse = new curso(" javaSe","5 dias","02/2") // instanciamos la clase
curse.bienvendia(), curse.info(); // como vemos poseemos el metodo bienvenida del padre y el metodo info // de la clase curso
