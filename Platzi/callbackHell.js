function hola(nombre, callback){
    setTimeout(()=>{
        console.log("Hola ", nombre);
        callback()
    },1000)
}

function hablar(callbackHablar){
    setTimeout(()=>{
        console.log("Bla bla bla")
        callbackHablar()
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
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios("Emanuel",function(){
                    console.log("Terminando Proceso Saludo")
                })
            })
        })
    })
})