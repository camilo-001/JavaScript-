
// MANEJANDO PROMESAS DE MANERA SINCRONA

Promise.resolve(2) // resolve es una propiedad de Promise que basicamnente resuoleve y retorna en el valor asignado
    .then(valor => valor + 1) // el than como su palabra lo dice ejecuta una función o callback luego de que se resuelva
    .then(valor =>  console.log(valor)); // podemos concatenar una serie de thens donde se manipule el retorno

// como vemos en el ejemplo anterior  usamos valor en dos ocaciones aunque se llamen igual son diferentes
// ya que una pertence al callback del primer then y la segunda al del segundo then, aunque se manipulen
// los mismos valores cada una pertenece a un scope distinto

// ejecutar en consola del navegador

Promise.reject(2) // reject es una propiedad que rechaza un valor que puede ser tomnado como un razón del rechazo
    .then(valor => (valor + 1)) // al igual que el anterior ejemplo el then se comporta de la misma manera
    .then(valor => console.log(valor)) // y tambien podemos seguir concatenandolos
    .catch(e => console.error(e)); // a diferencia de then .catch recive un error imprimiendolo con console.error(e)

