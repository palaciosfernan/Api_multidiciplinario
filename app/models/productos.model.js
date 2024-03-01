const mongoose = require("mongoose");

const Productos = mongoose.model(
  "Productos",
  new mongoose.Schema({
    name: String,
    img: String,
    title: String,
    color: String,
    descripcion:String,
    precio: String,
    etiquetas: String,
    tamaño:String,
    temporada: String,
    cantidad: String
  })
);

module.exports = Productos;