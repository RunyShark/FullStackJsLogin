const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  const { veterinario } = req;
  res.json({ User: veterinario });
});

module.exports = router;
