const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");
// const db = require("../db");

const socket = io("http://localhost:8080");
const app = feathers();

// Set up Socket.io client with the socket
app.configure(socketio(socket));

function createReadingRequest(row) {
  app.service("readings").create({
    id: row.id,
    temp: row.temp,
    humidity: row.humidity,
    created_at: row.created_at,
  });
}

function handleRows(rows) {
  rows.forEach((row) => {
    createReadingRequest(row);
  });
}

// db.all("SELECT * FROM readings WHERE created_at > Date('now', '-7 day');", (err, rows) => {
//   handleRows(rows);
// });

/* FOR TESTING WEBSOCKETS LOCALLY */
const date = new Date();
Promise.resolve([
  { id: 1, temp: 10, humidity: 5, created_at: date.toISOString() },
  { id: 2, temp: 11, humidity: 5, created_at: date.toISOString() },
]).then((rows) => {
  handleRows(rows);
});
