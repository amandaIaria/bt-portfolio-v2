import React, { Component } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'; 
import Header from '../../sections/Header';
import About from '../../sections/About';
import CaseStudy from '../../sections/CaseStudy';
import Projects from '../../sections/Projects';
import Social from '../../sections/Social';
import Contact from '../../sections/Contact';

import WindowScroll from '../../../components/window-scroll';

class ScrollContainer extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef()
    this.windowScroll = this.windowScroll.bind(this);
    this.windowMoveOnPress = this.windowMoveOnPress.bind(this);
  }

  windowScroll(e) {
    if (this.props.onWindowScroll) this.props.onWindowScroll(e);
  }

  windowMoveOnPress(e) {
    const
      scroll = new WindowScroll(),
      $sections = document.querySelectorAll('.btjs-portfolio__section');

    e.preventDefault();
    scroll.keyPressPanel($sections, e);
  }

  componentDidMount() {
    // if (this.props.onWindowScroll) window.addEventListener('wheel', this.windowScroll);
    window.addEventListener('keydown', this.windowMoveOnPress);
  }

  componentWillUnmount() {
    // if (this.props.onWindowScroll) window.removeEventListener('wheel', this.windowScroll);
    window.removeEventListener('keydown', this.windowMoveOnPress);
  }

  render() {
    return this.props.children;
  }

}

ScrollContainer.propTypes = {
  children: PropTypes.any,
  windowScroll: PropTypes.func,
  windowMoveOnPress: PropTypes.func,
  onWindowScroll: PropTypes.func
};

export default ScrollContainer;