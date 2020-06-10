import React, { Component } from "react";
import ReactDOM from "react-dom";


class CaseStudy extends Component {
  render() {
    return (
      <article className="aic-t-full-viewport btjs-portfolio__section" id="casestudy">
        <div className="bt-container">
          <h2 className="bt-header__title">Case Study</h2>
          <div className="aic-a-typography--body2 ">
            As I am building this updated portfolio I wanted to document the process. 
            In the end it&apos;ll be an overly engineered portfolio, but isn&apos;t that the point with these sort or projects. 
            To learn and grow, then to show the world.
          </div>
          <hr />
          <div className="ail-grid__row">
            <div className="ail-grid__col ail-grid__col--6">
              <h2>Contents</h2>
              <ul>
                <li><a href="#" className="bt-casestudy__link">BEM, ITCSS, Atomic</a></li>
                <li><a href="#" className="bt-casestudy__link">REACT</a></li>
                <li><a href="#" className="bt-casestudy__link">Heroku</a></li>
                <li><a href="#" className="bt-casestudy__link">Design System</a></li>
                <li><a href="#" className="bt-casestudy__link"></a></li>
              </ul>
            </div>
            <div className="ail-grid__col ail-grid__col--6">
              <div className="bt-casestudy__content">
                <p>
                  I’m baby 3 wolf moon freegan Austin tbh fingerstache tote bag coloring book street art fashion axe. Helvetica ramps humblebrag heirloom meggings, chambray narwhal flannel skateboard fashion axe messenger bag la croix schlitz. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default CaseStudy;