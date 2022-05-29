const { Router } = require("express");
const { Paciente } = require("../../../models/Paciente");
const route = Router();

route.get("/", async (req, res) => {
  try {
    const pacientes = await Paciente.find()
      .where("veterinario")
      .equals(req.veterinario);
    res.json(pacientes);
  } catch (error) {
    console.log({ msg: error.message });
  }
});
route.get("/:id", async (req, res) => {
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

    res.json(paciente);
  } catch (error) {
    console.log({ msg: error.message });
  }
});
module.exports = route;
