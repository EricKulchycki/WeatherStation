const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const socketio = require("@feathersjs/socketio");

const app = express(feathers());

// Parse HTTP JSON bodies
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

// Error Handler
app.use(express.errorHandler());

app.configure(socketio());

class ReadingService {
  async find(params) {}
  async get(id, params) {}
  async create(data, params) {}
  async update(id, data, params) {}
  async patch(id, data, params) {}
  async remove(id, params) {}
}

app.use("readings", new ReadingService());

const readingsService = app.service("readings");

readingsService.on("create", (message) => console.log(message));

app.listen(8080).on("listening", () => {
  console.log("App Listening on Port: 8080");
});
