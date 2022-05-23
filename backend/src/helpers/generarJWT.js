const jwtid = require("jsonwebtoken");

const generarJWT = () => {
  return jwtid.sing({ nombre: "Dario" }, process.env.JWT_SECRET, {
    expiresIn: "30d ",
  });
};

module.exports = {
  generarJWT,
};
