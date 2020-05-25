import React, { Component } from "react";

import Navigation from './Navigation';
import NavigationButton from './NavigationButton';

// will need to bring in screen movement
// navigation button

class NavigationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNav: false
    }
    this.handelCLick = this.handelCLick.bind(this);
  }

  handelCLick() {
    this.setState({openNav: !this.state.openNav});
    console.log(this.state.openNav); // eslint-disable-line
  }

  render() {
    const { openNav } = this.state;

    return (
      <>
        <NavigationButton open={openNav} onClick={() => this.handelCLick()} />
        <Navigation open={openNav} />
      </>
    );
  }
}

export default NavigationContainer;