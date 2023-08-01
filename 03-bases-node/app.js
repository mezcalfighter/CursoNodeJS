const fs = require("fs")
// 5 x 1 = 5
// 5 x 2 = 10
// ....
// 5 x 10 = 50

const base = 5
let salida = ""
console.clear()
salida = `======================== \n` + `      Tabla del ${base}  \n` + `======================== \n`
for(let i=1; i<=10; i++){
    salida += `${base} x ${i} = ${i*base} \n`
}

fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    if(err) throw err;
    console.log(`Tabla ${base} creada`)
})