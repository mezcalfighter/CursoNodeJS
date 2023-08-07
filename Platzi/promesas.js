function hola(nombre){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("Hola ", nombre);
            res(nombre);
        },1000)
    });
}

function hablar(nombre){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("Bla bla bla")
            res(nombre)
        },1000)
    });
}

function adios(nombre){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("Adios, " + nombre);
            res(nombre)
         }, 1000);
    });
}

hola("Emanuel")
    .then((res)=>hablar(res))
    .then((res)=>hablar(res))
    .then((res)=>hablar(res))
    .then((res)=>hablar(res))
    .then((res)=>hablar(res))
    .then((res)=>adios(res))
    .catch((err)=>console.log("Cannot obtain name"))