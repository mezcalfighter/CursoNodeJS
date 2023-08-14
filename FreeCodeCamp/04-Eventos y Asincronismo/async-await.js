function ordenarProducto(producto){
    return new Promise((res,rej)=>{
        console.log("Ordenado: "+ producto + " de freeCodeCamp");
        setTimeout(()=>{
            if(producto === "taza"){
                res("Ordenando una taza con el logo de freeCodeCamp...");
            }else{
                rej("Este producto no esta disponible actualmente")
            }
        },2000)
    })
}

function procesarPedido(response){
    return new Promise((resolve)=>{
        console.log("Procesando respuesta...")
        console.log("La respuesta fue: ",response)
        setTimeout(()=>{
            resolve("Gracias por tu compra. Disfruta tu producto de freeCodeCamp")
        },4000)
    })
}

// ordenarProducto("lapiz")
//     .then(res => {
//         console.log("Respuesta recibida")
//         console.log(res)
//         return procesarPedido(res)
//     })
//     .then(respuestaProcesada => console.log("Respuesta Procesada"))
//     .catch((err)=>{throw console.error(err)})

async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto)
        console.log("Respuesta recibida")
        const respuestaProcesada = await procesarPedido(respuesta)
        console.log(respuestaProcesada)
    }catch(err){
        console.log(err)
    }
}

realizarPedido("taza")