import React, { Component } from "react";
import ReactDOM from "react-dom";


class Header extends Component {
  render() {
    return (
      <article className="aic-t-full-viewport aiu-display--grid aiu-align--center">
        <div>
          <div className="ail-grid__row">
            <div className="ail-grid__col--6"></div>
            <div className="ail-grid__col--6 aiu-align-text--right">I’m Amanda and this is</div>
          </div>
          <div className="ail-grid__row">
            <div className="ail-grid__col--12 aiu-align-text--center aiu-color-background--blue2 aiu-color-text--white"><h1>Beautiful</h1></div>
          </div>
          <div className="ail-grid__row">
            <div className="ail-grid__col--12 aiu-align-text--center aiu-color-background--flatblack aiu-color-text--white"><h1>Tragedy</h1></div>
          </div>
          <div className="ail-grid__row">
            <div className="ail-grid__col--6">Building accessible, amazing websites and components</div>
            <div className="ail-grid__col--6"></div>
          </div>
        </div>
      </article>
    );
  }
}

export default Header;