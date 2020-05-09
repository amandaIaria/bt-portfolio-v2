import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactForm from '../components/ContactForm/ContactForm';

class Contact extends Component {
  render() {
    return (
      <article className="aic-t-full-viewport bt-contact">
        <div className="bt-container">
          <ContactForm />
        </div>
      </article>
    );
  }
}

export default Contact;