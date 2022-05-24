const { Router } = require("express");
const routerVeteRegistro = require("./controllers/veterinarios");
const routerLogin = require("./controllers/loginVeterinarios");
const routerPerfil = require("./controllers/perfil");
const routerConfirmar = require("./controllers/confirmar");
const routerRucperarpassword = require("./controllers/recueperarPass");
const { checkAuth } = require("../middleware/authMiddleware");

const router = Router();
//area publica
router.use("/veterinarios", routerVeteRegistro);
router.use("/veterinarios/login", routerLogin);
router.use("/confirmar", routerConfirmar);
router.use("/recuperar-password", routerRucperarpassword);

//area privada
router.use("/perfil", checkAuth, routerPerfil);

module.exports = router;
