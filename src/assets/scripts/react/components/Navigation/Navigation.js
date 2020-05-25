import React, { Component } from "react";
import PropTypes from 'prop-types'; 

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className={`ail-grid aic-t-full-viewport bt-navigation aiu-color-background--blue2 ${this.props.open ? "aiu-display--block" : "aiu-display--none"}`} id="nav">
        <div className="ail-grid__row aiu-align--center">
          <div className="ail-grid__col--12">
            <div>
              <ul className="bt-navigation__container aic-a-unordered aic-a-unordered--nostyle">
                <li className="aic-a-unordered__item">
                  <a href="#" className="aic-o-navigation__link">About</a>
                </li>
                <li className="aic-a-unordered__item">
                  <a href="#" className="aic-o-navigation__link">Case Study</a>
                </li>
                <li className="aic-a-unordered__item">
                  <a href="#" className="aic-o-navigation__link">Projects</a>
                </li>
                <li className="aic-a-unordered__item">
                  <a href="#" className="aic-o-navigation__link">Contact</a>
                </li>
                <li className="aic-a-unordered__item">
                  <a href="#" className="aic-o-navigation__link">Social</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  open: PropTypes.bool
};

export default Navigation;