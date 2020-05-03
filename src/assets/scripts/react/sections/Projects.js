import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectContainer from '../components/Projects/Projects';

class Projects extends Component {
  render() {
    return (
      <article className="aic-t-full-viewport">
        <div className="bt-container">
          <div className="ail-grid__row">
            <div className="ail-grid__col ail-grid__col--6">
              <h2>Featured Projects</h2>
            </div>
            <div className="ail-grid__col ail-grid__col--6">
              <p>Amanda has worked on a wide variety of projects, ranging from full sites to landing pages, new layouts to plugins. These are just a few of the products they have worked on in the past couple of years.</p>
              <p>Want more info on a given project? Just click on one.</p>
            </div>
          </div>
        </div>
        <div className="ail-grid__row">
          <div className="ail-grid__col">
            <ProjectContainer />
          </div>
        </div>
      </article>
    );
  }
}

export default Projects;