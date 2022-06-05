const { Router } = require("express");
const { Veterinario } = require("../../../models/Veterinario");

const router = Router();

router.get("/", (req, res) => {
  const { veterinario } = req;
  res.json({ perfil: veterinario });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { nombre, web, telefono, email } = req.body;
  const veterinario = await Veterinario.findById(id);
  if (!veterinario) {
    const error = new Error("No se encontro doctor");
    return res.status(400).json({ msg: error });
  }

  try {
    veterinario.nombre = nombre;
    veterinario.web = web;
    veterinario.telefono = telefono;
    veterinario.email = email;
    const doctorActualizado = await veterinario.save();
    res.json(doctorActualizado);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
