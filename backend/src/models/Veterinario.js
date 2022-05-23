const mongoose = require("mongoose");

const veterinarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  telefono: {
    type: Number,
    detault: null,
    trim: true,
  },
  web: {
    type: String,
    detault: null,
  },
  toke: {
    type: String,
  },
  confirmado: {
    type: Boolean,
    detault: false,
  },
});

const Veterinario = mongoose.model("Veterinario", veterinarioSchema);
module.exports = {
  Veterinario,
};
