import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import Temp from "./components/Temperature/TemperatureDisplay";
import BluetoothSetTemperature from "./components/bluetoothSetTemperature";
import './fonts/Orbitron-Bold.ttf'

class App extends React.Component  {
  constructor(props) {
    super(props);
  }

  // placeholder to be replaced by bytestream values
  // these values will be updated every second?
  // we can also convert F to C on our frontend instead of taking 2 values from the bytestream
  // let degrees = 69.1;


  render() {
    let scale = "F";
    return (
      <div className="App">
        <BluetoothSetTemperature />
        <Temp degrees={this.props.temperatureDisplay.temperature} scale={scale} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  temperatureDisplay: state.temperatureDisplay
});

export default connect(mapStateToProps)(App);
