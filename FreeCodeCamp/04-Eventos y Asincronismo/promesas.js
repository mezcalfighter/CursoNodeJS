const promesaCumplida = false
const miPromesa = new Promise((res, rej)=>{
    setTimeout(()=>{
        if(promesaCumplida){
            res("Promesa cumplida")
        }else{
            rej("Promesa Rechazada")
        }
    },300)
})

miPromesa
    .then((res)=>{console.log(res)})
    .catch((rej)=>{console.error(rej)})