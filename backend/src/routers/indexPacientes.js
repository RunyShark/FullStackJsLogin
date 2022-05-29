const { Router } = require("express");
const agregarPaciente = require("./controllers/Pacientes/pacientes");
const obtenerPacientes = require("./controllers/Pacientes/obtenerPacientes");
const updatePaciente = require("./controllers/Pacientes/actualizarPaciente");
const borrarPaciente = require("./controllers/Pacientes/borrarPaciente");
const { checkAuth } = require("../middleware/authMiddleware");

const router = Router();

router.use("/crear", checkAuth, agregarPaciente);
router.use("/obtener", checkAuth, obtenerPacientes);
router.use("/modificar", checkAuth, updatePaciente);
router.use("/borrar", checkAuth, borrarPaciente);

module.exports = router;
