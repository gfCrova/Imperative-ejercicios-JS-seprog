/* Definí una función decisionConMoneda , que toma tres parámetros y retorna el segundo si el
primero es "cara" , o el tercero, si sale "ceca" . */

const decisionConMoneda = (primero, segundo, tercero) => {
    if (primero === "cara") {
        return segundo
    } else if (primero === "ceca") {
        return tercero
    } else {
        return "no hay moneda"
    }
}

/****************************************************************** */

/* Queremos saber el valor de las cartas de truco cuando jugamos al envido. Sabemos que:

Todas las cartas del 1 al 7, valen su numeración. Las cartas del 10 al 12, valen 0. No se juega con 8s ni con 9s */

const valorEnvido = (num) => {
    if (num <= 7) {
        return num
    } else if (num >= 10 && num <= 12) {
        return 0
    } else {
        return "no se puede jugar"
    }
}
/* Función puntosDeEnvidoTotales que tome los valores y palos de dos cartas y diga cuánto envido suman
en total. */

const puntosDeEnvidoTotales = (num1, palo1, num2, palo2) => {
    if (palo1 === palo2) {
        return valorEnvido(num1) + valorEnvido(num2) + 20
    } else {
        return Math.max(valorEnvido(num1), valorEnvido(num2))
    }
}

/* Función truco */

const valorCantoTruco = (canto) => {
    if (canto === "truco") {
        return 2
    } else if (canto === "retruco") {
        return 3
    } else if (canto === "vale cuatro") {
        return 4
    } else {
        return "no válido"
    }
}

/****************************************************************** */

