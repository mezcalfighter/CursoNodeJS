const fs = require("fs")

const crearArchivo = async(base = 5) => {
    try{
        //fs.readFileSync(nombreArchivo)
        fs.writeFileSync(nombreArchivo,salida+ " ")
        let salida = ""
        console.clear()
        salida = `======================== \n` + `      Tabla del ${base}  \n` + `======================== \n`
        let nombreArchivo = `tabla-${base}.txt`

    for(let i=1; i<=10; i++){
        salida += `${base} x ${i} = ${i*base} \n`
    }
        return nombreArchivo
    }catch(err){
        throw `Archivo no existe`
    }
}

module.exports = {
    crearArchivo
}