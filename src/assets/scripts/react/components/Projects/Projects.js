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
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json =>  this.setState({ projects: json }));
  }

  render() {
    const { projects } = this.state;

    return (
      <div className="bt-projects">
        <h1>Projects</h1>
        {projects.map(project =>
          <Project key={project.id} projectObject={project} /> 
        )}
      </div>
    );
  }
}

export default ProjectContainer;