const db = require('./db');

module.exports = {
  ReadingService: class ReadingService {
    constructor() {
    }

    async find() {
      return db.all("SELECT * FROM readings WHERE created_at > Date('now', '-7 day');", (err, rows) => {
        return rows;
      });
    }
  }
}

