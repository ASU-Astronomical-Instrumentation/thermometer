import React from "react";

class Temperature extends React.Component {
  render() {
    return <h1>{this.props.degrees}&deg;{this.props.scale}</h1>;
  }
}

export default Temperature;
