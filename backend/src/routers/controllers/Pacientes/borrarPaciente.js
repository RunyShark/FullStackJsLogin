const { Router } = require("express");
const { Paciente } = require("../../../models/Paciente");

const router = Router();

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const paciente = await Paciente.findById(id);
    if (!paciente) {
      const error = new Error("No se encontro paciente");
      return res.status(404).json({ msg: error.message });
    }
    if (
      paciente.veterinario._id.toString() !== req.veterinario._id.toString()
    ) {
      const error = new Error("No con incide el log");
      return res.status(404).json({ msg: error.message });
    }
    const borrar = await Paciente.deleteOne(paciente);
    res.status(202).json({ msg: "paciente eliminado correctamente" });
  } catch (error) {}
});

module.exports = router;
