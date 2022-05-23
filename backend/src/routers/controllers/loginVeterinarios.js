const { Router } = require("express");
const { Veterinario } = require("../../models/Veterinario");
const { generarJWT } = require("../../helpers/generarJWT.js");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExite = await Veterinario.findOne({ email });
    if (!userExite) {
      const error = new Error("El usuario no existe");
      return res.status(404).json({ msg: error.message });
    }

    if (!userExite.confirmado) {
      const error = new Error("Tu cuenta no se confirmo");
      return res.status(403).json({ msg: error.message });
    }

    if (await userExite.comprobarPassword(password)) {
      res.json({ token: generarJWT(userExite.id) });
    } else {
      res.status(403).json({ msg: "Password incorrecto" });
    }
  } catch (error) {
    res.status(404).json({ msg: `Error el usuario no existe ${error}` });
  }
});

module.exports = router;
