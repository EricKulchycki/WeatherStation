const sqlite3 = require("sqlite3").verbose();
const md5 = require("md5");

const DBSOURCE = "/home/pi/weather.db";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open DB
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite Database");
  }
});

module.exports = db;
