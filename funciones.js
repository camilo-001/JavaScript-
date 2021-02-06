
/*ESTRUCTURA DE FUNCIÓN SIMPLE */
function  saluda(){
    console.log("hola")
}
/*ESTRUCTURA DE FUNCION QUE RECIBE PARAMETRO*/
function bienVenida(nombre){
    console.log("Bien venido "+ nombre);
}

saluda(); // llamada a la función simple

bienVenida("camilo"); // llamado a la función que se le envía un argumento

/*ESTRUCTURA BASICA DE FUNCIÓN QUE RETORNA UN RESULTADO*/
function suma(num1, num2){
    return num1 + num2;

}
console.log(suma(5,3)); // impresion de llamado de funcion que envia dos parametros para sar sumados

/*ESTRUCTURA DE FUNCIONES ANONIMAS */

function executor(funcion){ // tenemos una función que se encarga de ejecutar
    funcion();
}

executor(function (){ // enviamos como argumento una función como si fuese un argumento cualquiera
    console.log("soy una función anonima ejecuta solo una vez");
}) // lo cual quiere decir que una función anonima solo se ejecuta una vez y puede emplearse como una variable

let hellow = function (){console.log("helloww")}; // ahora vemos como alamcenamos una función anonima en una variable

console.log(hellow); // si imprimimos la variable obtendremos el nombre de la función
hellow(); // pero si llamamos la variable como si fuese una función obtendremos el mensaje "hellow"

/*ARROW FUNCTION*/

// las arrow function funcionan como las funciones normales pero usando una estructura diferente

let sumaarrow =(a,b)=> a + b // si comparamos esta funcion de suma con la anterior función veremos que no es necesario usar el return

console.log(sumaarrow(1,4)); // otra diferencia es que la función no se llama se imprime la variable donde está almacenada

executor(()=> {console.log("asata")} // tambien tenemos arrowsfunctions anonimas y las enviamos como argunmento también
)
