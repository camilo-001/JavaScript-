// MANEJANDO PROMESAS DE MANERA ASINCRONA

new Promise((resolve, reject) =>{
    setTimeout(() => resolve(2), 1000)
})
.then( x => console.log(x))
.catch( e => console.error(e))
