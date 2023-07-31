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

getEmpleado(2)
    .then( empleado => console.log(empleado))
    .catch(err => console.log(err))

getEmpleado(4)
    .then( empleado => console.log(empleado))
    .catch(err => console.log(err))

getSalario(2)
    .then(salario => console.log(salario))
    .catch(err => console.log(err))

getSalario(4)
    .then(salario => console.log(salario))
    .catch(err => console.log(err))

// en cadena
let nombre;
getEmpleado(2)
    .then(empleado => {
        nombre = empleado
        return getSalario(2)
    })
    .then(salario => console.log(nombre, salario))
    .catch(err => console.log(err))