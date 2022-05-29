const { Router } = require("express");
const { Paciente } = require("../../../models/Paciente");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const createNew = new Paciente(req.body);
    createNew.veterinario = req.veterinario._id;
    const pacienteGuardado = await createNew.save();

    res.status(202).json(pacienteGuardado);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
