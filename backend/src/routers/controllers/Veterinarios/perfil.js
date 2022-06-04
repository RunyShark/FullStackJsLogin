const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  const { veterinario } = req;
  res.json({ perfil: veterinario });
});

module.exports = router;
