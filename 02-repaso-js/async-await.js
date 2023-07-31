const empleados = [
    {
        id:1,
        nombre:"Carlos"
    },
    {
        id:2,
        nombre:"Juan"
    },
    {
        id:3,
        nombre:"Pepe"
    }
];

const salarios = [
    {
        id:1,
        salario:22_000
    },
    {
        id:2,
        salario:23_000
    },
    {
        id:3,
        salario:24_000
    }
]; 

const getEmpleado = (id) => { 
    return new Promise((res, rej)=>{
        const empleado = empleados.find((e)=> e.id === id)?.nombre;
        //operador ternario
        (empleado)
            ?res(empleado)
            :rej(`No existe el empleado con el id ${id}`)
    })
}

const getSalario = (id)=>{
    return new Promise((resp, rej)=>{
        const salario = salarios.find((s) => s.id === id)?.salario;
        //console.log(salario);
        (salario)
            ?resp(salario)
            :rej(`No existe el salario con el id ${id}`)
    })
}

const getInfoUsuario = async(id) => {
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es de: ${salario} MXN`
    }catch(err){
        return `No existe el empleado con el id: ${id}`
    }
}

getInfoUsuario(1)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err))

getInfoUsuario(7)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err))