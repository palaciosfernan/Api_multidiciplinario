const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos.controller");

// Ruta para obtener todos los productos
router.get("/productos", productosController.obtenerProductos);

// Ruta para obtener un producto por su ID
router.get("/productos/:id", productosController.obtenerProductoPorId);

// Ruta para crear un nuevo producto
router.post("/productos", productosController.crearProducto);

// Ruta para actualizar un producto por su ID
router.put("/productos/:id", productosController.actualizarProducto);

// Ruta para eliminar un producto por su ID
router.delete("/productos/:id", productosController.eliminarProducto);

module.exports = router;
