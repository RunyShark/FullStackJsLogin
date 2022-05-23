const { Router } = require("express");
const { Veterinario } = require("../../models/Veterinario.js");

const router = Router();

router.get("/:toke", async (req, res) => {
  try {
    const { toke } = req.params;

    const usuarioConfirmar = await Veterinario.findOne({ toke });

    if (!usuarioConfirmar) {
      const error = new Error("Vuelva a intentar token no valido");
      res.status(404).json({ msg: error.message });
    }
    usuarioConfirmar.toke = null;
    usuarioConfirmar.confirmado = true;
    await usuarioConfirmar.save();
    res.json({ msg: "Registro exitoso" });
  } catch (error) {
    res.status(404).json({ msg: `Peticion no valida ${error}` });
  }
});

module.exports = router;
