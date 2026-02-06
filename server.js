const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/register.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor activo en http://localhost:3000");
});


//CONTROL + C para apagar el SERVER 