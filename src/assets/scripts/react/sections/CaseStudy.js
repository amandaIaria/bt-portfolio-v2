import React, { Component } from "react";
import ReactDOM from "react-dom";


class CaseStudy extends Component {
  render() {
    return (
      <article className="aic-t-full-viewport">
        <div className="bt-container">
          <h2>Case Study</h2>
          <div className="aic-a-typography--body2">
          I’m baby 3 wolf moon freegan Austin tbh fingerstache tote bag coloring book street art fashion axe. Helvetica ramps humblebrag heirloom meggings, chambray narwhal flannel skateboard fashion axe messenger bag la croix schlitz. 
          </div>
          <hr />
          <div className="ail-grid__row">
            <div className="ail-grid__col ail-grid__col--6">
              <h2>Contents</h2>
              <ul>
                <li><a href="#" className="bt-casestudy__link">Link</a></li>
                <li><a href="#" className="bt-casestudy__link">Link</a></li>
                <li><a href="#" className="bt-casestudy__link">Link</a></li>
                <li><a href="#" className="bt-casestudy__link">Link</a></li>
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