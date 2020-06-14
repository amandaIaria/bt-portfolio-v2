import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import ReactDOM from "react-dom";
import Modal from '../Modal/Modal';

class Project extends Component {
  constructor(props) {
    super(props);
    this.openModal.bind(this);

    this.state = {
      openModalState: false
    }
  }
  
  openModal(object, e) {
    // console.log('click'); // eslint-disable-line
    e.preventDefault();
    this.setState({ openModalState: !this.state.openModalState });
  }

  render() {
    const
      projectObject = this.props.projectObject,
      styleBackground = {
        backgroundImage: `url(${projectObject.image})`
      };

    return (
      <>
        <a className="bt-projects__link aiu-spacing--p32 aiu-color-background--black"
          style={styleBackground}
          onClick={(e) => this.openModal(projectObject, e)}
          href="#">
          <span>{projectObject.title}</span>
        </a>

        <div className={`aic-modal ${this.state.openModalState ? "aiu-display--grid" : "aiu-display--none"}`}>
          <div className="aic-modal__bg" onClick={(e) => this.openModal(projectObject, e)}></div>
          <div className="aic-modal__container">
            <div className="aic-modal__card">
              <header className="aic-modal__header" style={styleBackground}>
                <div className="aic-modal__close">
                  <a className="aic-modal__close-button" onClick={(e) => this.openModal(projectObject, e)}>
                    &times;
                  </a>
                </div>
              </header>
              <section className="aic-modal__content">
                <h1 className="aic-modal__title">{projectObject.title}</h1>
                <article>
                  {projectObject.description}
                </article>
              </section>
              
              <footer className="aic-modal__footer ail-grid__row">
                <div className="ail-grid__col--8">
                  {projectObject.tags.map((tag, index) => 
                    <span className="aic-modal__tag aiu-spacing--m-right8" key={index}>{tag}</span>
                  )}
                </div>
                <div className="ail-grid__col--4">
                  <button className="aic-a-button aic-a-button--primary aic-a-button--default aiu-float--right" href={projectObject.url} title={projectObject.url} target="_blank" rel="noopenner">Visit</button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </>
  
    );
  }
}

Project.propTypes = {
  projectObject: PropTypes.object
};

export default Project;