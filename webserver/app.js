const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const socketio = require("@feathersjs/socketio");

const app = express(feathers());

// Parse HTTP JSON bodies
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

//REST Support
app.configure(express.rest());
app.configure(socketio());

// Error Handler
app.use(express.errorHandler());

// Create instance of DB
const db = require("./db");

app.get("/results", (req, res) => {
  db.get("SELECT * FROM readings", (rows) => {
    console.log(rows);
  });
});

app.on("connection", (connection) => {
  app.channel("weatherData").join(connection);
});

app.listen(8080).on("listening", () => {
  console.log("App Listening on Port: 8080");
});
