const { Router } = require("express");
const routerVeteRegistro = require("./controllers/Veterinarios/veterinarios");
const routerLogin = require("./controllers/Veterinarios/loginVeterinarios");
const routerPerfil = require("./controllers/Veterinarios/perfil");
const routerConfirmar = require("./controllers/Veterinarios/confirmar");
const routerRucperarpassword = require("./controllers/Veterinarios/recueperarPass");
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
