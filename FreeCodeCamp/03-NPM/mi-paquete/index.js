const curso = require("./templateJson.json")
let infoCurso = {
    "titulo":"Aprende Node.js",
    "numVistas":45642,
    "numLikes":2113,
    "temas":[
        "Javascript",
        "Node.js"
    ],
    "esPublico":true
}

console.log(curso.titulo)

//Objeto -> Cadena de Caracteres
// Cadena de caracteres en formato JSON
let infoJSON = JSON.stringify(infoCurso)
console.log(infoJSON)
console.log(typeof infoJSON)

// Cadena de Caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoJSON)
console.log(infoCursoObjeto)
console.log(typeof infoCursoObjeto)
console.log(infoCursoObjeto.titulo)