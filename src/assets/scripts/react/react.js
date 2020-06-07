import React, { Component } from 'react';

import Header from './sections/Header';
import About from './sections/About';
import CaseStudy from './sections/CaseStudy';
import Projects from './sections/Projects';
import Social from './sections/Social';
import Contact from './sections/Contact';

import Alerts from './components/Alerts/Alerts';
import Ribbon from './sections/Ribbon';
import NavigationContainer from './components/Navigation/NavigationContainer';
import ScrollContainer from './components/ScrollContainer/ScrollContainer';

class Index extends Component {
  /*
    <CaseStudy />
    <Projects />
    <Contact />
    <Social />
  */
  
  render() {
    return (
      <ScrollContainer>
        <Ribbon />
        <NavigationContainer />
        <Header />
        <About />
      </ScrollContainer>
    );
  }
}

export default Index;
