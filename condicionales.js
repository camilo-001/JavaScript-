
let numero = 11;

/* PRIMERA ESTRUCTURA DE CONDICIONAL IF */
if(numero <= 13) {
    console.log("Esta en el rango")
} else console.log(numero + " No está en el rango");

/*SEGUNDA ESTRUCTURA DE CONDICIIONAL ELSE IF*/
if(numero == 10){
    console.log("el numero es diez")
}else if (numero == 11){
    console.log("el numero es once")
}else if (numero == 12){
    console.log("el numero es doce")
}else {
    console.log("numero no encontrado")
}

/*TERCERA ESTRUCTURA DE CONDICIONAL SWITCH*/
switch (numero){
    case 10:
        console.log("el numero es mayor que 9 pero menor que 11")
        break;
    case 11:
        console.log("el numero es mayor que 10 pero menor que 12")
        break;
    case 12:
        console.log("el numero es mayor que 11 pero menor de 13")
        break;
}