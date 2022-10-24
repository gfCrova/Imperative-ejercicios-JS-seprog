
meses([ { mes: "enero", ganancia: 870 }, { mes: "febrero", ganancia: 1000 }, { mes: "marzo", ganancia: 1020 },
        { mes: "abril", ganancia: 2300 }, { mes: "mayo", ganancia: -10 } 
])

afortunados([ { mes: "enero", ganancia: 870 }, { mes: "febrero", ganancia: 1000 }, { mes: "marzo", ganancia: 1020 },
        { mes: "abril", ganancia: 2300 }, { mes: "mayo", ganancia: -10 }
])

mesesAfortunados([ { mes: "enero", ganancia: 870 }, { mes: "febrero", ganancia: 1000 }, { mes: "marzo", ganancia: 1020 },
        { mes: "abril", ganancia: 2300 }, { mes: "mayo", ganancia: -10 }
])

// Funcion que dada una lista con registros devuelve una lista de meses
const meses = (registros) => {
    let listaMeses = [];
    for (let balance of registros) {
        agregar(listaMeses, balance.mes)
    }
    return listaMeses;   // ["enero", "febrero", "marzo", "abril", "mayo"]
}

// Funcion que filtra aquellos registros que tuvieron una ganancia mayor a $1000
const afortunados = (registros) => {
    let listaMeses = [];
    for (let balance of registros) {
        if (balance.ganancia > 1000) {
            agregar(listaMeses, balance)
        }
    }
    return listaMeses;    // [{ mes: "marzo", ganancia: 1020 }, { mes: "abril", ganancia: 2300 }]
}

// Funcion que devuelve aquellos meses que fueron afortunados.
const mesesAfortunados = (registros) => {
    return meses(afortunados(registros))    // ["marzo", "abril"]
}
