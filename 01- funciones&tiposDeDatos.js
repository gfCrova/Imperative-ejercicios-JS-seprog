
/* Queremos comprar una computadora nueva , y nos gustaría saber cuánto nos va a salir.

Los monitores cuestan $60 por cada pulgada - La memoria cuesta $200 por cada GB - El precio base estimado del resto de los componentes es de $1000 */

const cuantoCuesta = (pulgadas, memoria) => {
    return (pulgadas * 60) + (memoria * 200) + 1000
}

/* Definí la función meConviene , que nuevamente tome el número de pulgadas y cantidad de
memoria y nos diga si nos conviene comprarla :

Sale menos de $6000, tiene al menos un monitor de 32 pulgadas, y tiene al menos 8GB de memoria  */

const meConviene = (pulgadas, memoria) => {
    return pulgadas >= 32 && memoria >= 8 && cuantoCuesta(pulgadas,
        memoria) < 6000
}

/*******************************************************/

// perimetroTriangulo : dado los tres lados de un triángulo, queremos saber cuánto mide su perímetro.
// areaTriangulo : dada la base y altura de un triángulo, queremos saber cuál es su área.

const perimetroTriangulo = (a, b, c) => {
    return a + b + c
}
const areaTriangulo = (a, b) => {
    return (a * b) / 2
}

/*******************************************************/

/* Ahora queremos saber si el la central del piano está cerca de estar afinado. Esto ocurre cuando
está entre 437Hz y 443Hz, pero NO es exactamente 440Hz */

const estaCerca = (num) => {
    return num >= 437 && num <= 443 && num !== 440
}

/*******************************************************/

/*   Función que tenga 4 parámetros: título; nombre; apellido; y un booleano que nos indique si queremos un cartelito corto con sólo título y apellido, o
    uno largo, como hasta ahora.
    Una nueva función que nos dé el cartelito de tamaño óptimo: */

const escribirCartelito = (titulo, nombre, apellido, cartelito) => {
    if (cartelito) {
        return titulo + " " + apellido
    } else {
        return titulo + " " + nombre + " " + apellido
    }
}

const  escribirCartelitoOptimo = (titulo, nombre, apellido) => {
    return escribirCartelito(titulo, nombre, apellido,
    longitud(nombre + apellido) > 15 )
    }

/*******************************************************/

