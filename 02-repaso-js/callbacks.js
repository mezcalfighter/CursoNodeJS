// pasar una funcion como parametro que se va a ejecutar despues en el codigo

setTimeout(()=>{
    console.log("Hola Mundo")
},1000);

const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: "Fernando"
    }

    setTimeout(() => {
        callback(usuario);
    },1500)
}
getUsuarioByID(10, () => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});