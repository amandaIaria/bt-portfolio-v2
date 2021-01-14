import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Alerts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className={`aic-o-alerts aic-o-alerts__container aiu-spacing--m-bottom32 aic-o-alerts--${this.props.type}` + (this.props.offOn === 'false' ? ' aiu-display--none' : '')}>
          <div className="aic-o-alerts__icon">
            <span className="material-icons">error</span>
          </div>
          <div className="aic-o-alerts__content">
            {this.props.message}
          </div>
          <div className="aic-o-alerts__close">
            <button className="aic-a-button aic-a-button--alerts" onClick={(e) => this.handleAlertClose(e)}>
              <span className="material-icons">close</span>
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default Alerts;

Alerts.propTypes = {
  offOn: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

Alerts.defaultProps = {
  offOn: 'false',
  type: 'error',
  message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores'
};
