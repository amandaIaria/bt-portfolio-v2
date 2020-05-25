import React, { Component } from 'react';

import Header from './sections/Header';
import About from './sections/About';
import CaseStudy from './sections/CaseStudy';
import Projects from './sections/Projects';
import Social from './sections/Social';
import Contact from './sections/Contact';

import Alerts from './components/Alerts/Alerts';
import NavigationContainer from './components/Navigation/NavigationContainer';
import ScrollContainer from './components/ScrollContainer/ScrollContainer';

class Index extends Component {
  
  render() {
    return (
      <ScrollContainer>
        <NavigationContainer />
        <Header />
        <About />
        <CaseStudy />
        <Projects />
        <Contact />
        <Social />
      </ScrollContainer>
    );
  }
}

export default Index;
