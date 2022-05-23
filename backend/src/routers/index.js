const { Router } = require("express");
const routerVeterinarios = require("./controllers/veterinarios");
const routerLogin = require("./controllers/loginVeterinarios");

const router = Router();

router.use("/login", routerLogin);
router.use("/api/veterinarios", routerVeterinarios);

module.exports = router;
