const { Router } = require("express");
const { Paciente } = require("../../../models/Paciente");

const router = Router();

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const paciente = await Paciente.findById(id);
    if (!paciente) {
      res.status(404).json({ msg: "paciente no encontrado" });
    }
    if (
      paciente.veterinario._id.toString() !== req.veterinario._id.toString()
    ) {
      const error = new Error("Accion innvalida");
      return res.json({ msg: error.message });
    }
    //actualizar
    const { nombre, propietario, email, fecha, sintomas } = req.body;
    paciente.nombre = nombre || paciente.nombre;
    paciente.propietario = propietario || paciente.propietario;
    paciente.email = email || paciente.email;
    paciente.fecha = fecha || paciente.fecha;
    paciente.sintomas = sintomas || paciente.sintomas;
    const actualizarPaciente = await paciente.save();
    res.json(actualizarPaciente);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
