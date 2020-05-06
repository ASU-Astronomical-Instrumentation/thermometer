let parse_float =
function(value, offset) {
    const negative = value.getInt8(offset + 2) >>> 31;

    const [b0, b1, b2, exponent] = [
        value.getUint8(offset),
        value.getUint8(offset + 1),
        value.getUint8(offset + 2),
        value.getInt8(offset + 3)
    ];

    let mantissa = b0 | (b1 << 8) | (b2 << 16);
    if (negative) {
        mantissa |= 255 << 24;
    }

    return mantissa * Math.pow(10, exponent);
}

/**
 * Exports
 */

/**
 * @name bluetoothTemperatureContants
 * @description bluetooth temperature constants
 */
export const bluetoothTemperatureContants = {
    services: {
        health_thermometer: {
            str: 'health_thermometer',
            id: 0x1809
        }
    },
    characteristics: {
        temperature_measurement: {
            str: 'temperature_measurement',
            id: 0x2AC1
        },
        temperature_type: {
            str: 'temperature_type',
            id: 0x2A1D
        },
        intermediate_temperature: {
            str: 'intermediate_temperature',
            id: 0x2A1E
        },
        measurement_interval: {
            str: 'measurement_interval',
            id: 0x2A21
        }
    }
}

/**
 * @name bluetoothInit
 * @description Initializes the bluetooth temperature device connection
 * @returns connection object or empty object on error
 */
export let bluetoothInit =
async function() {
    let device = await navigator.bluetooth.requestDevice({
        filters: [{
            services: [ bluetoothTemperatureContants.services.health_thermometer.str ]
        }]
    });

    if(device == undefined) {
        console.error("No connection to device");
        return {};
    }
    else {
        console.log("Conencted to: ", device.name);
    }

    let server = await device.gatt.connect();
    if(server == undefined) {
        console.error("No connection to server");
        return {};
    }
    else {
        console.log("Connected to server");
    }

    let service = await server.getPrimaryService( bluetoothTemperatureContants.services.health_thermometer.str );
    if(service == undefined) {
        console.error("No connection to service");
        return {};
    }
    else {
        console.log("Connected to service");
    }


    return {
        device: device,
        service: service
    };
}

/**
 * @name readBluetoothCharacteristic 
 * @description Reads data from the given characteristic temperature device connection
 * @returns float or throws error
 */
export let readBluetoothCharacteristic =
async function(connection, characteristic) {
    if(characteristic == bluetoothTemperatureContants.characteristics.temperature_measurement.str) {
        let chr = await connection.service.getCharacteristic(bluetoothTemperatureContants.characteristics.temperature_measurement.str);

        if(chr == undefined) {
            console.log("No connection to characteristic");
            return {};
        }
        else {
            console.log("Conencted to characteristic");
        }

        return(parse_float(await chr.readValue(), 1));
    }
}
