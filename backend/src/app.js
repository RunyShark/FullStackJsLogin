const express = require("express");
const routesVeterinario = require("./routers/indexVeterinarios");
const routesPaciente = require("./routers/indexPacientes");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const server = express();
const dominiosPermitidos = [
  "http://localhost:3000",
  "https://loginappd.herokuapp.com",
];
const corsOptions = {
  origin: function (oring, callback) {
    if (dominiosPermitidos.indexOf(oring) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por cors"));
    }
  },
};

server.use(cors({ origin: dominiosPermitidos }));
server.use(morgan("dev"));
server.use(express.json());
server.use("/api", routesVeterinario);
server.use("/paciente", routesPaciente);
module.exports = server;
