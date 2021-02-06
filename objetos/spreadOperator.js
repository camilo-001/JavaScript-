// spreadOpertar nos permite crear una copia de un objeto a otro sin afectar su integridad

const a = {b:1}; // creo un objeto a cuya propiedad b tiene un valor de 1
const b = a; // ahora creo un objeto b y especifico que este es igual a
console.log(a); // al imprimir ambos objetos vemos que ambos tienen las mismas propiedades
console.log(b);
b.c = 2; // ahora creo una nueva propiedad para el objeto b una propiedad c que vale 2
console.log(a); // al imprimir el objeto a vemos que tiene la misma propiedad c del objeto b
console.log(b); // sucede que ahora cualquier cambio que se haga en uno de los objetos afectará al otro

const c = {...a}; // ahora usamos el spreadOperator, lo que indicamos aca es que creamos un objeto c el cual tendrá las propeidades del objeto a
console.log(c)// imprimimos el objeto c y vemos que efectivamente es así
c.f =123; // ahora asignamos un nueva propiedad a c la propeidad f cuyo valor es 123
console.log(c);// imprimos el objeto c y vemos que efectivamente tiene esa propiedad
console.log(a) // y al imprimir el objeto a vemos que este no tiene la propiedad f del objeto c
