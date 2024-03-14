const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos.controller");
const rateLimit = require("express-rate-limit");

const productLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 10, // limita a 10 peticiones por IP por hora
    message: "Demasiadas peticiones para esta acción, intenta nuevamente más tarde"
});

// Ruta para obtener todos los productos
router.get("/productos", productLimiter, productosController.obtenerProductos);

// Ruta para obtener un producto por su ID
router.get("/productos/:id", productLimiter, productosController.obtenerProductoPorId);

// Ruta para crear un nuevo producto
router.post("/productos", productLimiter, productosController.crearProducto);

// Ruta para actualizar un producto por su ID
router.put("/productos/:id", productLimiter, productosController.actualizarProducto);

// Ruta para eliminar un producto por su ID
router.delete("/productos/:id", productLimiter, productosController.eliminarProducto);

module.exports = router;
