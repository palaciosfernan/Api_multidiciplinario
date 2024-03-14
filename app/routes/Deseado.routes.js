const express = require("express");
const router = express.Router();
const deseosController = require("../controllers/Deseados.controller");
const rateLimit = require("express-rate-limit");

const deseosLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 5, // límite de 5 peticiones por IP por hora
    message: "Demasiadas peticiones para esta acción, intenta nuevamente más tarde"
});

router.get("/deseos", deseosLimiter, deseosController.obtenerElementosDeseados);

router.get("/deseos/:id", deseosLimiter, deseosController.obtenerElementoDeseadoPorId);

router.post("/deseos", deseosLimiter, deseosController.agregarElementoDeseado);

router.put("/deseos/:id", deseosLimiter, deseosController.actualizarElementoDeseado);

router.delete("/deseos/:id", deseosLimiter, deseosController.eliminarElementoDeseado);

module.exports = router;
