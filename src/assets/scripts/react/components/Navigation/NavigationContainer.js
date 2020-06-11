import React, { Component } from "react";
import PropTypes from 'prop-types';
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
    this.callBack = this.callBack.bind(this);
  }

  handelCLick() {
    this.setState({openNav: !this.state.openNav});
  }

  callBack(childData) {
    this.setState({openNav: !childData});
  }

  render() {
    const { openNav } = this.state;

    return (
      <>
        <NavigationButton open={ openNav } onClick={this.handelCLick} />
        <Navigation open={ openNav } parentCallback={this.callBack} />
      </>
    );
  }
}

Navigation.propTypes = {
  open: PropTypes.bool
};

export default NavigationContainer;