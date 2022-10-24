// Guardá en las variables torreAzadi y monumentoNacionalALaBandera registros de esos monumentos

let torreAzadi = {
    nombre: "Torre Azadi",
    locacion: "Teherán, Irán",
    anioDeConstruccion: 1971
}
let monumentoNacionalALaBandera = {
    nombre: "Monumento Nacional a La Bandera",
    locacion: "Rosario, Argentina",
    anioDeConstruccion: 1957
}

// Función que reciba como argumento un registro de planeta y retorne un string
const temperaturaDePlaneta = (planeta) => {
    return planeta.nombre + " tiene una temperatura promedio de " +
        planeta.temperaturaPromedio + " grados"
}

// Funcion que recibe un registro y una nueva ruta y modifica el archivo con la nueva ruta.
const moverArchivo = (registro, nuevaRuta) => {
    registro.ruta = nuevaRuta
}

// Función que retorna un booleano 
const esDelMilenioPasado = (archivo) => {
    return anio(archivo.creacion) < 2000
}
/************************************************************************************************************** */

// Registros de postres
let flanCasero = { ingredientes: ["huevos", "leche", "azúcar", "vainilla"], tiempoDeCoccion: 50 }
let cheesecake = { ingredientes: ["frambuesas", "queso crema"], tiempoDeCoccion: 80 }
let lemonPie = { ingredientes: ["jugo de limón", "almidón de maíz", "leche", "huevos"], tiempoDeCoccion: 65 }

// Funcion que recibe dos registros de postres como argumentos y retorna el que tiene más ingredientes de los dos.
const masDificilDeCocinar = (registro1, registro2) => {
    if (registro1.ingredientes > registro2.ingredientes) {
        return registro1
    } else {
        return registro2
    }
}

/** Funcion que toma una lista con postres rápidos y un postre por parámetro. 
Si el tiempo de cocción es de una hora o menos, se agrega el registro a la lista */
const agregarAPostresRapidos = (lista, postre) => {
    if (postre.tiempoDeCoccion <= 60) {
        agregar(lista, postre)
    }
}
// Funcion que recibe un registro menú y le agrega azúcar a los ingredientes de su postre. 
const endulzarMenu = (menu) => {
    agregar(menu.postre.ingredientes, "azúcar")
}

/*************************************************************************************************** */