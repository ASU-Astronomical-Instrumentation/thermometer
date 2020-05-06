import React from "react";
import { bindActionCreators } from 'redux';
import * as temperatureActions from '../actions/temperatureActions';
import { connect } from 'react-redux'
import * as bt from '../bt_temp'

class BluetoothSetTemperature extends React.Component  {
  constructor(props) {
    super(props);
  }

  // placeholder to be replaced by bytestream values
  // these values will be updated every second?
  // we can also convert F to C on our frontend instead of taking 2 values from the bytestream
  // let degrees = 69.1;

  componentDidMount() {
    this.count = setInterval( () => {
      let readTemperature = bt.bt_temp_read(
         this.conn,
         bt.bt_temp_consts.characteristics.temperature_measurement.str);
      this.props.actions.setTemperature(readTemperature);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...temperatureActions }, dispatch),
    }
}

const mapStateToProps = state => ({
    temperatureDisplay: state.temperatureDisplay
});

export default connect(mapStateToProps, mapDispatchToProps)(BluetoothSetTemperature);
