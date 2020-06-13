import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectContainer from '../components/Projects/Projects';

class Projects extends Component {
  render() {
    return (
      <article className="aic-t-full-viewport btjs-portfolio__section" id="projects">
        <div className="bt-container">
          <div className="ail-grid__row">
            <div className="ail-grid__col ail-grid__col--6-lg bt-header">
              <h2 className="bt-header__title bt-projects__title">Featured Projects</h2>
            </div>
            <div className="ail-grid__col ail-grid__col--6-lg aiu-position--relative">
              <div className="bt-projects__content">
                <p>Amanda has worked on a wide variety of projects, ranging from full sites to landing pages, new layouts to plugins, components to design systems. These are just a few of the products they have worked on in the past couple of years.</p>
                <p className="aiu-spacing--p-bottom0">Want more info on a given project? Just click on one.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bt-container">
          <div className="ail-grid__row">
            <div className="ail-grid__col--12 aiu-spacing--p0">
              <ProjectContainer />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Projects;