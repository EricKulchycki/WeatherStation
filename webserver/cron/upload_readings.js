const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");
const db = require("../db");

const socket = io("http://localhost:8080");
const app = feathers();

// Set up Socket.io client with the socket
app.configure(socketio(socket));

function emitReadings(readings) {
  app.emit("create", "readings", { readings });
}

db.get("SELECT * FROM readings;", (err, rows) => {
  console.log(rows);
  emitReadings(rows);
});
