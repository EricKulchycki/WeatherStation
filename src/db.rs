extern crate rusqlite;
use rusqlite::{Connection, Error, NO_PARAMS};

pub struct DB<'a> {
    connection: &'a Connection,
}

impl<'a> DB<'a> {
    pub fn new(conn: &'a Connection) -> Self {
        return DB { connection: conn };
    }

    pub fn create_table(&mut self) -> () {
         match self.connection.execute(
            "CREATE TABLE readings(
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            temperature REAL NOT NULL,
            humidity READ NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL);",
            NO_PARAMS,
        ) {
            Ok(updated) => println!("Table created: {}", updated),
            Err(e) => println!("Error: {}", e)
        }
    }

    pub fn insert_reading(&mut self, temp: &f32, humidity: &f32) -> Result<i64, Error> {
        self.connection.execute("BEGIN TRANSACTION;", NO_PARAMS)?;

        match self.connection.execute(
            "INSERT INTO readings(temperature, humidity) VALUES (:temperature, :humidity)",
            &[&temp.to_string(), &humidity.to_string()],
        ) {
            Ok(updated) => println!("{} rows were updated", updated),
            Err(e) => println!("Error: {}", e)
        }

        self.connection.execute("COMMIT;", NO_PARAMS)?;

        Ok(self.connection.last_insert_rowid())
    }
}
