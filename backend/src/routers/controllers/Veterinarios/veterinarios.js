const { Router } = require("express");
const { Veterinario } = require("../../../models/Veterinario.js");
const router = Router();
const { emailRegistro } = require("../../../helpers/emailRegistro");

router.post("/", async (req, res) => {
  try {
    const { nombre, email, password, telefono, web } = req.body;
    const existeUsuario = await Veterinario.findOne({ email });
    if (existeUsuario) {
      const error = new Error("El correo ya existe");
      res.status(400).json({ msg: error.message });
    } else {
      const newVeterinario = new Veterinario(req.body);
      const addVeterinario = await newVeterinario.save();

      emailRegistro({
        email,
        nombre,
        toke: addVeterinario.toke,
      });

      res.json(addVeterinario);
    }
  } catch (error) {
    res.status(404).send(`El correo ya existe ${error}`);
  }
});

module.exports = router;
