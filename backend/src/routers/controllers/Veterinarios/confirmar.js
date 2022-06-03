const { Router } = require("express");
const { Veterinario } = require("../../../models/Veterinario");

const router = Router();

router.get("/:token", async (req, res) => {
  try {
    const { token } = req.params;

    const usuarioConfirmar = await Veterinario.findOne({ token });

    if (!usuarioConfirmar) {
      const error = new Error("Vuelva a intentar tokenn no valido");
      return res.status(404).json({ msg: error.message });
    }
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    await usuarioConfirmar.save();
    return res.json({ msg: "Registro exitoso" });
  } catch (error) {
    res.status(404).json({ msg: `Peticion no valida ${error}` });
  }
});

module.exports = router;
