const express = require("express");
const routesVeterinario = require("./routers/indexVeterinarios");
const routesPaciente = require("./routers/indexPacientes");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use("/api", routesVeterinario);
server.use("/paciente", routesPaciente);
module.exports = server;
