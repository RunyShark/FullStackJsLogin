const express = require("express");
const routes = require("./routers/index.js");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use("/api", routes);
module.exports = server;
