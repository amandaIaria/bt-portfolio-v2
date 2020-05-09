import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import ReactDOM from "react-dom";
import Modal from '../Modal/Modal';

class Project extends Component {
  openModal(object) {
    console.table(object); // eslint-disable-line
  }

  renderProject(object) {
    const styleBackground = {
      backgroundImage: `url(${object.imageBackground})`
    };

    return (
      <a className="bt-projects__link aiu-spacing--p32 aiu-color-background--black"
        style={styleBackground}
        onClick={this.openModal.bind(this, object)}
        href="#">
        {object.title}
      </a>
    );
  }

  render() {
    const
      projectObject = this.props.projectObject;

    return (
      this.renderProject(projectObject)
    );
  }
}

Project.propTypes = {
  projectObject: PropTypes.object
};

export default Project;