import React, { Component } from "react";
import ReactDOM from "react-dom";

class Contact extends Component {
  render() {
    return (
      <article className="aic-t-full-viewport">
        <div className="bt-container">
          <form>
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
                <button className="aic-a-button aic-a-button--primary aic-a-button--default" role="submit"><span className="aic-a-button__label">Button</span></button>
              </div>
            </div>
          </form>
        </div>
      </article>
    );
  }
}

export default Contact;