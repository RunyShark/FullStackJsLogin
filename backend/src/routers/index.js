const { Router } = require("express");
const routerVeterinarios = require("./veterinarios");
const routerLogin = require("./loginVeterinarios");

const router = Router();

router.use("/login", routerLogin);
router.use("/api/veterinarios", routerVeterinarios);

module.exports = router;
