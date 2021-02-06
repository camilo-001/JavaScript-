// ESTRUCTURA DE UN OBJETO JSON

let curso = { // almacenamos el objeto en una variable
    titulo: 'Curso de JavaScript', // propiedad titulo del objeto
    duracion: "5 dias",
    formato : "video",
    seccion :['objetos','metodos'], // tambien podemos definir propiedades con estructura de arreglos
    inscribir : function (usuario){ // tambien podemos definir metodos
        console.log(usuario + "ahora está inscrito");
    }
}
// LEER PROPIEDADES DE UN OBJETO
console.log(curso.titulo); // para leer la propiedad de un obejeto usando la sintaxis del punto
console.log(curso["seccion"]); // otra forma de leer propiedades de un objeto
// LEER METODOS DE UN OBJETO
console.log(curso.inscribir("camilo")); // de igual forma podemos llamar a los metodos dentro del objeto

// REASIGNADO PROPIEDADES O METODOS DE UN OBJETO JSON

curso.titulo ='Curso remaster de JavaScript';  // podemos reasignar usando esta nomenclatura

curso['inscribir'] = function (usuario ){console.log(usuario + " ya no hay cupo perro")}; // o esta otra nomenclatura

console.log(curso.inscribir("camilo"));
console.log(curso.titulo);