const mongoose = require("mongoose");

const Deseados = mongoose.model(
  "Deseados",
  new mongoose.Schema({
    name: String,
    img: String,
    color: String,
    descripcion:String,
    precio: String,
    etiquetas: String,
    tamaño:String,
    cantidad: String
  })
);

module.exports = Deseados;