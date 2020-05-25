import React, { Component } from "react";
import ReactDOM from "react-dom";
import Selfie from '../../../img/selfie/myphoto.png';

class About extends Component {
  render() {
    return (
      <article className="ail-grid aic-t-full-viewport btjs-portfolio__section" id="about">
        <div className="ail-grid__row aiu-align--center">
          <div className="ail-grid__col ail-grid__col--6">
            <div className="ail-grid__row aiu-align--center">
              <div className="ail-grid__col ail-grid__col--6">
                <h2>About</h2>
              </div>
              <div className="ail-grid__col ail-grid__col--6">
                <header>
                  <span className="aic-a-typography--accent aiu">
                    Design Cutting-Edge Websites to Assist Clients in Meeting Goals
                  </span>
                </header>
                <div className="">
                  <p>Amanda develops engaging websites dedicated to expanding brand awareness and fascinating targeted audiences. They are experienced in creating static websites, WordPress themes, and working in large codebases. They can identify and resolve issues with persistence and dedication and is an exceptional communicator excited about learning software while collaborating with others. They can be resourceful, reliable, and professional. Amanda is known for their strong work ethic and working well in the fast-paced environment.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ail-grid__col ail-grid__col--6">
            <div className="aic-image__container bt-about__image-container">
              <img src={Selfie} className="aic-image__img bt-about__image" />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default About;