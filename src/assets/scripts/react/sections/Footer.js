import React, { Component } from "react";
import ReactDOM from "react-dom";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0
      && rect.left >= 0
      && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  isElementPeekingInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  handleScroll(event) {
    const $articles = Object.values(event.target.body.children[0].children).filter((div) => div.tagName === 'ARTICLE'),
          $footer = document.getElementById('footer');
    
    $articles.forEach(($article) => {
      if ((this.isElementInViewport($article) || this.isElementPeekingInViewport($article)) && $article.id === 'contact') {
        this.setState({
          position: true
        });
      } else {
        this.setState({
          position: false
        });
      }
    });
  }


  render() {
    const year = new Date().getFullYear();
    return (
      <footer id="footer" className={this.state.position ? "bt-footer bt-footer--light aiu-color-text--white" : "bt-footer bt-footer--dark"}>
        <span>&copy;&nbsp;</span><span className="bt-footer__year">{year}</span>&nbsp;<span>Beautiful Tragedy &mdash; Amanda Iaria</span>
      </footer>
    );
  }
}

export default Footer;