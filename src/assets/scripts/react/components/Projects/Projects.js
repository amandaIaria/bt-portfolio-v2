import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import Project from './Project';
import portfoodtruck from '../../../../img/portfolio/foodtruck.png';
import port360Widget from '../../../../img/portfolio/360Widget.png';
import portDarkLayout from '../../../../img/portfolio/DarkLayout.png';
import porthealthyVT from '../../../../img/portfolio/healthyVT.png';
import portparentup from '../../../../img/portfolio/parentup.png';
import portsnap from '../../../../img/portfolio/snap.png';
import portweatherPrep from '../../../../img/portfolio/weatherPrep.png';

class ProjectContainer extends Component {
  constructor(props) {
    super(props);

  }
 
  componentDidMount() {
    // fetch('http://localhost:8080/projects')
    //   .then(response => response.json())
    //   .then(json =>  this.setState({ projects: json }));
  }

  render() {
    const
      { projects } = this.state,
      move = {left: this.props.directionForContatiner};

    return (
      <div className="bt-projects">
        <ul className="bt-projects__container" style={move}>
          {projects.map((project, index) =>
            <li key={index} className="bt-projects__item">
              <Project projectObject={project} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

ProjectContainer.propTypes = {
  disabledParent: PropTypes.any,
  directionForContatiner: PropTypes.string
};

export default ProjectContainer;