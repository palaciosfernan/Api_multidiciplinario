const mongoose = require("mongoose");

const Descuentos = mongoose.model(
  "Descuentos",
  new mongoose.Schema({
    name: String,
    img: String,
    color: String,
    descripcion:String,
    precio: String,
    tamaño:String,
    cantidad: String,
    duracion: String,
  })
);

module.exports = Descuentos;