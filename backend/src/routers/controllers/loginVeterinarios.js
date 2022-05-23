const { Router } = require("express");
const { Veterinario } = require("../../models/Veterinario");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExite = await Veterinario.findOne({ email });
    if (!userExite) {
      const error = new Error("El usuario no existe");
      res.status(404).json({ msg: error.message });
    }

    if (!userExite.confirmado) {
      const error = new Error("Tu cuenta no se confirmo");
      res.status(403).json({ msg: error.message });
    }

    if (await userExite.comprobarPassword(password)) {
      console.log("Password correcto");
    } else {
      console.log("Password incorrecto");
    }
  } catch (error) {
    res.status(404).json({ msg: `Error el usuario no existe ${error}` });
  }
});

module.exports = router;
