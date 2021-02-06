

function sumar(a,b,cb){ // definimos una función y expecificamos 3 argumentos
    const resultado = a + b;// dos de los tres argumentos son utilizados como tal en la función
    cb(resultado) // alamacenamos eel resultado en el tercer argumento
}

function callback(result){ //  creamos nuestra función de callback
    console.log('resultado', result); // el cual recibe un parametro de resultado(result)
}

sumar(2, 3,callback) // llamamos a nuestra función sumar en la cual enviamos los dos parametros para la suma
                           // y enviamos como parametro también la funcion de callback ( sin parentecis )