const EventEmitter = require("events")
const emisorProductos = new EventEmitter()

emisorProductos.on("compra",(total)=>{
    console.log("Se realizo una compra por: $",total, "USD")
})

emisorProductos.emit("compra",500)
emisorProductos.emit("compra",600)
emisorProductos.emit("compra",300)