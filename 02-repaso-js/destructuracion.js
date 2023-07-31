const deadpool = {
    nombre:"Wade",
    apellido:"Winston",
    poder:"Regenacion",
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// console.log(nombre, apellido, poder);

// or

const {nombre, apellido, poder, edad=0} = deadpool
console.log(nombre, apellido, poder, edad);

function imprimeHeroe({nombre,apellido, poder, edad=0}){
    console.log("imprimiendo: "+nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool)

// Desestructurar objetos
const heroes = ["Deadpool", "Superman", "Batman"]
const h1 = heroes[0]
const h2 = heroes[1]
const h3 = heroes[2]

console.log(h1,h2,h3)

// o

const [he1, he2, he3] = heroes
console.log(he1,he2,he3)