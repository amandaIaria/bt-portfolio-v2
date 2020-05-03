import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './sections/Header';
import About from './sections/About';
import CaseStudy from './sections/CaseStudy';
import Projects from './sections/Projects';
import Social from './sections/Social';
import Contact from './sections/Contact';

import Alerts from './components/Alerts/Alerts';

/*
  <Alerts />
  <Header />
  <About />
  <CaseStudy />
  <Projects />
  <Contact />
  <Social />
*/

class Index extends Component {
  render() {
    return (
      <div className="bt-main">
        <Projects />
      </div>
    );
  }
}

export default Index;
