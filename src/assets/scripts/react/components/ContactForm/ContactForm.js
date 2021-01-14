import React, { Component, state, setState } from "react";
import ReactDOM from "react-dom";
import Alerts from '../Alerts/Alerts';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      alert: 'false',
      alertMessage: '',
      alertType: 'error',
      errorClassLastName: false,
      errorMessageLastName: '',
      errorClassFirstName: false,
      errorMessageFirstName: '',
      errorClassSubject: false,
      errorMessageSubject: '',
      errorClassEmail: false,
      errorMessageEmail: '',
      errorClassMessage: false,
      errorMessageMessage: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  _alertState() {
    setTimeout(() => {
      this.setState({
        alert: 'false'
      })
    }, 1000);
  }

  _checkEmail(email) {
    const emailReg = /^[A-Za-z0-9!#$^&*|\-_+=~`?"]*([A-Za-z0-9!#$^&*|\-_+=~`?"]\.[A-Za-z0-9!#$^&*|\-_+=~`?"]+)*(\.{0,1}[A-Za-z0-9!#$^&*|\-_+=~`?"]@[A-Za-z0-9!#$^&*|\-_+=]{1,60})(\.[A-Za-z0-9!#$^&*|\-_+=~`?"]{2,60})*$/;
    return emailReg.test(email);
  }

  _checkSubject(subject) {
    return /^[A-z\s]{2,30}$/.test(subject);
  }

  _checkMessage(message) {
    return /^[A-z0-9,.\"\'\!\(\:\;\?\/\)\s]{2,140}$/.test(message); // eslint-disable-line
  }

  _checkForm(form) {
    if (!this._checkEmail(form.email.value)) return false;

    if (!this._checkSubject(form.firstName.value) || !this._checkSubject(form.lastName.value)) return false;

    if (!this._checkSubject(form.subject.value)) return false;

    if (!this._checkMessage(form.message.value)) return false;

    return true;
  }

  _errorStates(target) {
    const {name, value} = target;
    if (target.value !== '') {
      switch(target.name) {
        case 'firstName':
          if (!this._checkSubject(target.value)) {
            this.setState({
              errorClassFirstName: true,
              errorMessageFirstName: 'No special Characters and less than 30 Characters. Current: ' + value.length
            });
          } else {
            this.setState({
              errorClassFirstName: false,
              errorMessageFirstName: ''
            });
          }
          break;
        case 'lastName':
          if (!this._checkSubject(target.value)) {
            this.setState({
              errorClassLastName: true,
              errorMessageLastName: 'No special Characters and less than 30 Characters. Current: ' + value.length
            });
          } else {
            this.setState({
              errorClassLastName: false,
              errorMessageLastName: ''
            });
          }
          break;
        case 'subject':
          if (!this._checkSubject(target.value)) {
            this.setState({
              errorClassSubject: true,
              errorMessageSubject: 'No special Characters and less than 30 Characters. Current: ' + value.length
            });
          } else {
            this.setState({
              errorClassSubject: false,
              errorMessageSubject: ''
            });
          }
          break;
        case 'email':
          if (!this._checkEmail(target.value)) {
            this.setState({
              errorClassEmail: true,
              errorMessageEmail: 'Emails need to be abc@abc.com format.'
            });
          } else {
            this.setState({
              errorClassEmail: false,
              errorMessageEmail: ''
            });
          }
          break;
        case 'message':
          if (!this._checkMessage(target.value)) {
            this.setState({
              errorClassMessage: true,
              errorMessageMessage: 'No special Characters and less than 140 Characters. Current: ' + value.length
            });
          } else {
            this.setState({
              errorClassMessage: false,
              errorMessageMessage: ''
            });
          }
          break;
      }
    }
  }

  _errorOnChange(target) {
    const {name, value} = target;
    if (name === 'message' && value.length >= 140) {
      this.setState({
        errorClassMessage: true,
        errorMessageMessage: 'Please make sure your message is less than 140 characters. Current amount: ' + value.length
      });
    } else if ((name === 'firstName' || name === 'lastName' || name === 'subject') && value.length >= 30) {
      switch(target.name) {
        case 'firstName':
          this.setState({
            errorClassFirstName: true,
            errorMessageFirstName: 'You over 30 characters. Current amount: ' + value.length
          });
          break;
        case 'lastName':
          this.setState({
            errorClassLastName: true,
            errorMessageLastName: 'You over 30 characters. Current amount: ' + value.length
          });
          break;
        case 'subject':
          this.setState({
            errorClassSubject: true,
            errorMessageSubject: 'You over 30 characters. Current amount: ' + value.length
          });
          break;
      }
    } else {
      switch(target.name) {
        case 'firstName':
          this.setState({
            errorClassFirstName: false,
            errorMessageFirstName: ''
          });
          break;
        case 'lastName':
          this.setState({
            errorClassLastName: false,
            errorMessageLastName: ''
          });
          break;
        case 'subject':
          this.setState({
            errorClassSubject: false,
            errorMessageSubject: ''
          });
          break;
        case 'message':
          this.setState({
            errorClassMessage: false,
            errorMessageMessage: ''
          });
          break;
      }
    }
  }

  _sendInputs(inputs) {
    const
      urlPath = 'https://bt-prod.herokuapp.com',
      url = `${urlPath}/send`,
      data = {
        name: `${inputs.firstName.value} ${inputs.lastName.value}`,
        email: inputs.email.value,
        subject: inputs.subject.value,
        message: inputs.message.value
      },
      options = {
        'method': 'POST',
        'body': JSON.stringify(data),
        'mode': 'cors', // no-cors, *cors, same-origin
        'cache': 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        'credentials': 'same-origin', // include, *same-origin, omit
        'headers': {
          'Content-Type': 'application/json',
        }
      };
    this.setState({
      alert: 'true',
      alertType: 'information',
      alertMessage: 'Sending ...'
    });

    fetch(url, options)
      .then((resp) => resp)
      .then((result) => {
        if (result.status === 200) {
          this.setState({
            alert: 'true',
            alertType: 'success',
            alertMessage: 'Thanks for the Email!'
          });
          this._alertState();
        } else {
          this.setState({
            alert: 'true',
            alertType: 'error',
            alertMessage: 'Please Try Again later'
          });
          this._alertState();
        }
      })
      .catch((error) => {
        this.setState({
          alert: 'true',
          alertType: 'error',
          alertMessage: 'Please Try Again lata'
        });
        this._alertState();
      });
  }

  handleOnChange(target) {
    const {name, value} = target;
    this.setState({
      [name]: value
    });
    this._errorOnChange(target);
  }

  handleBlur(target) {
    this._errorStates(target);
  }

  handleSubmit(e) {
    e.preventDefault();
    const inputs = e.target;

    if (this._checkForm(inputs)) {
      this._sendInputs(inputs);
    } else {
      this.setState({
        alert: 'true',
        alertType: 'error',
        alertMessage: 'Please Try Again later'
      });
      this._alertState();
    }
  }

  render() {
    return (
      <form className="bt-contact__form" onSubmit={this.handleSubmit}>
        <Alerts
          offOn={this.state.alert}
          type={this.state.alertType}
          message={this.state.alertMessage}
        />
        <div className="ail-grid__row aiu-spacing--m-bottom16">
          <div className="ail-grid__col--6">
            <section className={this.state.errorClassFirstName ? "aic-m-input-field aic-o-input-helper aic-o-input-helper--error" : "aic-m-input-field aic-o-input-helper"} >
              <label className="aic-m-input-field--bordered aic-m-input-field__input-container">
                <span className="aic-m-input-field__label">First Name</span>
                <input
                  className="aic-m-input-field__input"
                  name="firstName"
                  id="firstName"
                  onChange={(evt) => this.handleOnChange(evt.target)}
                  onBlur={(evt) => this.handleBlur(evt.target)}
                  value={this.state.firstName}
                />
              </label>
              <div className="aic-o-input-helper__helper aiu-color-text--white">
                {this.state.errorMessageFirstName}
              </div>
            </section>
          </div>
          <div className="ail-grid__col--6">
            <section className={this.state.errorClassLastName ? "aic-m-input-field aic-o-input-helper aic-o-input-helper--error" : "aic-m-input-field aic-o-input-helper"} >
              <label className="aic-m-input-field--bordered aic-m-input-field__input-container">
                <span className="aic-m-input-field__label">Last Name</span> 
                <input type="text"
                  name="lastName"
                  id="lastName"
                  className="aic-m-input-field__input"
                  onChange={(evt) => this.handleOnChange(evt.target)}
                  onBlur={(evt) => this.handleBlur(evt.target)}
                  value={this.state.lastName} />
              </label>
              <div className="aic-o-input-helper__helper aiu-color-text--white">
                {this.state.errorMessageLastName}
              </div>
            </section>
          </div>
        </div>

        
        <div className="ail-grid__row aiu-spacing--m-bottom16">
          <div className="ail-grid__col--6">
            <section className={this.state.errorClassEmail ? "aic-m-input-field aic-o-input-helper aic-o-input-helper--error" : "aic-m-input-field aic-o-input-helper"} >
              <label className="aic-m-input-field--bordered aic-m-input-field__input-container">
                <span className="aic-m-input-field__label">Email</span>
                <input
                  className="aic-m-input-field__input"
                  name="email"
                  id="email"
                  type="email"
                  onChange={(evt) => this.handleOnChange(evt.target)}
                  onBlur={(evt) => this.handleBlur(evt.target)}
                  value={this.state.email}
                />
              </label>
              <div className="aic-o-input-helper__helper aiu-color-text--white">
                {this.state.errorMessageEmail}
              </div>
            </section>
          </div>
          <div className="ail-grid__col--6">
            <section className={this.state.errorClassSubject ? "aic-m-input-field aic-o-input-helper aic-o-input-helper--error" : "aic-m-input-field aic-o-input-helper"} >
              <label className="aic-m-input-field--bordered aic-m-input-field__input-container">
                <span className="aic-m-input-field__label">Subject</span> 
                <input type="text"
                  name="subject"
                  id="subject"
                  className="aic-m-input-field__input"
                  onChange={(evt) => this.handleOnChange(evt.target)}
                  onBlur={(evt) => this.handleBlur(evt.target)}
                  value={this.state.subject} />
              </label>
              <div className="aic-o-input-helper__helper aiu-color-text--white">
                {this.state.errorMessageSubject}
              </div>
            </section>
          </div>
        </div>

        <div className="ail-grid__row  aiu-spacing--m-bottom16">
          <div className="ail-grid__col--12">
            <section className={this.state.errorClassMessage ? "aic-m-input-field aic-o-input-helper aic-o-input-helper--error" : "aic-m-input-field aic-o-input-helper"} >
              <label className="aic-m-input-field__textarea-container aic-m-input-field--bordered">
                <span className="aic-m-input-field__label">Message</span>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  data-min-rows="3"
                  className="aic-m-input-field__textarea"
                  onChange={(evt) => this.handleOnChange(evt.target)}
                  onBlur={(evt) => this.handleBlur(evt.target)}
                  defaultValue={this.state.message} >
                  </textarea>
              </label>
              <div className="aic-o-input-helper__helper aiu-color-text--white">
                {this.state.errorMessageMessage}
              </div>
            </section>
          </div>
        </div>
        
        <div className="ail-grid__row">
          <div className="ail-grid__col--6">
            <button className="aic-a-button aic-a-button--secondary aic-a-button--default"><span className="aic-a-button__label">Nevermind</span></button>
          </div>
          <div className="ail-grid__col--6">
            <input type="submit" className="aiu-float--right aic-a-button aic-a-button--primary aic-a-button--default" role="submit" value="send message" />
          </div>
        </div>
      </form>
    );
  }
}

export default ContactForm;