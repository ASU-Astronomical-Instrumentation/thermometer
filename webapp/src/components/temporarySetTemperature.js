import React from "react";
import { bindActionCreators } from 'redux'; 
import * as temperatureActions from '../actions/temperatureActions';
import { connect } from 'react-redux'


class TemporarySetTemperature extends React.Component  {
  constructor(props) {
    super(props);
  }

  // placeholder to be replaced by bytestream values
  // these values will be updated every second?
  // we can also convert F to C on our frontend instead of taking 2 values from the bytestream
  // let degrees = 69.1;
  
  componentDidMount() {
    this.count = setInterval( () => {
      let randomTemperature = Math.random() * (115 - 90) + 90;
      this.props.actions.setTemperature(randomTemperature.toPrecision(6));
    }, 3000); 
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

export default connect(mapStateToProps, mapDispatchToProps)(TemporarySetTemperature);
