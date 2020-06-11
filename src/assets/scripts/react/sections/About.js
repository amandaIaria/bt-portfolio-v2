import React, { Component } from "react";
import ReactDOM from "react-dom";
import Selfie from '../../../img/selfie/myphoto.png';

class About extends Component {
  render() {
    return (
      <article className="ail-grid aic-t-full-viewport btjs-portfolio__section" id="about">
        <div className="ail-grid__row aiu-align--center">
          <div className="ail-grid__col--6-xl">
            <div className="ail-grid__row aiu-align--center">
              <div className="ail-grid__col--6-xl ">
                <h2 className="bt-header__title">About</h2>
              </div>
              <div className="ail-grid__col--6-xl ">
                <header>
                  <span className="aic-a-typography--accent aiu">
                    Create Cutting-Edge Apps with a Focus on Componets, Accessibility, and UX
                  </span>
                </header>
                <div className="">
                  <p>
                  Amanda has created gone from a LAMP stack developer to someone who focuses on UX/UI while growing brand awareness. 
                  They&apos;ve gone from small to large codebases and from legacy to new codebases. 
                  They can identify and resolve issues with persistence and dedication and is an exceptional communicator excited 
                  about learning software while collaborating with others. They can be resourceful, reliable, and professional. 
                  Amanda is known for their strong work ethic and working well in the fast-paced environment. 
                  Some of they&apos;re skills include ES6 Javascript, HTML, SCSS, and Webpack
                  </p>

                  
                </div>
              </div>
            </div>
          </div>
          <div className="ail-grid__col--6-xl ">
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