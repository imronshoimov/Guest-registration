const express = require("express");
const cors = require('cors')
const { PORT } = require("./config.js");
const path = require("path");
const routes = require("./routes");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
app.use(cors())

module.exports = { app, PORT };
