#include <ArduinoBLE.h>
BLEService tempservice("1101");
//BLEUnsignedCharCharacteristic temperature("2101", BLERead | BLENotify);
//BLEStringCharacteristic temperature("2101", BLERead | BLENotify);
BLEUnsignedCharCharacteristic temperature("2101", BLERead | BLENotify);


//TMP36 Pin Variables
int sensorPin = 0; //the analog pin the TMP36's Vout (sense) pin is connected to
                        //the resolution is 10 mV / degree centigrade with a
                        //500 mV offset to allow for negative temperatures
 
/*
 * setup() - this function runs once when you turn your Arduino on
 * We initialize the serial connection with the computer
 */
void setup()
{  
  Serial.begin(9600);  //Start the serial connection with the computer
                       //to view the result open the serial monitor
  if (!BLE.begin()) 
  {
  Serial.println("starting BLE failed!");
  while (1);
  }

  BLE.setDeviceName("thermometer");
  BLE.setAdvertisedService(tempservice);
  tempservice.addCharacteristic(temperature);
  BLE.addService(tempservice);

  analogReadResolution(12);
  BLE.advertise();
  Serial.println("Bluetooth device active, waiting for connections...");                    
}
 
void loop()                     // run over and over again
{
BLEDevice central = BLE.central();

if (central) {
  while (central.connected()) {
    float offset = 5.6;
    int avgNum = 1000;
    int val = 0;
    int i = 0;
     
     while (i<avgNum)
        {
        val += analogRead(sensorPin);
        //Serial.println(val);
        delay(0.5);
        i += 1;
        }
     // change the resolution to 12 bits and read A0
     
     //getting the voltage reading from the temperature sensor
     //int reading = analogRead(sensorPin);  
    
     
     // converting that reading to voltage, for 3.3v arduino use 3.3
     float voltage = val/avgNum * 3.267;
     voltage /= 4096.0;
     
     // print out the voltage
     Serial.print(voltage, 4); Serial.println(" volts");
     
     // now print out the temperature
     //float temperatureC = ((15/0.21678)*(voltage - 1.1512 ))+ offset ;  //converting from 10 mv per degree wit 500 mV offset
                                                   //to degrees ((voltage - 500mV) times 100)
     float temperatureC = (log(voltage) - 0.21554614419403478)/ 0.008664680814404342;                                              
     Serial.print(temperatureC); Serial.println(" degrees C");
     
     // now convert to Fahrenheit
     float temperatureF = (temperatureC * 9.0 / 5.0) + 32.0;
     Serial.print(temperatureF); Serial.println(" degrees F");
    
     char txtemp = (temperatureF);
     //Serial.print("Connected to central: ");
     //Serial.println(central.address());
     //temperature.setValue(temperatureF);
     temperature.writeValue(txtemp);
     delay(1000);
   }
 }
 delay(1000);                                     //waiting a second
}
