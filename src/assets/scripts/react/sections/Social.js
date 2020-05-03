import React, { Component } from "react";
import ReactDOM from "react-dom";


class Social extends Component {
  render() {
    return (
      <article className="bt-social aic-t-full-viewport">
        <div className="ail-grid__row">
          <div className="ail-grid__col--12">

          </div>
        </div>
        <div className="ail-grid__row">
          <div className="ail-grid__col--12">
            
          </div>
        </div>
        <div className="ail-grid__row bt-footer">
          <div className="ail-grid__col--3">
            <span>&copy;</span><span className="bt-footer__year"></span><span>Beautiful Tragedy &mdash; Amanda Iaria</span>
          </div>
          <div className="ail-grid__col--9">
            <ul className="bt-footer__social">
              <li><a href="#" className="bt-footer__link" target="_blank">Codepen</a></li>
              <li><a href="#" className="bt-footer__link" target="_blank">LinkedIn</a></li>
              <li><a href="#" className="bt-footer__link" target="_blank">Github</a></li>
              <li><a href="#" className="bt-footer__link" target="_blank">Instagram</a></li>
              <li><a href="#" className="bt-footer__link" target="_blank">Twitter</a></li>
              <li><a href="#" className="bt-footer__link" target="_blank">DeviantArt</a></li>
              <li><a href="#" className="bt-footer__link" target="_blank">Behance</a></li>
              <li><a href="#" className="bt-footer__link" target="_blank">Dribble</a></li>
              <li><a href="#" className="bt-footer__link" target="_blank">Twitch</a></li>
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

export default Social;