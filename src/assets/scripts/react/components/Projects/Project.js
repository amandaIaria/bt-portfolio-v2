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
    e.preventDefault();
    this.setState({ openModalState: !this.openModalState });
  }

  renderModal(object) {
    const styleBackground = {
      backgroundImage: `url(${object.image})`
    };

    return (
      <div className={`aic-modal ${this.state.openModalState ? "aiu-display--block" : "aiu-display--none"}`}>
        <div className="aic-modal__container">
          <header className="aic-modal__header" style={styleBackground}>
            <div className="aic-modal__close">
              <a className="aic-modal__close-button" onClick={(e) => this.openModal(object, e)}>
                &times;
              </a>
            </div>
          </header>
          <section className="aic-modal__content">
            <h1>{object.title}</h1>
            <article>
              {object.description}
            </article>
          </section>
          <footer className="aic-modal__footer">
            <span className="aic-modal__tag">{object.tags}</span>
            <button className="aic-button aic-button--primary aic-button--solid" href={object.url} title={object.url} target="_blank" rel="noopenner">Visit</button>
          </footer>
        </div>
        <div className="aic-modal__bg"></div>
      </div>
    );
  }

  renderProject(object) {
    const styleBackground = {
      backgroundImage: `url(${object.image})`
    };

    return (
      <a className="bt-projects__link aiu-spacing--p32 aiu-color-background--black"
        style={styleBackground}
        onClick={(e) => this.openModal(object, e)}
        href="#">
        <span>{object.title}</span>
      </a>
    );
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
          <div className="aic-modal__bg"></div>
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
              
              <footer className="aic-modal__footer">
                {projectObject.tags.map((tag, index) => 
                  <span className="aic-modal__tag" key={index}>{tag}</span>
                )}
                <button className="aic-a-button aic-a-button--primary aic-a-button--default" href={projectObject.url} title={projectObject.url} target="_blank" rel="noopenner">Visit</button>
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