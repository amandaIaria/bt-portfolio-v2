import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import ReactDOM from "react-dom";

class Modal extends Component {
  constructor(props) {
    super(props);
    
  }
  
  renderModal() {
    // const styleBackground = {
    //   backgroundImage: `url(${object.image})`
    // };

    return (
     
      <div className="content__container">
        <header className="content__header">
          <div className="content__close">
            <a className="close-button" id="close">
              &times;
            </a>
          </div>
        </header>
        <section className="content__content">
          <h1>Hello</h1>
          <article>
            <p>Lorem ipsum dolor amet shoreditch fashion axe aesthetic waistcoat, biodiesel offal lumbersexual meditation. Woke church-key subway tile, XOXO shabby chic normcore glossier put a bird on it. Vegan tbh fingerstache, shabby chic pickled four loko cliche banh mi bicycle rights actually typewriter. </p>
            <p>Lorem ipsum dolor amet shoreditch fashion axe aesthetic waistcoat, biodiesel offal lumbersexual meditation. Woke church-key subway tile, XOXO shabby chic normcore glossier put a bird on it. Vegan tbh fingerstache, shabby chic pickled four loko cliche banh mi bicycle rights actually typewriter. </p>
          </article>
        </section>
        <footer className="content__footer">
          <button className="btn" href="#">See The example</button>
        </footer>
     </div>
    )
  }

  render() {
    // const
      // projectObject = this.props.projectObject;

    return (
      this.renderModal()
    );
  }
}

Modal.propTypes = {
  // projectObject: PropTypes.object
};

export default Modal;