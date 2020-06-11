import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Alerts extends Component {

  render() {
    return (
    <section className="aiu-position--fixed aic-o-alerts aic-o-alerts__container aic-o-alerts--information">
        <div className="aic-o-alerts__icon">
            <span className="material-icons">info</span>
        </div>
        <div className="aic-o-alerts__content">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        </div>
        <div className="aic-o-alerts__close">
            <button className="aic-a-button aic-a-button--alerts">
                <span className="material-icons">close</span>
            </button>
        </div>
    </section>
    );
  }
}

export default Alerts;