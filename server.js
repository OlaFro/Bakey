require("dotenv").config();
const http = require("http");
const app = require("./app");
const path = require("path");
const express = require("express")

const port = process.env.PORT || "5000";

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "uploads")))

server.listen(port, () => {
  console.log("Listening to " + port);
});
