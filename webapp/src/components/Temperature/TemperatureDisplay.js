import React from "react"; 
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: courier;
  color: white;
  font-size: 12em;
`

class Temperature extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return <H1>{this.props.degrees}&deg;{this.props.scale}</H1>;
  }
}

export default Temperature;
