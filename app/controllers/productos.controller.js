const Productos = require("../models/productos.model");

// Controlador para obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await Productos.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al obtener los productos" });
  }
};

// Controlador para obtener un producto por su ID
const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Productos.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al obtener el producto" });
  }
};

// Controlador para crear un nuevo producto
const crearProducto = async (req, res) => {
  try {
    const producto = new Productos(req.body);
    await producto.save();
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ mensaje: "Hubo un error al crear el producto" });
  }
};

// Controlador para actualizar un producto por su ID
const actualizarProducto = async (req, res) => {
  try {
    const producto = await Productos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al actualizar el producto" });
  }
};

// Controlador para eliminar un producto por su ID
const eliminarProducto = async (req, res) => {
  try {
    const producto = await Productos.findByIdAndDelete(req.params.id);
    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al eliminar el producto" });
  }
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
