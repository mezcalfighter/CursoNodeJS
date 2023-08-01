const fs = require("fs")

const crearArchivo = (base = 5) => {
    let salida = ""
    console.clear()
    salida = `======================== \n` + `      Tabla del ${base}  \n` + `======================== \n`

    for(let i=1; i<=10; i++){
        salida += `${base} x ${i} = ${i*base} \n`
    }
    let nombreArchivo = `tabla-${base}.txt`
    try{
        fs.writeFileSync(nombreArchivo,salida)
        return nombreArchivo
    }catch(err){
        return err
    }
}

module.exports = {
    crearArchivo
}