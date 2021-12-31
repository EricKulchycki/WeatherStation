#!/usr/bin/env node

const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const socketio = require("@feathersjs/socketio");
const cron = require('node-cron');
const { ReadingService } = require("./readingService");

const app = express(feathers());

// Parse HTTP JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
// Error Handler
app.use(express.errorHandler());

app.configure(socketio());

app.use("/readings", new ReadingService());

// Add any new real-time connection to the `everybody` channel
app.on('connection', connection =>
  app.channel('everybody').join(connection)
);
// Publish all events to the `everybody` channel
app.publish(data => {
  console.log(data);
  return app.channel('everybody');
});

// Run app
const PORT = process.env.PORT || 8080;
app.listen(PORT).on("listening", () => {
  console.log(`App Listening on Port: ${PORT}`);
});

app.io.on('connection', (socket) => {
  console.log("We've got a new connection");
  socket.emit("news", { text: "New Connection!" });
});

// Function that runs on a schedule to fetch newest readings
cron.schedule('10 * * * * *', () => {
  console.log("Finding readings");
  const readings = app.service("readings");
  readings.find().then((readings) => {
    console.log(readings);
    app.io.emit('updated_readings', readings);
  });
});

