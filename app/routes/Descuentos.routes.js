const express = require("express");
const router = express.Router();
const descuentosController = require("../controllers/Descuentos.controller");

router.get("/descuentos/:id", descuentosController.obtenerDescuentos);

router.get("/descuentos", descuentosController.obtenerDescuentos);

router.post("/descuentos", descuentosController.agregarDescuento);

router.put("/descuentos/:id", descuentosController.actualizarDescuento);

router.delete("/descuentos", descuentosController.eliminarDescuento);

router.delete("/descuentos/:id", descuentosController.eliminarDescuento);

module.exports = router;
