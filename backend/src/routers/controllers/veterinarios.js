const { Router } = require("express");
const { Veterinario } = require("../../models/Veterinario.js");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    const existeUsuario = await Veterinario.findOne({ email });
    if (existeUsuario) {
      const error = new Error("Usuario ya regristrado");
      res.status(400).json({ msg: error.message });
    } else {
      const newVeterinario = new Veterinario(req.body);
      const addVeterinario = await newVeterinario.save();
      res.json(addVeterinario);
    }
  } catch (error) {
    res.status(404).send(`El correo ya existe ${error}`);
  }
});

module.exports = router;
