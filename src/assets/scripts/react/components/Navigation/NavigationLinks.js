import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import WindowScroll from '../../../components/window-scroll';

// will need to bring in screen movement
// navigation button

class NavigationLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    }

    this.baseState = this.state 
    this.handleClick = this.handleClick.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if (nextProps.open !== this.props.open) {
      this.setState({ open: nextProps.open })
    }
  }


  handleClick(e) {
    console.log('state', this.state.open, 'props', this.props.open); // eslint-disable-line
    e.preventDefault();
    const scroll = new WindowScroll();
    // scroll.scrollPanel(e.target.href, e);
    this.setState({open: !this.state.open});
    this.props.onClick();
  }

  render() {
    // <NavigationLink open={this.props.open} Href="#about" Name="About" onClick={this.goToScroll} />
    return (
      <a href={this.props.Href} open={this.state.open} className="aic-o-navigation__link" onClick={this.handleClick}>{this.props.Name}</a>
    );
  }
}

NavigationLink.propTypes = {
  Href: PropTypes.string,
  Name: PropTypes.string,
  open: PropTypes.bool,
  onClick: PropTypes.func
};

export default NavigationLink;