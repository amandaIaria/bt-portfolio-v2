import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from './Footer';

class Contact extends Component {
  render() {
    return (
      <article className="aic-t-full-viewport bt-contact btjs-portfolio__section" id="contact">
        <div className="bt-container">
          <div className="ail-grid__row aiu-align--center bt-full-height">
            <div className="ail-grid__col--12">
              <header className="bt-header aiu-spacing--m-bottom16 aiu-color-text--white">
                <h2 className="bt-header__title">Contact Me</h2>
              </header>
              <ContactForm />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Contact;