function orderPizza(callback){
    console.log(`Pizza was just ordered`)
    setTimeout(()=>{
        let pizza = "🍕"
        callback(pizza)
    },3000)
}

orderPizza((pizza)=>{console.log(`${pizza} is ready to eat`)})
console.log("Call my friend")
