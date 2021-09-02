extern crate rusqlite;
mod db;
mod i2c;

use db::DB;
use rusqlite::{Connection, Result};
use std::{thread, time};

fn main() -> Result<()> {
    let conn = Connection::open("/home/pi/weather.db")?;
    let mut db_ret: DB = DB::new(&conn);
    db_ret.create_table();

    loop {
        let reading = i2c::take_measurement();

        if reading.contains_key("temp") && reading.contains_key("humidity") {
            &db_ret.insert_reading(
                &reading.get("temp").unwrap(),
                &reading.get("humidity").unwrap(),
            );
        }

        let reading_interval = time::Duration::from_millis(5000);
        thread::sleep(reading_interval);
    }
}
