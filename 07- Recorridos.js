// Ganancias semestrales 

let balancesPrimerTrimestre = [
    { mes: "enero", ganancia: 80 },
    { mes: "febrero", ganancia: 453 },
    { mes: "marzo", ganancia: 1000 }
];

let balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 },
    { mes: "agosto", ganancia: -12 },
    { mes: "septiembre", ganancia: 1000 },
    { mes: "octubre", ganancia: 300 },
    { mes: "noviembre", ganancia: 200 },
    { mes: "diciembre", ganancia: 0 }
];

function gananciaTotal(balancesDeUnPeriodo) {
    let sumatoria = 0;
    for (let balance of balancesDeUnPeriodo) {
        sumatoria = sumatoria + balance.ganancia;
    }
    return sumatoria;
}

// "Quiero saber cuántos balances fueron positivos, es decir, aquellos en los que la ganancia fue mayor a cero
const cantidadDeBalancesPositivos = (balancesDeUnPeriodo) => {
    let cantidad = 0;
    for (let balance of balancesDeUnPeriodo) {
        if (balance.ganancia > 0) {
            cantidad++
        } else {
            cantidad
        }
    }
    return cantidad;
}

// Quisiera saber dado un conjunto cualquiera de balances cuál es su gananciaPromedio .
const gananciaPromedio = (registros) => {
    return gananciaTotal(registros) / longitud(registros)
}

//Funcion que toma los balances de un período y devuelve una lista con aquellos cuya ganancia fue mayor a cero.
const balancesPositivos = (balancesDeUnPeriodo) => {
    let balances = [];
    for (let balance of balancesDeUnPeriodo) {
        if (balance.ganancia > 0) {
            agregar(balances, balance)
        }
    }
    return balances;
}

// Define función gananciasDeBalancesPositivos y luego usala junto a promedio para definir promedioDeBalancesPositivos .
const gananciasDeBalancesPositivos = (registros) => {
    let listaGanancias = [];
    for (let ganancias of balancesPositivos(registros)) {
        agregar(listaGanancias, ganancias.ganancia)
    }
    return listaGanancias;
}
const promedioDeBalancesPositivos = (registros) => {
    return promedio(gananciasDeBalancesPositivos(registros));
}

// Funcion que nos diga cuál es la ganancia más alta entre los balances de un período de tiempo.
// Funcion que nos diga cuál es la ganancia más baja de todos los balances positivos.
const maximaGanancia = (registros) => {
    return maximo(ganancias(registros)) || ganancias(registros) < 0;
}
const minimaGananciaPositiva = (registros) => {
    return minimo(gananciasDeBalancesPositivos(registros))
}

