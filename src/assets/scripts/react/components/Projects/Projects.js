import React, { Component } from "react";
import Project from './Project';

class ProjectContainer extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      projects: [],
    };
  }
 
  componentDidMount() {
    fetch('http://localhost:8080/projects')
      .then(response => response.json())
      .then(json =>  this.setState({ projects: json }));
  }

  render() {
    const { projects } = this.state;

    return (
      <div className="bt-projects">
        <ul className="bt-projects__container">
          {projects.map(project =>
            <li key={project.id} className="bt-projects__item">
              <Project projectObject={project} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ProjectContainer;