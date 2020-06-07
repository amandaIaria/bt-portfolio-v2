import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import WindowScroll from '../../../components/window-scroll';

class ScrollContainer extends Component {
  windowScroll(e) {
    const
      scroll = new WindowScroll(),
      $sections = document.querySelectorAll('.btjs-portfolio__section');
    
    // e.preventDefault();
    scroll.scrollPanel($sections, e);
  }

  windowMoveOnPress(e) {
    const
      scroll = new WindowScroll(),
      $sections = document.querySelectorAll('.btjs-portfolio__section');

    e.preventDefault();
    scroll.keyPressPanel($sections, e);
  }

  componentDidMount() {
    // window.addEventListener('wheel', this.windowScroll);
    window.addEventListener('keydown', this.windowMoveOnPress);
  }

  componentWillUnmount() {
    // window.removeEventListener('wheel', this.windowScroll);
    window.removeEventListener('keydown', this.windowMoveOnPress);
  }

  render() {
    return this.props.children;
  }

}

ScrollContainer.propTypes = {
  children: PropTypes.any,
  windowScroll: PropTypes.func,
  windowMoveOnPress: PropTypes.func
};

export default ScrollContainer;