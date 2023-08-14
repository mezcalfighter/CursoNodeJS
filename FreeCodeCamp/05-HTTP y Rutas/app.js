const http = require("http")

const servidor = http.createServer((req,res)=>{
    res.end("Hola, mundo")
    console.log(req.url)
    console.log(req.method)
    //console.log(req.headers)

    res.statusCode = 404
    console.log(res.statusCode)
})

servidor.listen(3000,()=>console.log("El servidor esta escuchando en el puerto: 3000"))