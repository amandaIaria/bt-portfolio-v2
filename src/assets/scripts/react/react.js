import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './sections/Header';
import About from './sections/About';
import CaseStudy from './sections/CaseStudy';
import Projects from './sections/Projects';
import Social from './sections/Social';
import Contact from './sections/Contact';


class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <CaseStudy />
        <Projects />
        <Social />
        <Contact />
      </div>
    );
  }
}

export default Index;
