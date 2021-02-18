extern crate rusqlite;
mod db;
mod i2c;

use db::DB;
use rusqlite::{Connection, Result};
use std::{thread, time};

fn main() -> Result<()> {
    let conn = Connection::open("./weather-station/WeatherBoi.db")?;
    let mut db_ret: DB = DB::new(&conn);
    db_ret.create_table();

    loop {
        let reading = i2c::take_measurement();

        if reading.contains_key("temperature") && reading.contains_key("humidity") {
            &db_ret.insert_reading(
                &reading.get("temperature").unwrap(),
                &reading.get("humidity").unwrap(),
            );
        }

        let reading_interval = time::Duration::from_millis(5000);
        thread::sleep(reading_interval);
    }
}
