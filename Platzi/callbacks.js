function soyAsincrono(callback){
    setTimeout(()=>{
        console.log("Estoy siendo asincrono");
        callback()
    },1000)
}

console.log("Iniciando Proceso");
soyAsincrono(()=>console.log("Terminando Proceso"))

function hola(nombre, callback){
    setTimeout(()=>{
        console.log("Hola ", nombre);
        callback()
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(() => {
       console.log("Adios, " + nombre);
       otroCallback()
    }, 1000);
}

console.log("Iniciando Proceso Saludo")
hola("Emanuel",function(){
    adios("Emanuel",function(){
        console.log("Terminando Proceso Saludo")
    })
})