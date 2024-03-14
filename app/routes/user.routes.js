const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();

const accountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 6, // limita cada IP a 6 peticiones por el tiempo definido con "windowMs"
    message: "Demasiadas peticiones realizadas, intenta despues de 1 hora"
});
 
app.get("/users", accountLimiter, (req, res) => {
    res.send('hola mundo ...');
});

app.post('/create-account', accountLimiter, (req, res) => {   
    res.send('Cuenta creada');
});

app.listen(3000, () => console.log(`App ejecutando en puerto :3000`));

const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", controller.allAccess);

    app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);
  
    app.get(
        "/api/test/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
    );
};
