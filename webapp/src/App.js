import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import Temp from "./components/TemperatureDisplay";
import BluetoothSetTemperature from "./components/BluetoothSetTemperature";
import './fonts/Orbitron-Bold.ttf'

class App extends React.Component  {
  constructor(props) {
    super(props);
  }

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
