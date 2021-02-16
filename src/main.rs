extern crate rusqlite;
mod db;
mod i2c;

use db::DB;
use rusqlite::{Connection, Result};
use std::{thread, time};

fn main() -> Result<()> {
    let conn = Connection::open("myfile.db")?;
    let mut db_ret = DB::new(&conn);

    loop {
        let reading = i2c::take_measurement();

        let mut temp = None;
        let mut humidity = None;

        if reading.contains_key("temperature") {
            temp = reading.get("temperature");
            println!("Temperature = {}", temp.unwrap());
        }
        if reading.contains_key("humidity_relative") {
            humidity = reading.get("humidity_relative");
            println!("Relative Humidity = {}", humidity.unwrap());
        }

        if temp != None && humidity != None {
            db_ret.insert_reading(&temp.unwrap(), &humidity.unwrap());
        };

        let reading_interval = time::Duration::from_millis(5000);
        thread::sleep(reading_interval);
    }
}
