import React, { Component } from 'react';

import Header from './sections/Header';
import About from './sections/About';
import CaseStudy from './sections/CaseStudy';
import Projects from './sections/Projects';
import Social from './sections/Social';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import Alerts from './components/Alerts/Alerts';
import Ribbon from './sections/Ribbon';
import NavigationContainer from './components/Navigation/NavigationContainer';
import ScrollContainer from './components/ScrollContainer/ScrollContainer';

// import WindowScroll from '../components/window-scroll';

class Index extends Component {
  /*
   <ScrollContainer onWindowScroll={this.handleScroll}>
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </ScrollContainer>
  */

  // handleScroll(e) {
  //   const
  //     scroll = new WindowScroll(),
  //     $sections = document.querySelectorAll('.btjs-portfolio__section');
  // 
  //   scroll.scrollPanel($sections, e);
  // }
  
  render() {
    return (
      <>
        <Ribbon />
        <NavigationContainer />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Index;
