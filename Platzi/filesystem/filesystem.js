const  fs = require("fs")

function leer(ruta, cb){
    fs.readFile(ruta, (err, data)=>{
        //Leido
        cb(data.toString())
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta,contenido,(err)=>{
        if(err){
            console.error("No pude escribir el archivo")
        }else{
            console.log("Se logro escribir")
        }
    })
}

function borrar(ruta,cb){
    fs.unlink(ruta,(err)=>{
        if(err){
            console.error("Archivo no encontrado")
        }else{
            console.log("Archivo borrado exitosamente")
        }
    })
}

console.log(__dirname + "/text.txt")

leer(__dirname + "/text.txt",console.log)

escribir(__dirname + "master/archivo.txt","Texto Nuevo",()=>{})
escribir(__dirname + "/archivo.txt","Texto nuevo",()=>{})

borrar(__dirname + "master/archivo.tx")