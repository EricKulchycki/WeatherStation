const sqlite3 = require("sqlite3").verbose();
// const md5 = require("md5");

const DBSOURCE = "/home/pi/weather.db";

if (process.env.NODE_ENV === 'development') {
  const date = new Date();
  const mockdb = {
    all: () => Promise.resolve([
      { id: 1, temp: 10, humidity: 5, created_at: date.toISOString() },
      { id: 2, temp: 11, humidity: 5, created_at: date.toISOString() },
    ]),
  }

  module.exports = mockdb;
} else {
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
}




