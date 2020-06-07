import React, { Component } from "react";
import PropTypes from 'prop-types';
import NavigationLink from './NavigationLinks';
import WindowScroll from '../../../components/window-scroll';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeNav: props.open
    }

    this.baseState = this.state 
    this.goToScroll = this.goToScroll.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if (nextProps.open !== this.props.open) {
      this.setState({ closeNav: nextProps.open })
    }
  }

  goToScroll(e) {
    e.preventDefault();
    const
      div = e.target.hash,
      $div = document.querySelector(div.toLowerCase());

    this.setState({closeNav: false});
    this.props.parentCallback(this.state.closeNav);
    setTimeout(() => {
      $div.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }, 100);
  }

  render() {
    return (
      <div className={`ail-grid aic-t-full-viewport bt-navigation aiu-color-background--blue2 ${this.state.closeNav ? "aiu-display--block" : "aiu-display--none"}`} id="nav">
        <div className="ail-grid__row aiu-align--center">
          <div className="ail-grid__col--12">
            <div>
              <ul className="bt-navigation__container aic-a-unordered aic-a-unordered--nostyle">
                <li className="aic-a-unordered__item">
                  <a href="#about" className="aic-o-navigation__link" onClick={this.goToScroll}> About </a>
                </li>
                <li className="aic-a-unordered__item">
                  <a href="#casestudy" className="aic-o-navigation__link"  onClick={this.goToScroll}> Case Study </a>
                </li>
                <li className="aic-a-unordered__item">
                  <a href="#projects" className="aic-o-navigation__link"  onClick={this.goToScroll}> Projects </a>
                </li>
                <li className="aic-a-unordered__item">
                  <a href="#contact" className="aic-o-navigation__link"  onClick={this.goToScroll}> Contact </a>
                </li>
                <li className="aic-a-unordered__item">
                  <a href="#social" className="aic-o-navigation__link" onClick={this.goToScroll}> Social </a>
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
  open: PropTypes.bool,
  parentCallback: PropTypes.func
};

export default Navigation;