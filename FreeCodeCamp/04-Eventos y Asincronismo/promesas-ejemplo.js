// ordenes de pizza, pueden tardar x tiempo e incluso pueden fallar (para el ejemplo van a fallar 20% de las ocasiones)

const estatusPedido = ()=>{
    return Math.random() < 0.8
}

const miPedidodePizza = new Promise((res,rej)=>{
    setTimeout(()=>{
        if(estatusPedido()){
            res("Mi pizza fue creada satisfactoriamente")
        }else{
            rej("Mi pizza NO fue creada")
        }
    })},3000)

miPedidodePizza
    .then((res)=>{console.log(res)})
    .catch((err)=>{throw err})