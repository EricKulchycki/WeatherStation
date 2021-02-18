use bme280::BME280;
use linux_embedded_hal::{Delay, I2cdev};
use std::collections::HashMap;

pub fn take_measurement() -> HashMap<String, f32> {
    let i2c_bus = I2cdev::new("/dev/i2c-1").unwrap();

    // initialize the BME280 using the primary I2C address 0x76
    let mut bme280 = BME280::new_secondary(i2c_bus, Delay);

    // initialize the sensor
    bme280.init().unwrap();

    // measure temperature, pressure, and humidity
    let measurements = bme280.measure().unwrap();

    let mut result: HashMap<String, f32> = HashMap::new();

    result.insert("humidity".to_string(), measurements.humidity);
    result.insert("temperature".to_string(), measurements.temperature);

    println!("Relative Humidity = {}%", measurements.humidity);
    println!("Temperature = {} deg C", measurements.temperature);

    return result;
}
