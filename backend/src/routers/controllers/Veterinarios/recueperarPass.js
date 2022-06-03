const { Router } = require("express");
const { Veterinario } = require("../../../models/Veterinario");
const { generarId } = require("../../../helpers/generarId");
const { recuperarContra } = require("../../../helpers/emailRecuperarPass");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    const exiteEmail = await Veterinario.findOne({ email });
    if (!exiteEmail) {
      const error = new Error("Email no valido");
      return res.status(400).json({ msg: error.message });
    }

    exiteEmail.toke = generarId();
    await exiteEmail.save();
    recuperarContra({
      email,
      nombre: exiteEmail.nombre,
      token: exiteEmail.toke,
    });
    res.json({ msg: "Hemos enviado un email con las instrucciones" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:toke", async (req, res) => {
  try {
    const { toke } = req.params;
    const tokenValido = await Veterinario.findOne({ toke });

    if (tokenValido) {
      res.json({ msg: "Token valido y el usuario existe" });
    } else {
      const error = new Error("Token no valido");
      return res.status(400).json({ msg: error.message });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/:toke", async (req, res) => {
  try {
    const { toke } = req.params;
    const { password } = req.body;

    const veterinaro = await Veterinario.findOne({ toke });
    if (veterinaro) {
      veterinaro.toke = null;
      veterinaro.password = password;
      await veterinaro.save();
      return res.json({ msg: "Contraseña cambiada correctamente" });
    } else {
      const error = new Error("Token invalido");
      return res.status(404).json({ msg: error.message });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
