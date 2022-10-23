// Funcion que tiene que devolver la medalla que le corresponde a los primeros puestos de una competencia.

const medallaSegunPuesto = (puesto) => {
    let medallas = ["oro", "plata", "bronce"];
    puesto = puesto - 1;
    if (medallas[puesto]) {
        return medallas[puesto]
    } else {
        return "nada"
    }
}

// Lista con los precios de los productos que compramos en el supermercado y queremos restar cada uno de ellos
// Con For of:

for (let precio of [10, 100, 87]) {
    plataEnBilletera = plataEnBilletera - precio
}

/** Funcion saludar que recibe una lista de personas e imprime un saludo con
"hola" para cada una de ellas. */

const saludar = (personas) => {
    let saludo = "hola"
    for (let persona of personas) {
        imprimir(saludo + " " + persona)
    }
}
