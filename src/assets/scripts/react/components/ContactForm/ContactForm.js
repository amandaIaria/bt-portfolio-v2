import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Alerts from '../components/Alerts/Alerts';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _checkEmail(email) {
    const emailReg = /^[A-Za-z0-9!#$^&*|\-_+=~`?"]*([A-Za-z0-9!#$^&*|\-_+=~`?"]\.[A-Za-z0-9!#$^&*|\-_+=~`?"]+)*(\.{0,1}[A-Za-z0-9!#$^&*|\-_+=~`?"]@[A-Za-z0-9!#$^&*|\-_+=]{1,60})(\.[A-Za-z0-9!#$^&*|\-_+=~`?"]{2,60})*$/;
    return emailReg.test(email)
  }

  _checkSubject(subject) {
    return /^[A-z\s\w]{20}$/.test(subject)
  }

  _checkMessage(message) {
    return /REGEX/.test(message)
  }

  _checkForm(form) {
    if (!this._checkEmail(form[0].value)) {
      return false;
    }

    if (!this._checkSubject(form[1].value)) {
      return false;
    }

    if (!this._checkMessage(form[2].value)) {
      return false;
    }

    return true;
  }

  _sendInputs(inputs) {
    console.log(inputs[0].value); // eslint-disable-line
  }


  handleSubmit(e) {
    const inputs = e.target;
    if (this._checkForm(inputs)) {
      this._sendInputs(inputs);
    }
    else {
      alert('no');
    }
  }

  render() {
    return (
      <form className="bt-contact__form" onSubmit={this.handleSubmit}>
        <div className="ail-grid__row">
          <div className="ail-grid__col--6">
            <section className="aic-m-input-field">
              <label className="aic-m-input-field--bordered aic-m-input-field__input-container">
                <span className="aic-m-input-field__label">THis is an Input</span> 
                <input type="text" className="aic-m-input-field__input" />
              </label>
            </section>
          </div>
          <div className="ail-grid__col--6">
            <section className="aic-m-input-field">
              <label className="aic-m-input-field--bordered aic-m-input-field__input-container">
                <span className="aic-m-input-field__label">THis is an Input</span> 
                <input type="text" className="aic-m-input-field__input" />
              </label>
            </section>
          </div>
        </div>

        <div className="ail-grid__row">
          <div className="ail-grid__col--12">
            <div className="aic-m-input-field aic-m-input-field--textarea">
              <label className="aic-m-input-field__textarea-container aic-m-input-field--bordered">
                <span className="aic-m-input-field__label">Label</span>
                <textarea className="aic-m-input-field__textarea" rows="2" data-min-rows="3"></textarea>
              </label>
            </div>
          </div>
        </div>
        
        <div className="ail-grid__row">
          <div className="ail-grid__col--6">
            <button className="aic-a-button aic-a-button--secondary aic-a-button--default"><span className="aic-a-button__label">Button</span></button>
          </div>
          <div className="ail-grid__col--6">
            <input type="submit" className="aic-a-button aic-a-button--primary aic-a-button--default" role="submit" />
          </div>
        </div>
      </form>
    );
  }
}

export default ContactForm;