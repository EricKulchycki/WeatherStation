const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");
const db = require("../db");

const socket = io("http://localhost:8080");
const app = feathers();

// Set up Socket.io client with the socket
app.configure(socketio(socket));

function createReadingRequest(row) {
  app.service("readings").create({
    temp: row.temp,
    humidity: row.humidity,
  });
}

function handleRows(rows) {
  rows.forEach((row) => {
    createReadingRequest(row);
  });
}

db.get("SELECT * FROM readings;", (err, rows) => {
  handleRows(rows);
});

/* FOR TESTING WEBSOCKETS LOCALLY */
// Promise.resolve([
//   { temp: 10, humidity: 5 },
//   { temp: 11, humidity: 5 },
// ]).then((rows) => {
//   handleRows(rows);
// });
