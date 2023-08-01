const {crearArchivo} = require("./helpers/multiplicar")
const argv= require("yargs").argv



// 5 x 1 = 5
// 5 x 2 = 10
// ....
// 5 x 10 = 50
const base = 5
crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, "Creado"))
    .catch( err => console.log(err));