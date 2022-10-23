// operador ! , prender y apagar una luz :

let lamparaPrendida = true;
const apretarInterruptor = () => {
    lamparaPrendida = !lamparaPrendida;
}

// Funcion que recibe una edad, y luego otra que es lo contrario a partir de ella.

const esMayorDeEdad = (edad) => {
    edad = edad > 17
    return edad
}

const esMenorDeEdad = (edad) => {
    return !esMayorDeEdad(edad);
}

/** Funcion que tome la profesión de una persona, su nacionalidad y la cantidad de kilómetros que camina por día. 
Alguien es peripatético cuando es un filósofo griego y le gusta pasear (camina más de 2 kilómetros por día).  */

const esPeripatetico = (profesion, nacionalidad, kmXdia) => {
    return profesion === "filósofo" && nacionalidad === "griego" && kmXdia > 2;
}

/** Sabemos que el banco está cerrado cuando: Es feriado, o Es fin de semana, o No estamos dentro del horario bancario. */

const esFinDeSemana = (esFeriado, dia, horario) => {
    return dia === "sábado" || dia === "domingo"
}
const estaCerrado = (esFeriado, dia, horario) => {
    return esFeriado || !dentroDeHorarioBancario(horario) ||
        esFinDeSemana() || dia !== "jueves"
}

/** Para que la página tenga contraste tiene que tener el fondo claro y la letra no o bien tener la letra clara y el fondo no */

const tieneContraste = (letra, fondo) => {
    return esTonoClaro(letra) !== esTonoClaro(fondo)
}

// función genérica xor , que tome dos booleanos y retorne el valor de verdad correspondiente.

const xor = (a, b) => !a === b && a === !b;

/** Persona se puede concentrar cuando programa y toma infusiones, pero no cualquier infusión.
Tiene que ser mate a exactamente 80ºC o té que esté a por lo menos 95ºC. */

const sePuedeConcentrar = (bebida, temperatura, programando) => {
    return bebida === "mate" && temperatura >= 80 && programando || bebida === "té" && temperatura >= 95 && programando
}

/** que recibe una altura de una persona en metros, si está acompañada y si tiene alguna afección cardíaca */

const puedeSubirse = (altura, compañia, afección) => {
    return (altura >= 1.5 || (altura >= 1.2 && compañia)) && !afección
}