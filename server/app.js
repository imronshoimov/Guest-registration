require("dotenv").config();
const express = require("express");
const cors = require("cors");
const keys = require("./config/keys");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(cors());

app.use(routes);

module.exports = { app, keys };
