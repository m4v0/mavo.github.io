const express = require("express");
const mongoose = require("mongoose");
mongoose.set("debug", true);

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect("mongodb://0.0.0.0:27017/nodeapi", {
  useNewUrlParser: true
});

// Primeira rota
app.get("/", (req, res) => {
  res.send("Hello Lucas");
});

app.listen(3001);
