import React, { Component } from "react";
import ReactDOM from "react-dom";


class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer className="bt-footer">
        <span>&copy;&nbsp;</span><span className="bt-footer__year">{year}</span>&nbsp;<span>Beautiful Tragedy &mdash; Amanda Iaria</span>
      </footer>
    );
  }
}

export default Footer;