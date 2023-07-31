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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e)=> e.id === id);
    if(empleado){
        callback(null, empleado);
    }else{
        callback(`El empleado con el ID: ${id} no existe`,null)
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find((s)=>s.id === id);
    if(salario){
        callback(null, salario)
    }else{
        callback(`El sueldo con el ID: ${id} no existe`,null)
    }
}

getEmpleado(2, (err, empleado) => {
    if(err){
        console.log("ERROR!");
        console.log(err);
    }else{
        console.log("El Empleado EXISTE!!!");
        console.log(empleado);
    }
})

getEmpleado(9, (err, empleado) => {
    if(err){
        console.log("ERROR!");
        console.log(err);
    }else{
        console.log("El Empleado EXISTE!!!");
        console.log(empleado);
    }
})

console.log("#".repeat(40))

getSalario(1,(err, salario)=>{
    if(err){
        console.log("Salario no encontrado!!! ERROR!!!!");
        console.log(err);
    }else{
        console.log("Salario encontrado!!!! DONE!!!");
        console.log(salario);
    }
})

getSalario(14,(err, salario)=>{
    if(err){
        console.log("Salario no encontrado!!! ERROR!!!!");
        console.log(err);
    }else{
        console.log("Salario encontrado!!!! DONE!!!");
        console.log(salario);
    }
})