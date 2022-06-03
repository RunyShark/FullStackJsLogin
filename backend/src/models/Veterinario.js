const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { generarId } = require("../helpers/generarId.js");

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
    default: null,
    trim: true,
  },
  web: {
    type: String,
    default: null,
  },
  token: {
    type: String,
    default: generarId(),
  },
  confirmado: {
    type: Boolean,
    default: false,
  },
});

veterinarioSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    console.log(`Hash ${error}`);
  }
});

veterinarioSchema.methods.comprobarPassword = async function (passwordForm) {
  return await bcrypt.compare(passwordForm, this.password);
};

const Veterinario = mongoose.model("Veterinario", veterinarioSchema);
module.exports = {
  Veterinario,
};
