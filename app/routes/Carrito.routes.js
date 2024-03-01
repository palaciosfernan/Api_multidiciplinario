const express = require("express");
const { authJwt } = require("../middlewares");

    
const router = express.Router();
const carritoController = require("../controllers/Carrito.controller");

router.get("/carrito", carritoController.obtenerElementosCarrito);

router.get("/carrito/:id", carritoController.obtenerElementoCarritoPorId);

router.post("/carrito", carritoController.agregarElementoCarrito);

router.put("/carrito/:id", carritoController.actualizarElementoCarrito);

router.delete("/carrito/:id", [authJwt.verifyToken],carritoController.eliminarElementoCarrito);

router.delete("/carrito", carritoController.eliminarElementoCarrito);

module.exports = router;
