const { Router } = require("express");
const { Veterinario } = require("../../../models/Veterinario");

const router = Router();

router.put("/", async (req, res) => {
  const { id } = req.veterinario;
  const { pwd_actual, pwd_nuevo } = req.body;

  const veterinario = await Veterinario.findById(id);
  if (!veterinario) {
    const error = new Error("Hubo un error");
    return res.status(400).json({ msg: error.message });
  }

  if (await veterinario.comprobarPassword(pwd_actual)) {
    veterinario.password = pwd_nuevo;
    await veterinario.save();
    res.status(202).json({ msg: "Contraseña actualizada correctamente" });
  } else {
    const error = new Error("La contraseña actual es incorrecta");
    return res.status(400).json({ msg: error.message });
  }
});
module.exports = router;
