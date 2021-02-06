/* ESTRUCUcreando arreglo para almacenar los todos que se crearán usando TRA BASICA DE UN ARREGLO */

let arreglo = [1,43,19,28,10]; // tenemos nuestro primer arreglo

// para recorrer un arreglo usamos un ciclo for
for(let i = 0; i<arreglo.length;i++){
    console.log(arreglo[i]);
}
/* METODOS */

//FOREACH
let arreglo2 = ['juan','maria','pedro','luisa']; // para recorrer este arreglo podemos utilizar el metodo de foreach

// arreglo2.forEach(function (elemento){
//     console.log(elemento);
// })

//FILTER
/* arreglo = arreglo.filter(function (element){ // con filter podemos sustrar un dato y dejarlo como el unico dato del arreglo
     return element == 'juan'; // o podemos sacar ese dato y que queden los demas, pero en este caso buscamos un solo dato y lo dejaremos como unico
 })

arreglo2.forEach(function (elemento){ // volvemos a recorrer el arreglo
    console.log(elemento);
})

arreglo = arreglo.filter(function (element){ // Tambien podemos realizar filtraciones con ciertas caracteristicas
    return (element % 2) != 0; // por ejemplo como sacar todos los pares o impares de un arreglo de numero
})

arreglo.forEach(function (elemento){ // volvemos a recorrer el arreglo
    console.log(elemento);
})*/

// FIND

let ele = arreglo2.find(function (ele){ // con find podemos encontrar cualquier dato que especifiquemos dentro de un arreglo
    return(ele == 'maria'); // retorna el primer elemento que satisface esta función
})

console.log(ele);

// MAP

let cuadrados = arreglo.map(function (numero) // permite reaizar operaciones definidas en un arreglo y retornarlo en uno nuevo
{ return numero * numero} // como en este caso que elevaremos al cuadrado cada numero del arreglo
);
// tambien con map se puede realizar conversión de tipo de dato al recorrer el arreglo
console.log(cuadrados)

let numeros =["2","34","12","65"]; // tipo de dato string

console.log(numeros); // se visualiza como string

let numerost = numeros.map(function (num){
    return parseInt(num); // convertimos a num
})
console.log(numerost);