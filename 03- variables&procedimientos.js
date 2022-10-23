/** Definí funciones que reciben el radio de un círculo y a partir del mismo nos retornan su perímetro y su área */

let pi = 3.14159265358979;

function perimetroCirculo(radio1) {
    return radio1 * pi * 2
}
function areaCirculo(radio2) {
    return pi * radio2 * radio2
}

/***************************************************************** */

/** VARIABLES GLOBALES */

let pesoMaximoEquipajeEnGramos = 5000;

const puedeLlevar = (pesoEquipaje) => {
    return pesoEquipaje <= pesoMaximoEquipajeEnGramos;
}

// Función que toma una cantidad de personas y retorna si entre todas superan la carga máxima de 300 kg.

let cargaMaximaEnKilogramos = 300;

const ascensorSobrecargado = (personas) => {
    return personas * pesoPromedioPersonaEnKilogramos > cargaMaximaEnKilogramos;
}

// Modificando variables

const aumentarFortuna = () => {
    let pesosEnMiBilletera = pesosEnMiBilletera * 2
}

const cuentaExtravagante = () => {
    let numero = 8;
    numero *= 2;
    numero += 4;
    return numero;
}