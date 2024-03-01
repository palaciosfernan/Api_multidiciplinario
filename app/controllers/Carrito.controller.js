const Carrito = require("../models/Carrito.model");

// Controlador para obtener todos los elementos del carrito
const obtenerElementosCarrito = async (req, res) => {
  try {
    const elementos = await Carrito.find();
    res.json(elementos);
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al obtener los elementos del carrito" });
  }
};

// Controlador para obtener un elemento del carrito por su ID
const obtenerElementoCarritoPorId = async (req, res) => {
  try {
    const elemento = await Carrito.findById(req.params.id);
    if (!elemento) {
      return res.status(404).json({ mensaje: "Elemento del carrito no encontrado" });
    }
    res.json(elemento);
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al obtener el elemento del carrito" });
  }
};

// Controlador para agregar un elemento al carrito
const agregarElementoCarrito = async (req, res) => {
  try {
    const nuevoElemento = new Carrito(req.body);
    await nuevoElemento.save();
    res.status(201).json(nuevoElemento);
  } catch (error) {
    res.status(400).json({ mensaje: "Hubo un error al agregar el elemento al carrito" });
  }
};

// Controlador para actualizar un elemento del carrito por su ID
const actualizarElementoCarrito = async (req, res) => {
  try {
    const elementoActualizado = await Carrito.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!elementoActualizado) {
      return res.status(404).json({ mensaje: "Elemento del carrito no encontrado" });
    }
    res.json(elementoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al actualizar el elemento del carrito" });
  }
};

// Controlador para eliminar un elemento del carrito por su ID
const eliminarElementoCarrito = async (req, res) => {
  try {
    // Si se proporciona un ID en la solicitud, se eliminará el elemento correspondiente.
    if(req.params.id) {
      const elementoEliminado = await Carrito.findByIdAndDelete(req.params.id);
      if (!elementoEliminado) {
        return res.status(404).json({ mensaje: "Elemento del carrito no encontrado" });
      }
      return res.json({ mensaje: "Elemento del carrito eliminado correctamente" });
    } else {
      // Si no se proporciona un ID, se eliminarán todos los elementos del carrito.
      await Carrito.deleteMany({});
      return res.json({ mensaje: "Todos los elementos del carrito han sido eliminados correctamente" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al eliminar el elemento del carrito" });
  }
};


module.exports = {
  obtenerElementosCarrito,
  obtenerElementoCarritoPorId,
  agregarElementoCarrito,
  actualizarElementoCarrito,
  eliminarElementoCarrito,
};
