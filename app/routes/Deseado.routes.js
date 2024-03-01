const express = require("express");
const router = express.Router();
const deseosController = require("../controllers/Deseados.controller");

router.get("/deseos", deseosController.obtenerElementosDeseados);

router.get("/deseos/:id", deseosController.obtenerElementoDeseadoPorId);

router.post("/deseos", deseosController.agregarElementoDeseado);

router.put("/deseos/:id", deseosController.actualizarElementoDeseado);

router.delete("/deseos/:id", deseosController.eliminarElementoDeseado);

module.exports = router;
