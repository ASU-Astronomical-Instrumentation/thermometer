#include <ArduinoBLE.h>
#include "IEEE11073float.h"

// Bluetooth Health Thermometer Service UUID
BLEService tempService("1809");
// Bluetooth Temperature Measure Characteristic
BLECharacteristic tempMeasureChar("2A1C", BLERead | BLENotify, 5);

// Gets the temperature in Celsius from the sensor pin
float getTemp(int sensorPin, float offset=5.6, int maxCount=1000);

/*
* TMP36 Pin Variables
* the analog pin the TMP36's Vout (sense) pin is connected to
* the resolution is 10 mV / degree centigrade with a
* 500 mV offset to allow for negative temperatures
*/
int sensorPin = 0;

boolean DEBUG = true;

/*
* Initalizes the bluetooth and serial readers
*/
void setup() {
    Serial.begin(9600);  //Start the serial connection with the computer
    //to view the result open the serial monitor
    if (!BLE.begin())
    {
        if (DEBUG) {
            Serial.println("starting BLE failed!");
        }
        while (1);
    }

    BLE.setLocalName("Thermometer");
    BLE.setAdvertisedService(tempService);
    tempService.addCharacteristic(tempMeasureChar);
    BLE.addService(tempService);

    analogReadResolution(12);
    BLE.advertise();
    if (DEBUG) {
        Serial.println("Bluetooth device active, waiting for connections...");
    }
}


void loop() {
    BLEDevice central = BLE.central();

    if (central) {
        while (central.connected()) {
            double temperatureC = getTemp(sensorPin);
            if (DEBUG) {
                Serial.print(temperatureC); Serial.println(" degrees C");
            }
            // now convert to Fahrenheit
            double temperatureF = (temperatureC * 9.0 / 5.0) + 32.0;
            if (DEBUG) {
                Serial.print(temperatureF); Serial.println(" degrees F");
            }

            uint8_t writeVals[5] = {0};
            *writeVals = 1;
            uint8_t floatVals[4] = {0};
            float2IEEE11073(temperatureF, floatVals);
            memcpy(&writeVals[1], &floatVals, 4);

            tempMeasureChar.writeValue(writeVals, 5);
            delay(1000);
        }
    }
    delay(1000);
}

float getTemp(int sensorPin, float offset, int maxCount) {
    int sumVal = 0;
    for (int i = 0; i < maxCount; i++) {
        sumVal += analogRead(sensorPin);
        delay(0.5);
    }

    float voltage = sumVal / maxCount * 3.267;
    voltage /= 4096.0;

    if (DEBUG) {
        Serial.print(voltage, 4); Serial.println(" volts");
    }
    return (log(voltage) - 0.21554614419403478) / 0.008664680814404342;
}
