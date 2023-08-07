function hola(nombre){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("Hola ", nombre);
            res(nombre);
        },1500)
    });
}

async function hablar(nombre){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("Bla bla bla")
            res(nombre)
        },1000)
    });
}

async function adios(nombre){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("Adios, " + nombre);
            res(nombre)
         }, 1000);
    });
}

async function main(){
    let nombre = "Emanuel"
    await hola(nombre)
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
}

main()