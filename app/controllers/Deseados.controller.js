const Deseados = require("../models/Deseados.model");

const obtenerElementosDeseados = async (req, res) => {
  try {
    const elementos = await Deseados.find();
    res.json(elementos);
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al obtener los elementos de la lista de deseos" });
  }
};

const obtenerElementoDeseadoPorId = async (req, res) => {
  try {
    const elemento = await Deseados.findById(req.params.id);
    if (!elemento) {
      return res.status(404).json({ mensaje: "Elemento de la lista de deseos no encontrado" });
    }
    res.json(elemento);
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al obtener el elemento de la lista de deseos" });
  }
};

const agregarElementoDeseado = async (req, res) => {
  try {
    const nuevoElemento = new Deseados(req.body);
    await nuevoElemento.save();
    res.status(201).json(nuevoElemento);
  } catch (error) {
    res.status(400).json({ mensaje: "Hubo un error al agregar el elemento a la lista de deseos" });
  }
};

const actualizarElementoDeseado = async (req, res) => {
  try {
    const elementoActualizado = await Deseados.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!elementoActualizado) {
      return res.status(404).json({ mensaje: "Elemento de la lista de deseos no encontrado" });
    }
    res.json(elementoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al actualizar el elemento de la lista de deseos" });
  }
};

const eliminarElementoDeseado = async (req, res) => {
  try {
    const elementoEliminado = await Deseados.findByIdAndDelete(req.params.id);
    if (!elementoEliminado) {
      return res.status(404).json({ mensaje: "Elemento de la lista de deseos no encontrado" });
    }
    res.json({ mensaje: "Elemento de la lista de deseos eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al eliminar el elemento de la lista de deseos" });
  }
};

module.exports = {
  obtenerElementosDeseados,
  obtenerElementoDeseadoPorId,
  agregarElementoDeseado,
  actualizarElementoDeseado,
  eliminarElementoDeseado,
};
