#!/usr/bin/env node

const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const socketio = require("@feathersjs/socketio");

class ReadingService {
  constructor() {
    this.readings = [];
  }

  async find() {
    return this.readings;
  }

  async create(data) {
    const reading = {
      temp: data.temp,
      humidity: data.humidity,
    };

    this.readings.push(reading);

    return reading;
  }
}

const app = express(feathers());

// Parse HTTP JSON bodies
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

// Error Handler
app.use(express.errorHandler());

app.configure(socketio());
app.configure(express.rest());

app.use("/readings", new ReadingService());

// New Connection, connect to stream channel
app.on("connection", (conn) => app.channel("stream").join(conn));
//Publish events to stream
app.publish((data) => app.channel("stream"));

const PORT = process.env.PORT || 8080;

app.listen(PORT).on("listening", () => {
  console.log(`App Listening on Port: ${PORT}`);
});
