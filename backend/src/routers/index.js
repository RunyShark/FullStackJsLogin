const { Router } = require("express");
const routerVeteRegistro = require("./controllers/veterinarios.js");
const routerLogin = require("./controllers/loginVeterinarios");
const routerPerfil = require("./controllers/perfil");
const routerConfirmar = require("./controllers/confirmar");

const router = Router();

router.use("/veterinarios", routerVeteRegistro);
router.use("/veterinarios/login", routerLogin);
router.use("/confirmar", routerConfirmar);
router.use("/perfil", routerPerfil);

module.exports = router;
