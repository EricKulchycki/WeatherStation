// const db = require('./db');

module.exports = {
    ReadingService: class ReadingService {
        constructor(app) {
            this.readings = [];
            this.app = app
        }

        async find() {
            // return db.all("SELECT * FROM readings WHERE created_at > Date('now', '-7 day');", (err, rows) => {
            //     return rows;
            // })
            return this.readings;
        }


        // XXX: When socket is created I think I gotta emit a new event of some kind.
        async create(data) {
            const reading = {
                id: data.id,
                temp: data.temp,
                humidity: data.humidity,
                created_at: data.created_at
            };

            this.readings.push(reading);

            return reading;
        }
    }
}

