import React, { Component } from "react";
import PropTypes from 'prop-types'; 

// will need to bring in screen movement
// navigation button

class NavigationButton extends Component {
  render() {

    return (
      <button className={`aic-a-button aic-a-button--navigation aic-a-button--block ${this.props.open ? "aic-a-button--open" : ""}`}
        onClick={() => this.props.onClick()}>
        <div className="aic-a-button__border aic-a-button__border--top"></div>
        <div className="aic-a-button__border aic-a-button__border--middle"></div>
        <div className="aic-a-button__border aic-a-button__border--bottom"></div>
      </button>
      );
  }
}

NavigationButton.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func
};

export default NavigationButton;
