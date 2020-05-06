import React from "react"; 
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: Orbitron;
  color: white;
  font-size: 12em;
`

class Temperature extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    var temperature = parseFloat(this.props.degrees).toFixed(2); 
    return <H1>{this.props.degrees}&deg;{this.props.scale}</H1>;
  }
}

export default Temperature;