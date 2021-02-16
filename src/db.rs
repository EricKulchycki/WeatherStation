extern crate rusqlite;
use rusqlite::Connection;

pub struct DB<'a> {
    connection: &'a Connection,
}

impl<'a> DB<'a> {
    pub fn new(conn: &'a Connection) -> Self {
        return DB { connection: conn };
    }

    pub fn insert_reading(&mut self, temp: &f32, humidity: &f32) -> () {
        return match self.connection.execute(
            "INSERT INTO reading(temperature, humidity) VALUES(:temperature, :humidity);",
            &[temp.to_string(), humidity.to_string()],
        ) {
            Ok(updated) => println!("{} rows were updated", updated),
            Err(err) => println!("update failed: {}", err),
        };
    }
}
