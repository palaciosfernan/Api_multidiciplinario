const mongoose = require("mongoose");

const Carrito = mongoose.model(
  "Carrito",
  new mongoose.Schema({
    name: String,
    img: String,
    color: String,
    descripcion:String,
    precio: String,
    tamaño:String,
    cantidad: String,
    metodo:String,
    dirreccion:String
  })
);

module.exports = Carrito;